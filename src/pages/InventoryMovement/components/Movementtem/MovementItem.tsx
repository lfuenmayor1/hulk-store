import styles from './MovementItem.module.css';
import {Link} from 'react-router-dom';
import Movement from '../../../../interfaces/Movement';


interface MovementItemProps {
  movement: Movement,
}

const MovementItem = ({movement,...props}: MovementItemProps) => (
  <>
      <td>{movement.id.toString()}</td>
      <td>{movement.productId.toString() }</td>
      <td>{movement.type}</td>
      <td>{movement.date}</td>
      <td>{movement.quantity.toString()}</td>
      <td>{movement.priceUnitary.toString()}</td>
      <td>{movement.balanceUnitary.toString()}</td>
      <td>{movement.balancePrice.toString()}</td>
     
  </>
);

export default MovementItem;
