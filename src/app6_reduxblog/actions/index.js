import _ from "lodash"
import jsonPlaceholder from "../apis/jsonPlaceholder";

// export const fetchPosts = () => {
//     //Bad approach!
//     const response = await jsonPlaceholder.get('/posts')
//     return {
//         type: 'FETCH_POSTS',
//         payload: response
//     }
// }

export const fetchPostAndUsers = () => async (dispatch, getState) => {  // the 2nd is getState() function, to get all state data
    console.log("about to fetch")
    await dispatch(fetchPosts())  // this need to use dispatch to call, because it's used in the middleware, has to dispatch the result of action creator
    //await fetchPosts()
    console.log(getState().posts)
    const allUserIds = _.map(getState().posts, 'userId')
    console.log(allUserIds)
    const uniqueUserIds = _.uniq(allUserIds)
    console.log(uniqueUserIds)
    //uniqueUserIds.forEach(userId => dispatch(fetchUser(userId)))  // no need to wait for the result, as long as the request is made
    //await Promise.all(uniqueUserIds.map(userId => dispatch(fetchUser(userId))))  // this way i can wait for the results to come back to print out
    // new fetchUser result could override the existing one if really want to make a separate request

    console.log("chainedRes")
    const chainedRes = await Promise.all(_.chain(getState().posts)
        .map('userId')  // the first argument of each chained function is the result of the previous operation
        .uniq()
        //.forEach(userId => dispatch(fetchUser(userId)))
        .map(userId => dispatch(fetchUser(userId)))  // use map can do the promise all to do await, forEach cannot
        .value())
    console.log(chainedRes)

    const uniqueUsers = getState().users
    console.log(uniqueUsers)
    console.log("fetched posts")
}

export const fetchPosts = () => {
    return async (dispatch) => {  // will receive dispatch and getState method from redux
        const response = await jsonPlaceholder.get('/posts')
        //console.log(response)
        dispatch({type: 'FETCH_POSTS', payload: response.data})  // will let redux dispatcher send result once obtained to continue flow
    }
}

export const fetchUser = (userId) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${userId}`)  // ('/users/' + userId)
    dispatch({type: 'FETCH_USER', payload: response.data})
}

// fetch exactly once, not very good, cannot get any update going forward
// export const fetchUser = (userId) => dispatch => _fetchUser(userId, dispatch)
// const _fetchUser = _.memoize(async (userId, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${userId}`)
//     dispatch({type: 'FETCH_USER', payload: response.data})
// })

// cannot apply memoization this way
// export const fetchUser = function(userId) {
//     return (
//         _.memoize(async function (dispatch) {
//             //const response = await jsonPlaceholder.get('/users/' + userId)
//             const response = await jsonPlaceholder.get(`/users/${userId}`)
//             //console.log(response)
//             dispatch({type: 'FETCH_USER', payload: response.data})
//         })
//     )
// }
