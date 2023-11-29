import styles from './ProducItem.module.css';
import {Link} from 'react-router-dom';

import CustomButton from '../../../../components/ButtonCustom/CustomButton';
import Product from '../../../../interfaces/Product';

interface ProductItemProps {
  producto: Product,
}
const handelClick =()=>{
  alert("VER MOVIMIENTOS DE INVENTARIO")
}


const ProducItem = (props: ProductItemProps) => (
  <>
      <td>{props.producto.id.toString()}</td>
      <td>{props.producto.name }</td>
      <td>{props.producto.quantity.toString()}</td>
      <td>{props.producto.price.toString()}</td>
      <td>
        <Link to={`/dashboard/product/${props.producto.id}`}>
          <CustomButton
            variant={"primary"}
            text={"Ver Producto"}
            icon={""}
            handelClick={handelClick}
          />
        </Link>
        <Link to={`/dashboard/movement`}>
          <CustomButton
            variant={"primary"}
            text={"Ver Movimientos"}
            icon={""}
            handelClick={handelClick}
          />
        </Link>
      </td>
   
      
  </>
);

export default ProducItem;
