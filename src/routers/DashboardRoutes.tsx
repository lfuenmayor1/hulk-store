import {Routes, Route} from 'react-router-dom';
import Header from '../components/Header/Header';
import Inventory from '../pages/Inventory/Inventory';
import InventoryMovement from '../pages/InventoryMovement/InventoryMovement';
import Product from '../pages/Product/Product';
import Purchase from '../pages/Purchase/Purchase';
import { MenuOptions } from '../helpers/menuOptions';

export const DashboardRoutes = () => {
    return (
        <>
            <Header MenuOptions = {MenuOptions} ></Header>
            <br/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-9 col-lg-10 main">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <ol className="breadcrumb">
                                    </ol>
                                </div>
                            </div>
                            <div className="row">
                                <Routes>                           
                                    <Route path="/" element={<Inventory/>}/>
                                    <Route path="/movement" element={<InventoryMovement/>}/>
                                    <Route path="/product/:id" element={<Product/>}/>
                                    <Route path="/purchase" element={<Purchase/>}/>
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
