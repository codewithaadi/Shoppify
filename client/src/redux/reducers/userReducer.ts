import { actionTypes } from "../constants/actionType";
import { UserActions,UserState } from "../constants/userTypes";

const initialState : UserState = {
    isLoading: false,
    isUserLogged: false,
    userName: "",
    error: null,
}

const userReducer = (state = initialState, action: UserActions) => {
    switch(action.type){
        case actionTypes.USER_LOGIN_START:
        case actionTypes.USER_SIGNUP_START:
            return{
                ...state,
                error:null,
                isLoading: true,
                isUserLogged: false,
                userName:"",
            };
        case actionTypes.USER_LOGIN_SUCCESS:
            return{
                ...state,
                isLoading: false,
                isUserLogged: true,
                userName: action.payload
            }
        case actionTypes.USER_SIGNUP_SUCCESS:{
            return{
                ...state,
                isLoading: false,
            }
        }
        case actionTypes.USER_LOGIN_ERROR:
        case actionTypes.USER_SIGNUP_ERROR:
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

export default userReducer;