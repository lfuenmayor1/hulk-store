import React, { FC } from 'react';
import styles from './Purchase.module.css';
import Panel from '../../components/Panel/Panel';
import PurchaseForm from './components/PurchaseForm/PurchaseForm';

interface PurchaseProps {}

const Purchase: FC<PurchaseProps> = () => (
  <div className={styles.Purchase}>
    <Panel header="Comprar Productos" body={<PurchaseForm/> } />
  </div>
);

export default Purchase;
