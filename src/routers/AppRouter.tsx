import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import {InventoryScreen} from '../components/inventory/InventoryScreen';
import {useEffect} from 'react';

export const AppRouter = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<InventoryScreen/>}/>
      </Routes>
    </BrowserRouter>
  )
}

  