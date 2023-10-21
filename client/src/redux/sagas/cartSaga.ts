import { actionTypes } from '../constants/actionType';
import {
    call,
    put,
    fork,
    takeEvery, 
} from 'redux-saga/effects';

import { addToCartSuccess,addToCartError } from '../actions/cartAction';
import { removeFromCartSuccess} from '../actions/cartAction';

import {fetchProductDetails } from '../../api/api';



function* onAddToCartSaga(data:any):Generator{
    // console.log(data);
    try{
        const res:any = yield call(fetchProductDetails,data.payload.id) 
        if(res.status===200){ 
            console.log(res);
            yield put(addToCartSuccess(res.data));
        }
    }catch(error:any){
        yield put(addToCartError({error:error.response.data}));
    }
}

function* onRemoveToCartSaga(data:any):Generator{
    yield put(removeFromCartSuccess(data.payload));
}

function* onAddToCart() {
    yield takeEvery(actionTypes.ADD_TO_CART_START,onAddToCartSaga)
}

function* onRemoveToCart(){
    yield takeEvery(actionTypes.REMOVE_FROM_CART_START,onRemoveToCartSaga)
}

export const cartSaga = [fork(onAddToCart),fork(onRemoveToCart)];

