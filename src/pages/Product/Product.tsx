import styles from './Product.module.css';
import Panel from '../../components/Panel/Panel';
import ProductForm from './components/ProductForm/ProductForm';
interface ProductProps {}

const Product = () => (
  <div className={styles.Product}>
      <Panel header="Producto" body={<ProductForm key= {1} product= {{
        id: 1,
        name: 'Vaso Hulk',
        quantity: 5,
        price: 5200
    }}
    />} />

  </div>
);

export default Product;
