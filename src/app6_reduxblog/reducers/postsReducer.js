export default (state = [], action) => {
    //console.log("reducer runs")
    //console.log(action)

    switch (action.type) {  // switch is preferred
        case 'FETCH_POSTS':
            //console.log("state changed!")
            return action.payload
        default:
            return state
    }

    // if(action.type === 'FETCH_POSTS') {
    //     return action.payload
    // }
    // else {
    //     return state
    // }
}