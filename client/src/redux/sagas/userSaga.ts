import { actionTypes } from '../constants/actionType';
import {
    call,
    put,
    // takeEvery,
    fork,
    // takeLatest,
    takeEvery, 
} from 'redux-saga/effects';

import { userSignupError,userSignupSuccess} from '../actions/userAction';
import { userLoginError,userLoginSuccess} from '../actions/userAction';

import { authenticateSignup,authenticateLogin } from '../../api/api';

function* UserSignupSaga(data:any):Generator{
    try{
        const res:any = yield call(authenticateSignup,data.payload)
        if(res.status===200){ 
            yield put(userSignupSuccess());
        }
    }catch(error:any){
        yield  put(userSignupError({error:error}))
    }
}

function* UserLoginSaga(data:any):Generator{
    try{
        const res:any = yield call(authenticateLogin,data.payload) 
        if(res.status===200){ 
            yield put(userLoginSuccess(data.payload.username));
        }
    }catch(error:any){
        yield put(userLoginError({error:error.response.data}));
    }
}

function* onUserSignUp() {
    yield takeEvery(actionTypes.USER_SIGNUP_START,UserSignupSaga)
}

function* onUserLogin(){
    yield takeEvery(actionTypes.USER_LOGIN_START,UserLoginSaga)
}

export const userSaga = [fork(onUserSignUp),fork(onUserLogin)];

