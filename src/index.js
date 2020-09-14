// import the React and ReactDom libraries
import React from 'react';   // ES2015 module system
import ReactDOM from 'react-dom';
import faker from 'faker';   // used --save flag during npm install; previously used -g when installing create-react-app
// otherwise will need to put files in public folder for static contents
import CommentDetail from './CommentDetail';  // done by webpack, so no need to put .js
import ApprovalCard from "./ApprovalCard";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import Clock from "./Clock"
import App3 from "./components/App3";

//const React_old = require('react')   // CommonJS modules
// https://github.com/StephenGrider/redux-code
// even though not required, it's recommended to use JSX instead of react function calls like React.createElement()
// browsers don't know JSX, so JSX converted by Babel to JS
// create a react component, function or a class
// the None is "undefined" in JS
//const App = function() {
const App = () => {   // ES2015 arrow function
    //return <div> Hi there3! </div>;   // this return value is a JSX, it's not html, it will be converted to normal JS code
    return (
        <div className="ui container comments">
            {window.navigator.geolocation.getCurrentPosition(
                (position) => console.log(position),
                (err) => console.log(err)
            )};
            <CommentDetail author={'Sam'} />  // here it's referring to a component, not a variable, so using element tag, not braces.
            <CommentDetail author={'Alex'} />
            <CommentDetail author={'Jane'} />
            <CommentDetail />
            <ApprovalCard>
                <CommentDetail />
            </ApprovalCard>
            <ApprovalCard>
                <h4>Warning</h4>
                <div>
                    Are you sure?
                </div>
            </ApprovalCard>
        </div>

    );
};

class App2 extends React.Component {  // must extend from React.Component, must define render and return JSX
    // JS special function
    // constructor(props) {  // must pass in props
    //     super(props);
    //     this.state = {"lat": null, "long": 9, "errorMessage": ''}  // null can be used; quote is optional;
    //     // error message also needs to be an attribute of state
    // }

    state = {lat: null, errorMessage: '', long: 8}   // this is just an abbrieviation of the constructor
    test2 = 5

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({"lat": position.coords.latitude});  // must have {}, means setting whole state object
                this.setState({"long": 70}); // looks like only affecting the attribute speicified
            },  // never do direct assignment; only once in constructor
            (err) => {
                console.log(err);
                this.setState({"errorMessage": err.message})
            }
        );
    }

    renderBody() {
        if(this.state.lat)
            //return <div>Latitude: {this.state.lat}, Longitude: {this.state.long}</div>;
            return <SeasonDisplay lat={this.state.lat}/>
        else if(this.state.errorMessage) {
            return <div>errMessage: {this.state.errorMessage}</div>;
        }
        else
            //return <div>Loading...</div>;
            return (
                //<Spinner message={"Please accept location request."}/>
                <Spinner />
            );
    }

    // requirement of react; purpose is to return JSX
    render() {  // use a renderBody to wrap conditional logic, so that the common div can be outside
        return (
            <div className="boarder red">
                <Clock />
                {this.renderBody()}
                {this.test2}
            </div>
        );

    }
}

// take react component and show it on the screen
ReactDOM.render(  // this render method will be called after setState() happens
    //<App2 />,
    <App3 />,
    document.querySelector('#root')
);

// with {{}} syntax, it means {} is a JS variable reference, then 2nd {} is a JS object with {key: 'value', key2: 'value2'} style
// this is called JSX interpolation:
// define variable: const myVar = 'hi';
// define function: function myFunc() {return 'hello';}, this function call can be used as a variable. this is not JS syntax, but JSX syntax to refer to JS variable
// cannot reference a JS object directly, can refer its value by using key
// use className instead of class for inline style; use "htmlFor" instead of "for"
// object can be used in style, but cannot use as text