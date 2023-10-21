import { actionTypes } from "../constants/actionType";
import { CartActions,CartState } from "../constants/cartTypes";

const initialState : CartState = {
    isLoading: false,
    cartItems: [],
    error: null,
}

const cartReducer = (state = initialState,action: CartActions) => {
    switch (action.type){
        case actionTypes.ADD_TO_CART_START:
            return{
                ...state,
                isLoading: true,
            };
        case actionTypes.ADD_TO_CART_SUCCESS:
            return{
                ...state,
                isLoading:false,
                cartItems : [...state.cartItems,action.payload]
            };
        case actionTypes.ADD_TO_CART_ERROR:
            return{
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        case actionTypes.REMOVE_FROM_CART_START:
            return{
                ...state,
                isLoading: true,
            };
        case actionTypes.REMOVE_FROM_CART_SUCCESS:
            return{
                ...state,
                isLoading: false,
                cartItems : state.cartItems.filter(product => product.id !== action.payload)
            };
        default:
            return{
                ...state,
            };
    }
}

export default cartReducer