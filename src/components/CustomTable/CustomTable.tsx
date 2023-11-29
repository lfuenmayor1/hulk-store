import styles from './CustomTable.module.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Product from '../../interfaces/Product';
import Thead from '../../interfaces/Thead';
import { Children } from 'react';

interface CustomTableProps {
  thead: Thead[],
  children: any
}


const CustomTable = ( props: CustomTableProps ) => (
  <div className={styles.CustomTable}>
     <Table striped bordered hover size="sm">
        <thead>
          <tr>
            { props.thead.map((head, index) => {
              return (
                <th key={index}>{head.title}</th>
              );})
            }
          </tr>
        </thead>
        <tbody>
            {props.children}
        </tbody>
      </Table>
  </div>
);

export default CustomTable;
