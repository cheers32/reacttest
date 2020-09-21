export default (state = [], action) => {
    console.log("reducer runs")
    console.log(action)
    // if(action.type === 'FETCH_POSTS') {
    //     return action.payload
    // }
    // else {
    //     return state
    // }
    switch(action.type) {
        case 'FETCH_POSTS':
            console.log("state changed="+state)
            return action.payload
        default:
            console.log("state unchanged=" + state)
            return state
    }
}