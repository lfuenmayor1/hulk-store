import Input from '../../../../components/Input/Input';
import InputSelect from '../../../../components/InputSelect/InputSelect';
import CustomButton from '../../../../components/ButtonCustom/CustomButton';
import styles from './SaleForm.module.css';
import Product from '../../../../interfaces/Product';
import { products } from '../../../../helpers/products';
import { useForm } from '../../../../hooks/useForm';


interface SaleFormProps {}

const handleSubmit = () => {


}
const ItemsSelect = (products:any)=>{
  let itemsSelect: any[] =[]; 
  products.map(({id, name}:Product) => {
    itemsSelect.push({id, name});
  })
  return itemsSelect;
}

const SaleForm = () => {

  const [formValues, handleInputChange] = useForm({
    quantity: "",
  });
  
  const { quantity } = formValues;

  return(
    <div className={styles.SaleForm}>
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
              text={"Registrar Venta producto"}
              icon={""}
              handelClick={()=>{}}
              disabled ={false}
            />

        </form>
    </div>
  )

}

export default SaleForm;
