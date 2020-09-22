import React from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import Clock from "../../shared/Clock";

const PageOne = () => {
    return (
        <div>page One</div>
    )
}

const PageTwo = () => {
    return (
        <div>page Two
            <button>Click me</button>
        </div>

    )
}

const StreamApp = () => {
    return (
        // this is instance of BrowserRouter, similar to provider
        // JS component, instead of JSX, so use {}
        // no need to put div around route
        <div>
            StreamApp
            <BrowserRouter>
                <Route path="/7" exact component={PageOne}/>
                <Route path="/7/pageTwo" component={PageTwo}/>
                <Route path="/7/pageTwo" component={PageTwo}/>
            </BrowserRouter>
        </div>
    )
}

export default StreamApp
