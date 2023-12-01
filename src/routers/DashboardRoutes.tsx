import {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import {useAppDispatch,useAppSelector } from '../hooks/useRedux'
import { setProducts } from '../redux/slices/productSlice';
import { setMovements } from '../redux/slices/movementSlice';
import Inventory from '../pages/Inventory/Inventory';
import InventoryMovement from '../pages/InventoryMovement/InventoryMovement';
import Product from '../pages/Product/Product';
import Purchase from '../pages/Purchase/Purchase';
import Sale from '../pages/Sale/Sale';
import DashBoard from '../components/DashBoard/DashBoard';
import { GetProducts } from '../helpers/selectors/GetProducts';
import { GetMovements } from '../helpers/selectors/GetMovements';

export const DashboardRoutes = () => {
    const dispatch = useAppDispatch();
    const productsState   = useAppSelector(state => state.product.products);
    const movementsState  = useAppSelector(state => state.movements.movements);
    const products        = GetProducts();
    const movements       = GetMovements();

    useEffect(() => {
        if (productsState.length <= 0) dispatch( setProducts(products) ); 
        if (movementsState.length <= 0) dispatch( setMovements(movements) ); 
    }, [dispatch]);

    return (
        <DashBoard>
            <Routes>                           
                <Route path="/" element={<Inventory/>}/>
                <Route path="/movement/:id" element={<InventoryMovement/>}/>
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="/purchase" element={<Purchase/>}/>
                <Route path="/sale" element={<Sale/>}/>
            </Routes>
        </DashBoard>   
    )
}
