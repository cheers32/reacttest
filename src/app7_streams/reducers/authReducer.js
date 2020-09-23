import {SIGN_IN, SIGN_OUT} from "../actions/actionTypes";

const INITIAL_STATE = {
    isSignedIn: null,
    currentUserId: null
}

export default (state = INITIAL_STATE, action) => {  // use an object
    //console.log(state)
    switch(action.type) {
        case SIGN_IN:
            return {...state, isSignedIn: true, currentUserId: action.payload}
        case SIGN_OUT:
            return {...state, isSignedIn: false, currentUserId: null}  // better to set this to null once signed out. this way avoided pop out this key from object using low dash
        default:
            return state
    }
}