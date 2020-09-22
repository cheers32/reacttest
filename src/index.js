import React from 'react';
import ReactDOM from 'react-dom';
import App1 from "./app1_postdisplay/App1";
import App2 from "./app2_geoweather/App2";
import App3 from "./app3_imagesearch/App3";
import WidgetApp from "./app4_widget/WidgetApp";
import ReduxSongApp from "./app5_redux_songs/ReduxSongApp";
import ReduxBlogApp from "./app6_reduxblog/ReduxBlogApp";
import StreamApp from "./app7_streams/client/StreamApp";
import {BrowserRouter, Route} from "react-router-dom";
import MenuBar from "./shared/MenuBar";
import Clock from "./shared/Clock";

// this render method will be called after setState() happens
ReactDOM.render(
    <div>
    <MenuBar />
    <Clock />
    <BrowserRouter>
        <Route path="/1" component={App1}/>
        <Route path="/2" component={App2}/>
        <Route path="/3" component={App3}/>
        <Route path="/4" component={WidgetApp}/>
        <Route path="/5" component={ReduxSongApp}/>
        <Route path="/6" component={ReduxBlogApp}/>
        <Route path="/7" component={StreamApp}/>
    </BrowserRouter>
    </div>,
    //<App1 />,
    //<App2 />,
    //<App3 />,
    //<WidgetApp />,
    //<ReduxSongApp />,
    //<ReduxBlogApp/>,
    //<StreamApp />,
    document.querySelector('#root')
);
