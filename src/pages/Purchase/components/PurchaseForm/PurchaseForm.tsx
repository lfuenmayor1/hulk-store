import styles from './PurchaseForm.module.css';
import Input from '../../../../components/Input/Input';
import InputSelect from '../../../../components/InputSelect/InputSelect';
import { products } from '../../../../helpers/products';
import Product from '../../../../interfaces/Product';
import { useForm } from '../../../../hooks/useForm';
import CustomButton from '../../../../components/ButtonCustom/CustomButton';

interface Item {
  id:string,
  name:string
}

interface PurchaseFormProps {}

const handleSubmit = () => {


}

const handelClick =()=>{
  alert("VER MOVIMIENTOS DE INVENTARIO")
}

const ItemsSelect = (products:any)=>{
  let itemsSelect: any[] =[]; 
  products.map(({id, name}:Product) => {
    itemsSelect.push({id, name});
  })
  return itemsSelect;
}

const PurchaseForm = () => {

  const [formValues, handleInputChange] = useForm({
    quantity: "",
  });
  
  const { quantity } = formValues;

  return(
    <div className={styles.PurchaseForm}>
        <form onSubmit={handleSubmit} >
          <br />
            <InputSelect
              id={"productos"}
              label={"Seleccione Producto"}
              name="productos"
              items={ItemsSelect(products)}
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
            <CustomButton
              variant={"primary"}
              text={"Comprar producto"}
              icon={""}
              handelClick={handelClick}
            />

        </form>
    </div>
  )

}

export default PurchaseForm;
