import Swal from 'sweetalert2'
import {useAppDispatch,useAppSelector } from '../../../../hooks/useRedux'
import { useForm } from '../../../../hooks/useForm';
import { addMovement } from '../../../../redux/slices/movementSlice';
import Input from '../../../../components/Input/Input';
import InputSelect from '../../../../components/InputSelect/InputSelect';
import CustomButton from '../../../../components/ButtonCustom/CustomButton';
import styles from './PurchaseForm.module.css';
import Product from '../../../../interfaces/Product';
import Movement from '../../../../interfaces/Movement';
import { products } from '../../../../helpers/products';
import { types } from '../../../../types/types';
import { GetMovements } from '../../../../helpers/selectors/GetMovements';

const ItemsSelect = (products:any)=>{
  let itemsSelect: any[] =[]; 
  products.map(({id, name}:Product) => {
    itemsSelect.push({id, name});
  })
  return itemsSelect;
}

const PurchaseForm = () => {
  const dispatch = useAppDispatch();
  let movements  = GetMovements();
  let product:Product;


  const [formValues, handleInputChange,handleSelectChange] = useForm({ quantity: "",price:"",productSelet:0});
  const { quantity,price,productSelet } = formValues;

  const handlePurchase = () => {
    if (productSelet != 0) {
      product =  products.filter(product => product.id == productSelet)[0] ;
      let totalPrice = quantity * price; 
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
        balanceUnitary:CalculateBalanceUnitary(productSelet , quantity),
        balancePrice:CalculateBalancePrice(productSelet , totalPrice)
      }
      dispatch(addMovement(movement))
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

  
  return(
    <>
    <div className={styles.PurchaseForm}>
        <form onSubmit={(handlePurchase)} >
          <br />
            <InputSelect
              id={"productSelet"}
              label={"Seleccione Producto"}
              name="productSelet"
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
            <CustomButton
              variant={"primary"}
              text={"Registrar Comprar"}
              icon={""}
              handelClick={handlePurchase}
              disabled = {quantity && price && (productSelet != 0)?false:true}
            />
        </form>
    </div>
    </>
   
  )
}

export default PurchaseForm;
