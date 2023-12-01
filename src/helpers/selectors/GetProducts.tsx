import { useAppSelector } from '../../hooks/useRedux';
import { products } from '../products';

export const GetProducts =  () => {
    const productsState  = useAppSelector(state => state.product.products);

    if (productsState.length <= 0) {
        return products ;
    }

    return productsState;
}