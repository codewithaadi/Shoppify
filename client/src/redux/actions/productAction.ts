import { iProduct } from "../../models/models";
import { actionTypes } from "../constants/actionType";

import {LoadProductsStart,LoadProductsSuccess,LoadProductsError,ErrorPayload,LoadProductsPayload} from '../constants/productTypes';
import {LoadProductDetailStart,LoadProductDetailSuccess,LoadProductDetailsError} from '../constants/productTypes';

export const loadProductsStart = ():LoadProductsStart =>({
    type: actionTypes.LOAD_PRODUCTS_START
})

export const loadProductsSuccess = (payload:LoadProductsPayload) : LoadProductsSuccess => ({
    type: actionTypes.LOAD_PRODUCTS_SUCCESS,
    payload
})

export const loadProductsError = (payload:ErrorPayload) : LoadProductsError=>({
    type: actionTypes.LOAD_PRODUCTS_ERROR,
    payload
})

export const loadProductDetailStart = (payload:string) : LoadProductDetailStart =>({
    type: actionTypes.LOAD_PRODUCT_DETAIL_START,
    payload
})

export const loadProductDetailSuccess = (payload:iProduct) : LoadProductDetailSuccess =>({
    type: actionTypes.LOAD_PRODUCT_DETAIL_SUCCESS,
    payload
}) 

export const loadProductDetailsError = (payload:ErrorPayload) : LoadProductDetailsError =>({
    type: actionTypes.LOAD_PRODUCT_DETAIL_ERROR,
    payload
})