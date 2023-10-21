import { actionTypes } from "../constants/actionType";

import {AddToCartSuccessPayload,AddToCartStartPayload,AddToCartError,ErrorPayload,AddToCartStart,AddToCartSuccess,RemoveFromCartStart, RemoveFromCartSuccess} from '../constants/cartTypes';

export const addToCartStart = (payload:AddToCartStartPayload):AddToCartStart =>({
    type: actionTypes.ADD_TO_CART_START,
    payload
})

export const addToCartSuccess = (payload:AddToCartSuccessPayload):AddToCartSuccess=>({
    type: actionTypes.ADD_TO_CART_SUCCESS,
    payload
})

export const addToCartError = (payload:ErrorPayload):AddToCartError=>({
    type: actionTypes.ADD_TO_CART_ERROR,
    payload
})

export const removeFromCartStart = (payload:string): RemoveFromCartStart=>({
    type: actionTypes.REMOVE_FROM_CART_START,
    payload
})

export const removeFromCartSuccess = (payload:string): RemoveFromCartSuccess=>({
    type: actionTypes.REMOVE_FROM_CART_SUCCESS,
    payload
})
