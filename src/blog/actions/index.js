import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {

    // Bad approach!
    // const response = await jsonPlaceholder.get('/posts')
    // return {
    //     type: 'FETCH_POSTS',
    //     payload: response
    // }

    return async  (dispatch) => {
        const response = await jsonPlaceholder.get('/posts')
        dispatch({type: 'FETCH_POST', payload: response})

        // return {
        //     type: 'FETCH_POSTS',
        //     payload: response
        // }
    }
}