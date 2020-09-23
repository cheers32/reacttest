import {SIGN_IN, SIGN_OUT} from "./actionTypes";

export const signIn = (userId) => {  // this is to define actionCreators that returns an action
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}