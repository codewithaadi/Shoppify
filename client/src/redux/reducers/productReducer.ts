import { actionTypes } from "../constants/actionType"
import { ProductActions,ProductState } from "../constants/productTypes";

const initialState : ProductState = {
    isLoading:false,
    products: [],
    productDetails: null,
    error: null,
}

const productReducer = (state = initialState,action: ProductActions) => {
    switch (action.type){
        case actionTypes.LOAD_PRODUCTS_START:
        case actionTypes.LOAD_PRODUCT_DETAIL_START:
            return{
                ...state,
                isLoading: true,
            }
        case actionTypes.LOAD_PRODUCTS_SUCCESS:
            return{
                ...state,
                isLoading:false,
                products:action.payload.products
            };
        case actionTypes.LOAD_PRODUCT_DETAIL_SUCCESS:
            return{
                ...state,
                isLoading:false,
                productDetails:action.payload
            };
        case actionTypes.LOAD_PRODUCTS_ERROR:
        case actionTypes.LOAD_PRODUCT_DETAIL_ERROR: 
            return{
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        default:
            return{
                ...state,
            };
    }
}

export default productReducer;