import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { products } from '../../helpers/products';

export const InventoryScreen = () => {

    return (
      <>
        <Button variant="primary">Primary</Button>{' '}
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>nombre</th>
            <th>activo</th>
          </tr>
        </thead>
        <tbody>

        {products.map((product, index) => {
        return (
          <tr key={index}>
            <td>{product.id}</td>
            <td>{product.nombre}</td>
            <td>{product.activo}</td>
          </tr>
        );
      })}
          
       
        </tbody>
      </Table>
      </>
      
    )
}