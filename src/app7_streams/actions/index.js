import streams from "../apis/streams";
import {SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, EDIT_STREAM, DELETE_STREAM} from "./actionTypes";
import history from '../history'

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

export const createStream = (formValues) => async (dispatch, getState) => {
    const {currentUserId} = getState().authState
    console.log(currentUserId)
    //const response = await streams.post('/streams', {...formValues, currentUserId})  // this way can add this id with its key into the object
    const response = await streams.post('/streams', {...formValues, userId: currentUserId})
    console.log(response)
    dispatch({type: CREATE_STREAM, payload: response.data})

    // programmatically navigate after the action is dispatched
    history.push('/7')
}

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`)
    dispatch({type: FETCH_STREAM, payload: response.data})
}

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams')
    console.log(response)
    dispatch({type: FETCH_STREAMS, payload: response.data})
}

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.put(`/streams/${id}`, formValues)
    dispatch({type: EDIT_STREAM, payload: response.data})
}

export const deleteStream = (id) => async dispatch => {
    const response = await streams.delete(`/streams/${id}`)
    dispatch({type: DELETE_STREAM, payload: id})
}
