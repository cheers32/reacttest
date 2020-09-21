import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
    // Bad approach!
    // const response = await jsonPlaceholder.get('/posts')
    // return {
    //     type: 'FETCH_POSTS',
    //     payload: response
    // }

    return async (dispatch) => {  // will receive dispatch and getState method from redux
        const response = await jsonPlaceholder.get('/posts')
        dispatch({type: 'FETCH_POST', payload: response})  // will let redux dispatcher send result once obtained to continue flow

        // return {
        //     type: 'FETCH_POSTS',
        //     payload: response
        // }
    }
}