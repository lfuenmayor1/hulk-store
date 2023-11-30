import { useAppSelector } from '../../hooks/useRedux';
import { products } from '../products';

export const GetProductByid =  (id:number = 0) => {
    const productsState  = useAppSelector(state => state.product.products);

    if (productsState.length <= 0) {
        return products.filter(product => product.id == id)[0] ;
    }

    return productsState.filter(product => product.id == id)[0] ;
}