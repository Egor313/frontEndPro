import { combineReducers } from 'redux';
import { reducer as waiterReducer } from '../features/waiters/store/reducer';


export const rootReducer = combineReducers({
    waiter: waiterReducer,
})