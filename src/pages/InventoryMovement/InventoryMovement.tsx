import {useParams} from 'react-router-dom';
import {ErrorMsg} from '../../components/ErrorMsg/ErrorMsg';
import Panel from '../../components/Panel/Panel';
import CustomTable from '../../components/CustomTable/CustomTable';
import MovementItem from './components/Movementtem/MovementItem';
import styles from './InventoryMovement.module.css';
import Movement from '../../interfaces/Movement';
import { theadMovement } from '../../helpers/movements';
import { GetMovementByProductId } from '../../helpers/selectors/GetMovementByProductId';

const InventoryMovement = () => {
  const {id}:any = useParams();
  let movements:Movement[] = GetMovementByProductId(id);
 
  return(
    <div className={styles.Inventory}>
      {movements.length > 0 
        ? <Panel header="Listado de movimientos de inventario" body={
            <CustomTable thead= {theadMovement} >
              { movements.map((movement:Movement, index) => {
                return (
                  <tr key={index}>
                  <MovementItem key={index} movement = {movement}/>
                  </tr>
                );})
              }
            </CustomTable>   
          }/>
        : <ErrorMsg message={"No existen movimientos para este producto"}/>
      }
   </div>
  
  );
}
export default InventoryMovement;
