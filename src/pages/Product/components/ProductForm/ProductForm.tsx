import Swal from 'sweetalert2'
import {useAppDispatch , useAppSelector} from '../../../../hooks/useRedux'
import { useForm } from '../../../../hooks/useForm';
import { addMovement } from '../../../../redux/slices/movementSlice';
import styles from './ProductForm.module.css';
import Product from '../../../../interfaces/Product';
import Input from '../../../../components/Input/Input';
import CustomButton from '../../../../components/ButtonCustom/CustomButton';
import { GetProducts } from '../../../../helpers/selectors/GetProducts';
import { GetMovements } from '../../../../helpers/selectors/GetMovements';
import Movement from '../.././../../interfaces/Movement'
import { types } from '../../../../types/types';

interface ProductFormProps {
  product:Product
}

export const ProductForm = ({product,...props}:ProductFormProps) => {
  const dispatch = useAppDispatch();
  let products = GetProducts();
  let movements = GetMovements();
  
  const handleUpdate = () => {
      product =  products.filter(product => product.id == product.id)[0] ;
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
      Swal.fire('Actualización Exitosa', `producto ${product.name} actualizado con éxito`, 'success')  
  }

  const [formValues, handleInputChange] = useForm({
    name: product?product.name:"",
    price: product?product.price:"",
    quantity: product?product.quantity:"",
  });
  
  const { name, price, quantity } = formValues;

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
      <CustomButton
        variant={"primary"}
        text={"Actualizar Inventario"}
        icon={""}
        handelClick={handleUpdate}
        disabled = {false}
      />
    </form>
  )
};

export default ProductForm; 

