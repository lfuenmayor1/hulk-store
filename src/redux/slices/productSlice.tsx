import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Product from "../../interfaces/Product";

interface ProductState {
    products:Product[],
    active:Product
}
const initialState: ProductState = {
    products:[],
    active:{
      id:0,
      name:"",
      quantity:0,
      price:0
    } 
};



export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
      setProducts:(state, action) =>{
        state.products = action.payload;
      },
      setProductActive: (state , action) =>{
        state.active = action.payload;  
      },
      clearProductActive: (state) =>{
        state.active = initialState.active;
      }
    }
})

export const {setProductActive, clearProductActive, setProducts} = productSlice.actions;
export default productSlice.reducer;