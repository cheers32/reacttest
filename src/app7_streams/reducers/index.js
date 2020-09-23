import {combineReducers} from "redux";
import authReducer from "./authReducer";
import {reducer as formReducer} from "redux-form";  // this is called named import

export default combineReducers({
    testState: () => 'hi',
    authState: authReducer,
    form: formReducer  // must be form as key
})