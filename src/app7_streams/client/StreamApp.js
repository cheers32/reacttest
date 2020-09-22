import React from "react";
import {BrowserRouter, HashRouter, Route, Link} from 'react-router-dom'
import Clock from "../../shared/Clock";
import StreamList from "../components/StreamList";
import StreamCreate from "../components/StreamCreate";
import StreamEdit from "../components/StreamEdit";
import StreamShow from "../components/StreamShow";
import StreamDelete from "../components/StreamDelete";
import Header from "../components/Header";
// didn't see MemoryRouter
// HashRouter will make server to skip things after hash, so that to avoid server config to always return index.html

const PageOne = () => {
    return (
        <div>page One
        {/*<a href={"/7/pageTwo"}>click</a>*/}
        <Link to={"/7/pageTwo"}>click</Link>
        </div>
    )
}

const PageTwo = () => {
    return (
        <div>page Two
            <button>Click me</button>
            {/*<a href={"/7/pageOne"}>click</a>*/}
            <Link to={"/7/pageOne"}>click</Link>
        </div>

    )
}

const StreamApp = () => {
    return (
        // this is instance of BrowserRouter, similar to provider
        // JS component, instead of JSX, so use {}
        // no need to put div around route
        // uses actual path contains preset path logic
        // the header contains link, but doesn't seem to be required to be inside the BrowserRouter anymore
        <div>
            StreamApp
            {/*<Header />*/}
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
    )
}

export default StreamApp
