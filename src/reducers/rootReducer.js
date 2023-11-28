import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { types } from '../types/types';

const allReducers = combineReducers({
    auth: authReducer,
});



export const rootReducer  = (state, action) => {

    if (action.type === types.uiResetApp) {
        state = undefined;
    }

    return allReducers(state, action);
}

