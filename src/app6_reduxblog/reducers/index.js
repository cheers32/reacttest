import {combineReducers} from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";


export default combineReducers({
    dummyVal: () => 'hi',
    posts: postsReducer,
    users: usersReducer
})