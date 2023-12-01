import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch } from '../../hooks/useRedux'
import { setProductActive } from '../../redux/slices/productSlice';
import {ErrorMsg} from '../../components/ErrorMsg/ErrorMsg';
import {Loading} from '../../components/loading/Loading';
import Panel from '../../components/Panel/Panel';
import ProductForm from './components/ProductForm/ProductForm';
import styles from './Product.module.css';
import ProductInterface from '../../interfaces/Product';
import { GetProductByid } from '../../helpers/selectors/GetProductByid'


const Product = () => {

  const {id}:any = useParams();
  const dispatch = useAppDispatch();
  let  product:ProductInterface = GetProductByid(id); 

  useEffect(() => {
    dispatch( setProductActive(product) ); 
  }, [id,dispatch]);

  return(
    
    <div className={styles.Product}>
      {product 
          ? <Panel header="Producto" body={<ProductForm key= {1} product= {product}/>} />
          : <ErrorMsg message={"No existe el producto"}/>
      }
    </div>
  );
  
}
export default Product;
