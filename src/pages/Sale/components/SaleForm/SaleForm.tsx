import Swal from 'sweetalert2'
import Input from '../../../../components/Input/Input';
import InputSelect from '../../../../components/InputSelect/InputSelect';
import ButtonBox from '../../../../components/ButtonBox/ButtonBox';
import styles from './SaleForm.module.css';
import Product from '../../../../interfaces/Product';
import { useForm } from '../../../../hooks/useForm';
import Button from '../../../../interfaces/Button';
import { GetMovements } from '../../../../helpers/selectors/GetMovements';
import { useAppDispatch } from '../../../../hooks/useRedux';
import Movement from '../../../../interfaces/Movement';
import { types } from '../../../../types/types';
import { updateProduct } from '../../../../redux/slices/productSlice';
import { addMovement } from '../../../../redux/slices/movementSlice';
import { GetProducts } from '../../../../helpers/selectors/GetProducts';
import { GetMovementByProductId } from '../../../../helpers/selectors/GetMovementByProductId';
import { useEffect } from 'react';


const SaleForm = () => {
  const dispatch = useAppDispatch();
  let   products   = GetProducts();
  let   movements  = GetMovements();
  const [formValues, handleInputChange,handleSelectChange,reset] = useForm({
    quantity: "",
    productSelect: 0,
  });
  
  const { quantity, productSelect } = formValues;
  let  movementsProduct = GetMovementByProductId(productSelect);
  

  useEffect(() => {
    
  }, [productSelect]);

  const ItemsSelect = (products:any)=>{
    let itemsSelect: any[] =[]; 
    products.map(({id, name}:Product) => {
      itemsSelect.push({id, name});
    })
    return itemsSelect;
  }

  const handleSale = () =>{
        if (productSelect == 0) {
          Swal.fire('Error', `Debe seleccionar un producto para realizar una venta`, 'error')
          return
        } 

        let product:Product =  products.filter(product => product.id == productSelect)[0] ;
        
        if (Number(product.quantity) <= 0) {
          Swal.fire('Error', `No se puede vender el producto: ${product.name}. Producto sin stock`, 'error')
          return
        }

        if (quantity > Number(product.quantity)) {
          Swal.fire('Error', `No se pueden vender ${quantity} unidades del producto: ${product.name}. Solo hay disponibles ${product.quantity}`, 'error')
          return
        }

        let lastBalance     = Number(movementsProduct.slice(-1)[0].balancePrice); 
        let price           = product.price ; 
        let totalPrice      = quantity * Number(product.price); 
        let newQuantity     = Number(product.quantity) - quantity;

        console.log("lastBalance",lastBalance);
        console.log("totalPrice",totalPrice);

        let balance         = lastBalance - totalPrice;

        let movement:Movement= {
          id : movements.length,
          product:product,
          type: types.movementTypes["SALIDA"],
          date: new Date(),
          quantity: 0,
          priceUnitary:0,
          priceTotal: 0,
          quantitySale: quantity,
          priceUnitarySale:price,
          priceTotalSale: totalPrice,
          balanceUnitary:newQuantity,
          balancePrice:balance
        }
        dispatch(updateProduct({...product,quantity:newQuantity,price:price} ))
        dispatch(addMovement(movement))
        reset();
        Swal.fire('Venta Exitosa', `Venta de producto ${product.name} Registrada con éxito`, 'success')
       

      
  }

  let buttons:Button[] = [
    {
      variant:"primary",
      text:"Registrar Venta",
      icon:"",
      disabled:(quantity && productSelect != 0)?false:true,
      isLink: false,
      link:"",
      handelClick: handleSale
    }
  ] ;

  return(
    <div className={styles.SaleForm}>
        <form onSubmit={handleSale} >
          <br />
            <InputSelect
              id={"productSelect"}
              label={"Seleccione Producto"}
              name="productSelect"
              items={ItemsSelect(products)}
              onChange={handleSelectChange}
            />
            <br/>
            <Input 
              label={"Ingrese Cantidad"} 
              name={"quantity"} 
              value={quantity} 
              disabled={false} 
              change={handleInputChange} 
            />
            <br/>
          <ButtonBox buttons={buttons}/>

        </form>
    </div>
  )

}

export default SaleForm;
