import { combineReducers} from "redux";
import postsReducer from "./postsReducer";

// const postReducer2 = (state=[], action) => {
//     console.log("reducer runs")
//     console.log(state)
//     return []
//     // switch(action.type) {
//     //     case 'FETCH_POSTS':
//     //         console.log("state changed="+state)
//     //         return action.payload
//     //     default:
//     //         console.log("state unchanged=" + state)
//     //         return state
//     // }
// }

export default combineReducers({
    dummyVal: () => 'hi',
    posts: postsReducer
})