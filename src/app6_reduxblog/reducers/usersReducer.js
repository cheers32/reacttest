export default (state = [], action) => {
    //console.log("user reducer runs")
    //console.log(action)

    switch (action.type) {  // switch is preferred
        case 'FETCH_USER':
            //console.log("state changed!")
            return [...state, action.payload]  // this will give a new array as a new state, so that can cause a rerender to happen
        default:
            return state
    }
}

// when using ..., the later value will override the former value with the same key in a json object
// can use _.omit to pop a key in a immutable manner