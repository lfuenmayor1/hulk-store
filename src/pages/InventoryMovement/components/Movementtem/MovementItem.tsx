import styles from './MovementItem.module.css';
import {Link} from 'react-router-dom';
import Movement from '../../../../interfaces/Movement';


interface MovementItemProps {
  movement: Movement,
}

const MovementItem = ({movement,...props}: MovementItemProps) => (
  <>
      <td>{movement.product.name }</td>
      <td>{movement.type}</td>
      <td>{movement.date.toString()}</td>
      <td>{movement.quantity.toString()}</td>
      <td>{movement.priceUnitary.toString()}</td>
      <td>{movement.priceTotal.toString()}</td>
      <td>{movement.quantitySale.toString()}</td>
      <td>{movement.priceUnitarySale.toString()}</td>
      <td>{movement.priceTotalSale.toString()}</td>
      <td>{movement.balanceUnitary.toString()}</td>
      <td>{movement.balancePrice.toString()}</td>
     
  </>
);

export default MovementItem;
