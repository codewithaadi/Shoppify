import { actionTypes } from "./actionType";
import { iUser } from "../../models/user";

export interface UserState{
    isLoading: boolean;
    isUserLogged : boolean;
    userName: string;
    error : string | null;
}

export interface ErrorPayload{
    error: string;
}

export type UserSignupStart = {
    type: typeof actionTypes.USER_SIGNUP_START;
    payload : iUser;
}

export type UserSignupSuccess = {
    type: typeof actionTypes.USER_SIGNUP_SUCCESS;
}

export type UserSignupError = {
    type: typeof actionTypes.USER_SIGNUP_ERROR;
    payload: ErrorPayload;
}

export type UserLoginStart = {
    type: typeof actionTypes.USER_LOGIN_START;
    payload: iUser;
}

export type UserLoginSuccess = {
    type: typeof actionTypes.USER_LOGIN_SUCCESS;
    payload: string;
}

export type UserLoginError = {
    type: typeof actionTypes.USER_LOGIN_ERROR;
    payload: ErrorPayload;
}

export type UserActions = UserSignupStart | UserSignupError | UserSignupSuccess | UserLoginSuccess | UserLoginStart | UserLoginError; 