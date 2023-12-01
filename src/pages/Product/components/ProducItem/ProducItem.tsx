import ButtonBox from '../../../../components/ButtonBox/ButtonBox';
import Product from '../../../../interfaces/Product';
import Button from '../../../../interfaces/Button';
import styles from './ProducItem.module.css';

interface ProductItemProps {
  product: Product,
}

const ProducItem = (props: ProductItemProps) => { 

  let buttons:Button[] = [
    {
      variant:"primary",
      text:"Ver Producto",
      icon:"",
      disabled:false,
      isLink: true,
      link:`/dashboard/product/${props.product.id}`,
      handelClick:()=>{}
    }
  ] ;
  return (
    <>
        <td>{props.product.id.toString()}</td>
        <td>{props.product.name }</td>
        <td>{props.product.quantity.toString()}</td>
        <td>{props.product.price.toString()}</td>
        <td>
          <ButtonBox buttons={buttons}/>
        </td>
    </>
  );
}

export default ProducItem;
