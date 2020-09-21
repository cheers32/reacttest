import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import App1 from "./app1_postdisplay";
import App2 from "./app2_geoweather";
import App3 from "./app3_imagesearch";
import WidgetApp from "./app4_widget/WidgetApp";

import ReduxSongApp from "./redux_songs/ReduxSongApp";
import songReducers from './redux_songs/reducers'
import blogReducers from './blog/reducers'
import BlogApp from "./blog/BlogApp";


const store = createStore(blogReducers, applyMiddleware(thunk))

// this render method will be called after setState() happens
ReactDOM.render(
    //<App1 />,
    //<App2 />,
    //<App3 />,
    //<WidgetApp />,
    // <Provider store={createStore(songReducers)}>
    //     <ReduxSongApp />
    // </Provider>,

    // <Provider store={store}>
    //     <BlogApp/>
    // </Provider>,
    document.querySelector('#root')
);

