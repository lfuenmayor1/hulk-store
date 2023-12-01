import styles from './Purchase.module.css';
import Panel from '../../components/Panel/Panel';
import PurchaseForm from './components/PurchaseForm/PurchaseForm';

interface PurchaseProps {}

const Purchase = () => (
  <div className={styles.Purchase}>
    <Panel header="Registrar Comprar Producto" body={<PurchaseForm/> } />
  </div>
);

export default Purchase;
