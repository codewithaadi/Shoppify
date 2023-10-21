import { actionTypes } from "./actionType";
import { iProduct } from "../../models/models";

export interface CartState{
    isLoading: boolean;
    cartItems: iProduct[];
    error: string|null;
}

export interface AddToCartStartPayload{
    id : string,
    quantity: number,
}

export interface AddToCartSuccessPayload{
    item : iProduct;
}

export interface ErrorPayload{
    error: string,
}

export type AddToCartStart = {
    type : typeof actionTypes.ADD_TO_CART_START,
    payload : AddToCartStartPayload
}

export type AddToCartSuccess = {
    type: typeof actionTypes.ADD_TO_CART_SUCCESS,
    payload : AddToCartSuccessPayload
}

export type AddToCartError = {
    type: typeof actionTypes.ADD_TO_CART_ERROR,
    payload: ErrorPayload
}

export type RemoveFromCartStart = {
    type: typeof actionTypes.REMOVE_FROM_CART_START,
    payload: string
}

export type RemoveFromCartSuccess = {
    type: typeof actionTypes.REMOVE_FROM_CART_SUCCESS,
    payload: string
}

export type CartActions = AddToCartStart | AddToCartSuccess | AddToCartError | RemoveFromCartStart | RemoveFromCartSuccess ;