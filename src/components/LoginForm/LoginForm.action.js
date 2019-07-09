import * as firebase from 'firebase';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//Action creator
export function getLoginRequest() {
    return {
        type: LOGIN_REQUEST,
        //payload
    }
}

export function getLoginSuccess(result) {
    return {
        type: LOGIN_SUCCESS,
        payload: result
    }
}

export function getLoginFailure(error) {
    return {
        type: LOGIN_FAILURE,
        error
    }
}
export function login(email, password) {
    return async(dispatch) => {
        dispatch(getLoginRequest())
        try {
            const result = await firebase.auth().signInWithEmailAndPassword(email, password)
            dispatch(getLoginSuccess(result))

        } catch (error) {
            dispatch(getLoginFailure(error.message))
        }

    }
}
// store.dispath(getLoginSuccess)