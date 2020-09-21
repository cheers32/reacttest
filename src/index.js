import React from 'react';
import ReactDOM from 'react-dom';
import App1 from "./app1_postdisplay/App1";
import App2 from "./app2_geoweather/App2";
import App3 from "./app3_imagesearch/App3";
import WidgetApp from "./app4_widget/WidgetApp";
import ReduxSongApp from "./redux_songs/ReduxSongApp";
import ReduxBlogApp from "./blog/ReduxBlogApp";


// this render method will be called after setState() happens
ReactDOM.render(
    //<App1 />,
    //<App2 />,
    //<App3 />,
    //<WidgetApp />,
    <ReduxSongApp />,
    //<ReduxBlogApp/>,
    document.querySelector('#root')
);
