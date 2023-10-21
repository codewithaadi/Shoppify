import {combineReducers} from 'redux';
import userReducer from './userReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    user : userReducer,
    product: productReducer,
    cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;