import Swal from 'sweetalert2'
import {useAppDispatch,useAppSelector } from '../../../../hooks/useRedux'
import { useForm } from '../../../../hooks/useForm';
import { addMovement } from '../../../../redux/slices/movementSlice';
import Input from '../../../../components/Input/Input';
import InputSelect from '../../../../components/InputSelect/InputSelect';
import ButtonBox from '../../../../components/ButtonBox/ButtonBox';
import styles from './PurchaseForm.module.css';
import Product from '../../../../interfaces/Product';
import Movement from '../../../../interfaces/Movement';
import { types } from '../../../../types/types';
import { GetMovements } from '../../../../helpers/selectors/GetMovements';
import { updateProduct } from '../../../../redux/slices/productSlice';
import Button from '../../../../interfaces/Button';
import { GetProducts } from '../../../../helpers/selectors/GetProducts';



const PurchaseForm = () => {
  let products = GetProducts();
  const dispatch = useAppDispatch();
  let movements  = GetMovements();
  const [formValues, handleInputChange,handleSelectChange,reset] = useForm({ quantity: "",price:"",productSelect:0});
  const { quantity,price,productSelect } = formValues;

  const ItemsSelect = (products:any)=>{
    let itemsSelect: any[] =[]; 
    products.map(({id, name}:Product) => {  itemsSelect.push({id, name});  })
    
    return itemsSelect;
  }

  const handlePurchase = () => {
    if (productSelect != 0) {

      let product:Product =  products.filter(product => product.id == productSelect)[0] ;
      let totalPrice      = quantity * price; 
      let newQuantity     = CalculateBalanceUnitary(product.id , quantity)
      let balance         = CalculateBalancePrice(product.id , totalPrice)

      let movement:Movement = {
        id : movements.length,
        product:product,
        type: types.movementTypes["ENTRADA"],
        date: new Date(),
        quantity: quantity,
        priceUnitary:price,
        priceTotal: totalPrice,
        quantitySale: 0,
        priceUnitarySale:0,
        priceTotalSale: 0,
        balanceUnitary:newQuantity,
        balancePrice:balance
      }
      dispatch(updateProduct({...product,quantity:newQuantity,price:price} ))
      dispatch(addMovement(movement))
      reset();
      Swal.fire('Compra Exitosa', `Compra de producto ${product.name} Registrada con éxito`, 'success')
    }    
  }

  const CalculateBalanceUnitary = (productId:Number, quantityNow:any) => {
    let movement = movements.filter(movement => movement.product.id == productId).slice(-1)[0];
    return Number(movement.balanceUnitary ) + Number(quantityNow);
  }

  const CalculateBalancePrice = (productId:Number, priceNow:any) => {
    let movement =movements.filter(movement => movement.product.id == productId).slice(-1)[0];
    return   Number(movement.balancePrice) + Number(priceNow);
  }

  let buttons:Button[] = [
    {
      variant:"primary",
      text:"Registrar Comprar",
      icon:"",
      disabled:quantity && price && (productSelect != 0)?false:true,
      isLink: false,
      link:"",
      handelClick: handlePurchase
    }
  ] ;

  return(
    <>
    <div className={styles.PurchaseForm}>
        <form onSubmit={(handlePurchase)} >
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
            <Input 
              label={"Ingrese Precio de compra"} 
              name={"price"} 
              value={price} 
              disabled={false} 
              change={handleInputChange} 
            />
            <br/>
            <ButtonBox buttons={buttons}/>
           
        </form>
    </div>
    </>
   
  )
}

export default PurchaseForm;
