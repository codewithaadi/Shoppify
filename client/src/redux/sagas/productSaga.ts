import { actionTypes } from '../constants/actionType';
import {
    call,
    put,
    // takeEvery,
    fork,
    // takeLatest,
    takeEvery, 
} from 'redux-saga/effects';

import { loadProductsSuccess,loadProductsError } from '../actions/productAction';
import { loadProductDetailSuccess,loadProductDetailsError } from '../actions/productAction';

import { fetchProducts,fetchProductDetails } from '../../api/api';

function* ProductsFetchSaga():Generator{
    try{
        const res:any = yield call(fetchProducts)
        if(res.status===200){ 
            yield put(loadProductsSuccess({products: res.data}));
        }
    }catch(error:any){
        yield  put(loadProductsError({error:error}))
    }
}

function* ProductDetailFetchSaga(data:any):Generator{
    try{
        const res:any = yield call(fetchProductDetails,data.payload) 
        if(res.status===200){ 
            yield put(loadProductDetailSuccess(data.payload));
        }
    }catch(error:any){
        yield put(loadProductDetailsError({error:error.response.data}));
    }
}

function* onProductsFetch() {
    yield takeEvery(actionTypes.LOAD_PRODUCTS_START,ProductsFetchSaga)
}

function* onProductDetailFetch(){
    yield takeEvery(actionTypes.LOAD_PRODUCT_DETAIL_START,ProductDetailFetchSaga)
}

export const productSaga = [fork(onProductsFetch),fork(onProductDetailFetch)];

