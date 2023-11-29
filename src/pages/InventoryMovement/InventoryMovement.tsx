import Panel from '../../components/Panel/Panel';
import CustomTable from '../../components/CustomTable/CustomTable';
import MovementItem from './components/Movementtem/MovementItem';
import styles from './InventoryMovement.module.css';
import Movement from '../../interfaces/Movement';
import { movements,theadMovement } from '../../helpers/movements';

const handelClick =()=>{
  alert("VER MOVIMIENTOS DE INVENTARIO")
}

interface InventoryMovementProps {}

const InventoryMovement = () => (
  <Panel header="Listado de movimientos de inventario" body={
    <div className={styles.Inventory}>
      <CustomTable thead= {theadMovement} >
        { movements.map((movement:Movement, index) => {
          return (
            <tr>
            <MovementItem key={index} movement = {movement}/>
            </tr>
          );})
        }
      </CustomTable>   
    </div>
  }/>
);

export default InventoryMovement;
