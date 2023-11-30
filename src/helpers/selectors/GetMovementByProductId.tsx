import { useAppSelector } from '../../hooks/useRedux';
import { movements } from '../movements';

export const GetMovementByProductId =  (id:number = 0) => {
    const movementsState  = useAppSelector(state => state.movements.movements);

    if (movementsState.length <= 0) {
        return movements.filter(movement => movement.product.id == id);
    }

    return movementsState.filter(movement => movement.product.id == id);
}