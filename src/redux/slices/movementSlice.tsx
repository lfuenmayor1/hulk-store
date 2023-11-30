import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Movement from "../../interfaces/Movement";

interface MovementState {
    movements:Movement[]
}
const initialState: MovementState = {
    movements:[],
};

export const movementsSlice = createSlice({
    name: 'movement',
    initialState,
    reducers: {
      setMovements:(state, action) =>{
        state.movements = action.payload;
      },
      addMovement:(state, action) =>{
        state.movements  = [...state.movements, action.payload];
      },
    }
})

export const {setMovements , addMovement} = movementsSlice.actions;
export default movementsSlice.reducer;