import Swal from 'sweetalert2'
import { useForm } from '../../../../hooks/useForm';
import {useAppDispatch , useAppSelector} from '../../../../hooks/useRedux'
import { addMovement } from '../../../../redux/slices/movementSlice';
import { updateProduct } from '../../../../redux/slices/productSlice';
import Input from '../../../../components/Input/Input';
import ButtonBox from '../../../../components/ButtonBox/ButtonBox';

import styles from './ProductForm.module.css';
import { types } from '../../../../types/types';
import Product from '../../../../interfaces/Product';
import Movement from '../.././../../interfaces/Movement'
import { GetMovements } from '../../../../helpers/selectors/GetMovements';
import Button from '../../../../interfaces/Button';

interface ProductFormProps {
  product:Product
}

export const ProductForm = ({product}:ProductFormProps) => {
  const dispatch = useAppDispatch();
  let movements = GetMovements();

  const handleUpdate = () => {
      let totalPrice = quantity * price; 
      let movement:Movement = {
        id : movements.length,
        product:product,
        type: types.movementTypes["AJUSTE"],
        date: new Date(),
        quantity: quantity,
        priceUnitary:price,
        priceTotal: totalPrice,
        quantitySale: 0,
        priceUnitarySale:0,
        priceTotalSale: 0,
        balanceUnitary:quantity,
        balancePrice:totalPrice
      }
      dispatch(addMovement(movement))
      dispatch(updateProduct({...product,quantity:quantity,price:price} ))
      Swal.fire('Actualización Exitosa', `producto ${product.name} actualizado con éxito`, 'success')  
  }

  const [formValues, handleInputChange] = useForm({
    name: product?product.name:"",
    price: product?product.price:"",
    quantity: product?product.quantity:"",
  });
  
  const { name, price, quantity } = formValues;

  let buttons:Button[] = [
    {
      variant:"primary",
      text:"Actualizar Inventario",
      icon:"",
      disabled:quantity && price ?false:true,
      isLink: false,
      link:"",
      handelClick:  handleUpdate
    },
    {
      variant:"success",
      text:"Ver Movimientos",
      icon:"",
      disabled:false,
      isLink: true,
      link:`/dashboard/movement/${product.id}`,
      handelClick: ()=>{}
    }
  ] 

  return(
    <form onSubmit={handleUpdate}>
        <br />
        <Input 
          label={"Nombre"} 
          name={"name"} 
          value={name} 
          disabled={true} 
          change={handleInputChange} 
        />
        <Input 
          label={"Precio"} 
          name={"price"} 
          value={price} 
          disabled={false} 
          change={handleInputChange} 
        />
        <Input 
          label={"Cantidad"} 
          name={"quantity"} 
          value={quantity} 
          disabled={false} 
          change={handleInputChange} 
        />
        <br />
        <ButtonBox buttons={buttons}/>
    </form>
  )
};

export default ProductForm; 

