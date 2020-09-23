import React from "react";
import {BrowserRouter, Route } from 'react-router-dom'
//import { HashRouter, Link} from 'react-router-dom'
import StreamList from "./components/StreamList";
import StreamCreate from "./components/StreamCreate";
import StreamEdit from "./components/StreamEdit";
import StreamShow from "./components/StreamShow";
import StreamDelete from "./components/StreamDelete";
import Header from "./components/Header";
// didn't see MemoryRouter
// HashRouter will make server to skip things after hash, so that to avoid server config to always return index.html

import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from "redux";
import reducers from './reducers'
import MenuBar from "./components/MenuBar";

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
        composeEnhancers(applyMiddleware())
        )
    return (
        // this is instance of BrowserRouter, similar to provider
        // JS component, instead of JSX, so use {}
        // no need to put div around route
        // uses actual path contains preset path logic
        // the header contains link, but doesn't seem to be required to be inside the BrowserRouter anymore
        <Provider store={store}>
        <div>
            StreamApp
            {/*<Header />*/}
            {MenuBar()}
            <BrowserRouter>
                <Header />
                {/*<Route path="/7/pageOne" exact={true} component={PageOne}/>*/}
                {/*<Route path="/7/pageTwo" component={PageTwo}/>*/}
                {/*<Route path="/7/pageTwo" component={PageTwo}/>*/}
                <Route path="/7" exact component={StreamList}/>
                <Route path="/7/new" component={StreamCreate}/>
                <Route path="/7/edit" component={StreamEdit}/>
                <Route path="/7/show" component={StreamShow}/>
                <Route path="/7/delete" component={StreamDelete}/>
            </BrowserRouter>
        </div>
        </Provider>
    )
}

export default StreamApp
