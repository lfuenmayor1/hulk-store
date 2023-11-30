import {useEffect} from 'react';
import {useAppDispatch , useAppSelector} from '../../hooks/useRedux'
import { setProducts,clearProductActive } from '../../redux/slices/productSlice';
import { setMovements } from '../../redux/slices/movementSlice';
import Panel from '../../components/Panel/Panel';
import CustomTable from '../../components/CustomTable/CustomTable';
import ProducItem from '../Product/components/ProducItem/ProducItem';
import styles from './Inventory.module.css';
import Product from '../../interfaces/Product';
import { theadProduct } from '../../helpers/products';
import { movements } from '../../helpers/movements';
import { GetProducts } from '../../helpers/selectors/GetProducts';
import { GetMovements } from '../../helpers/selectors/GetMovements';

const Inventory = () => { 

  const dispatch        = useAppDispatch();
  const products        = GetProducts();
  const movements       = GetMovements();

  useEffect(() => {
    dispatch( clearProductActive() ); 
  }, [dispatch]);

  return (
    <Panel header="Inventario de productos" body={
      <div className={styles.Inventory}>
        <CustomTable thead= {theadProduct} >
          { products.map((product:Product, index) => {
            return (
              <tr key={index}>
              <ProducItem key={index} producto = {product}></ProducItem>
              </tr>
            );})
          }
        </CustomTable>   
        <br/>
      </div>
    }/>
  )
};

export default Inventory;
