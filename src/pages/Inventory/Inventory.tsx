import Panel from '../../components/Panel/Panel';
import CustomTable from '../../components/CustomTable/CustomTable';
import ProducItem from '../Product/components/ProducItem/ProducItem';
import styles from './Inventory.module.css';
import Product from '../../interfaces/Product';
import { products,theadProduct } from '../../helpers/products';

const Inventory = () => (
<Panel header="Inventario de productos" body={
  <div className={styles.Inventory}>
    <CustomTable thead= {theadProduct} >
      { products.map((product:Product, index) => {
        return (
          <tr>
          <ProducItem key={index} producto = {product}></ProducItem>
          </tr>
        );})
      }
    </CustomTable>   
    <br/>
  </div>
}/>
);
export default Inventory;
