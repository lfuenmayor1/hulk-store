import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit'
import  productReducer  from '../slices/productSlice';
import movementReducer from '../slices/movementSlice';


export const store = configureStore({
  reducer: {
    product: productReducer,
    movements: movementReducer
    
  },
  middleware: getDefaultMiddleware({
    serializableCheck:false,
  }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch




