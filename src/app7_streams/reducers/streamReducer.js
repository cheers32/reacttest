import {CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, EDIT_STREAM, DELETE_STREAM} from "../actions/actionTypes";
import _ from "lodash"

export default (state = {}, action) => {  // use an object to hold all streams, so that can use key interpolation syntax, {...state, [key]: value}
    switch (action.type) {
        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload}
        case FETCH_STREAM:
            return {...state, [action.payload.id]: action.payload}
        case FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload, 'id')} // this looks to replace the existing state entirely
        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload}
        case DELETE_STREAM:
            return _.omit(state, action.payload)
        default:
            return state
    }
}