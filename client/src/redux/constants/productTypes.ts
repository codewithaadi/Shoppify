import { actionTypes } from "./actionType";
import { iProduct } from "../../models/models";

export interface ProductState{
    isLoading: boolean;
    products : iProduct[];
    productDetails : iProduct | null;
    error: string | null;
}

export interface LoadProductsPayload{
    products : iProduct[];
}

export interface ErrorPayload{
    error: string
}

export type LoadProductsStart = {
    type: typeof actionTypes.LOAD_PRODUCTS_START;
}

export type LoadProductsSuccess = {
    type: typeof actionTypes.LOAD_PRODUCTS_SUCCESS;
    payload: LoadProductsPayload;
}

export type LoadProductsError = {
    type: typeof actionTypes.LOAD_PRODUCTS_ERROR;
    payload: ErrorPayload;
}

export type LoadProductDetailStart = {
    type: typeof actionTypes.LOAD_PRODUCT_DETAIL_START;
    payload: string;
}

export type LoadProductDetailSuccess = {
    type: typeof actionTypes.LOAD_PRODUCT_DETAIL_SUCCESS;
    payload: iProduct;
}

export type LoadProductDetailsError = {
    type: typeof actionTypes.LOAD_PRODUCT_DETAIL_ERROR;
    payload: ErrorPayload;
}

export type ProductActions = LoadProductsStart | LoadProductsSuccess | LoadProductsError | LoadProductDetailStart | LoadProductDetailSuccess | LoadProductDetailsError;