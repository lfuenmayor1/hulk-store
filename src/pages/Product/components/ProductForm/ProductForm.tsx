import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../../../hooks/useForm';
import styles from './ProductForm.module.css';
import Product from '../../../../interfaces/Product';
import Input from '../../../../components/Input/Input';

interface ProductFormProps {
  product:Product
}

export const ProductForm = ({product,...props} : ProductFormProps) => {

  const handleSubmit = () => {
  }

  const [formValues, handleInputChange] = useForm({
    name: product.name,
    price: product.price,
    quantity: product.quantity,
  });
  
  const { name, price, quantity } = formValues;

  return(
    <form onSubmit={handleSubmit}>
      <br />
      <Input 
        label={"Nombre"} 
        name={"name"} 
        value={name} 
        disabled={true} 
        change={()=>{}} 
      />
      <Input 
        label={"Precio"} 
        name={"price"} 
        value={price} 
        disabled={true} 
        change={()=>{}} 
      />
      <Input 
        label={"Cantidad"} 
        name={"quantity"} 
        value={quantity} 
        disabled={false} 
        change={handleInputChange} 
      />
      <br />
      <button type="submit" className="btn btn-primary">Actualizar</button>
    </form>
  )
};

export default ProductForm; 

