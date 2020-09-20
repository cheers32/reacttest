console.clear()
// people dropping off a form ( action creations)

const createPolicy = (name, amount) => {
    return {  // action ( a form)
        type: 'CREATE_POLICY',
        payload: {
            //name, amount  // ES2015
            name: name,
            amount: amount
        }
    }
}

const deletePolicy = (name) => {
    return {  // action ( a form)
        type: 'DELETE_POLICY',
        payload: {
            name: name
        }
    }
}

const createClaim = (name, amountToCollect) => {
    return {  // action ( a form)
        type: 'CREATE_CLAIM',
        payload: {
            name: name,
            amountToCollect: amountToCollect
        }
    }
}

// Reducers (departments)
const claimsHistory = (oldListOfClaims=[], action) => {
    if(action.type === 'CREATE_CLAIM') {
        // never see a push in reducer
        return [...oldListOfClaims, action.payload]  // ES2015 syntax
    }
    else {
        return oldListOfClaims
    }
}

const accounting = (bagOfMoney=100, action) => {
    if(action.type === 'CREATE_CLAIM') {
        return bagOfMoney-action.payload.amountToCollect
    }
    else if(action.type === 'CREATE_POLICY') {
        return bagOfMoney+action.payload.amount
    }
    else {
        return bagOfMoney
    }
}

const policies = (listOfPolicies = [], action) => {
    if(action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name]
    }
    else if(action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(name => name !== action.payload.name)
    }
    else {
        return listOfPolicies
    }
}

console.log(Redux)
// redux libraries

const {createStore, combineReducers} = Redux

const ourDepartments = combineReducers({  // this is a state object
    accouting: accounting,
    claimsHistory: claimsHistory,
    policies: policies,
    credit: 50
})

const store = createStore(ourDepartments)
const action = createPolicy('Alex', 20)
console.log(action)

store.dispatch(action)
store.dispatch(createPolicy('Jim', 30)) // calling action creator to create an action, to change state
store.dispatch(createPolicy('Bob', 40))

store.dispatch(createClaim('Alex', 120))
store.dispatch(createClaim('Jim', 200))

store.dispatch(deletePolicy('Tom'))
store.dispatch(deletePolicy('Jim'))

store.dispatch(createClaim('Jim', 200))

const states = store.getState()
console.log(states)

// redux cycle: 5 steps


