import React from "react";
//import {BrowserRouter, Route } from 'react-router-dom'
import {Router, Route, Switch } from 'react-router-dom'
//import { HashRouter, Link} from 'react-router-dom'
import StreamList from "./components/StreamList";
import StreamCreate2 from "./components/StreamCreate2";
import StreamEdit2 from "./components/StreamEdit2";
import StreamShow from "./components/StreamShow";
import StreamDelete from "./components/StreamDelete";
import Header from "./components/Header";
// didn't see MemoryRouter-
// HashRouter will make server to skip things after hash, so that to avoid server config to always return index.html

import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from "redux";
import reducers from './reducers'
import AppMenu from "./AppMenu";
import reduxThunk from "redux-thunk"
import customHistory from "./customHistory";

const NodeMediaServer = require('node-media-server');

// const PageOne = () => {
//     return (
//         <div>page One
//         {/*<a href={"/7/pageTwo"}>click</a>*/}
//         <Link to={"/7/pageTwo"}>click</Link>
//         </div>
//     )
// }
// const PageTwo = () => {
//     return (
//         <div>page Two
//             <button>Click me</button>
//             {/*<a href={"/7/pageOne"}>click</a>*/}
//             <Link to={"/7/pageOne"}>click</Link>
//         </div>
//     )
// }

// use this to use debug session to preserve all state and actions across refresh:
//http://localhost:3000/7?debug_session=abc

// this will be used in chrome extension to inspect redux store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const StreamApp = () => {
    const store=createStore(
        reducers,
        composeEnhancers(applyMiddleware(reduxThunk))
        )
    return (
        // this is instance of BrowserRouter, similar to provider
        // JS component, instead of JSX, so use {}
        // no need to put div around route
        // uses actual path contains preset path logic
        // the header contains link, required to be inside the BrowserRouter to work properly
        <Provider store={store}>
        <div>
            <h2>StreamApp</h2>
            {/*<BrowserRouter history={history}>*/}
            {/*this browserRouter comes with a history object, so cannot use custom object*/}
            <Router history={customHistory}>
                <Header />
                {AppMenu()}
                <Switch>
                    {/*this switch will ensure the first matched result to show*/}
                    {/*<Route path="/7/pageOne" exact={true} component={PageOne}/>*/}
                    {/*<Route path="/7/pageTwo" component={PageTwo}/>*/}
                    {/*<Route path="/7/pageTwo" component={PageTwo}/>*/}
                    <Route path="/7" exact component={StreamList}/>
                    <Route path="/7/new" exact component={StreamCreate2}/>
                    {/*colon means a variable, looks like only usable when passing down*/}
                    <Route path="/7/edit/:id" exact component={StreamEdit2}/>
                    <Route path="/7/delete/:id" exact component={StreamDelete}/>
                    <Route path="/7/:id" exact component={StreamShow}/>
                </Switch>
            </Router>
        </div>
        </Provider>
    )
}

export default StreamApp
