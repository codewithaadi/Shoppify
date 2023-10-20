import { iUser } from "../../models/user";
import { actionTypes } from "../constants/actionType";

import { UserSignupStart,UserSignupSuccess,UserSignupError,ErrorPayload} from "../constants/userTypes";
import { UserLoginStart,UserLoginError,UserLoginSuccess } from "../constants/userTypes";

export const userSignupStart = (payload:iUser):UserSignupStart =>({
    type: actionTypes.USER_SIGNUP_START,
    payload
});

export const userSignupSuccess = ():UserSignupSuccess =>({
    type: actionTypes.USER_SIGNUP_SUCCESS
})

export const userSignupError = (payload:ErrorPayload):UserSignupError=>({
    type: actionTypes.USER_SIGNUP_ERROR,
    payload
})

export const userLoginStart = (payload:iUser):UserLoginStart =>({
    type: actionTypes.USER_LOGIN_START,
    payload
})

export const userLoginSuccess = (payload:string):UserLoginSuccess=>({
    type: actionTypes.USER_LOGIN_SUCCESS,
    payload
})

export const userLoginError = (payload:ErrorPayload):UserLoginError=>({
    type: actionTypes.USER_LOGIN_ERROR,
    payload
})
