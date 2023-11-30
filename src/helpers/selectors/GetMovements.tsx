import { useAppSelector } from '../../hooks/useRedux';
import { movements } from '../movements';

export const GetMovements =  (id:number = 0) => {
    const movementsState  = useAppSelector(state => state.movements.movements);

    if (movementsState.length <= 0) {
        return movements;
    }

    return movementsState;
}