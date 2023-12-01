import styles from './Sale.module.css';
import Panel from '../../components/Panel/Panel';
import SaleForm from './components/SaleForm/SaleForm';

interface SaleProps {}

const Sale = (props : SaleProps) => (
  <div className={styles.Sale}>
    <Panel header="Registrar Venta Producto" body={<SaleForm/> } />
  </div>
);

export default Sale;
