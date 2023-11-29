import React, { FC } from 'react';
import styles from './ProductModal.module.css';

interface ProductModalProps {}

const ProductModal: FC<ProductModalProps> = () => (
  <div className={styles.ProductModal}>
    ProductModal Component
  </div>
);

export default ProductModal;
