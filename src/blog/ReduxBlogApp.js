import React from "react";
import PostList from "./components/PostList";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import blogReducers from "./reducers";
import thunk from "redux-thunk";


const ReduxBlogApp = () => {
    return (
        <Provider store={createStore(blogReducers, applyMiddleware(thunk))}>
            <div
                className={"ui container"}><PostList/>
            </div>
        </Provider>
    )}

export default ReduxBlogApp