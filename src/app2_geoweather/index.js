import React from "react";
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";
import Clock from "../Clock";

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
        if (this.state.lat)
            //return <div>Latitude: {this.state.lat}, Longitude: {this.state.long}</div>;
            return <SeasonDisplay lat={this.state.lat}/>
        else if (this.state.errorMessage) {
            return <div>errMessage: {this.state.errorMessage}</div>;
        } else
            //return <div>Loading...</div>;
            return (
                //<Spinner message={"Please accept location request."}/>
                <Spinner/>
            );
    }

    // requirement of react; purpose is to return JSX
    render() {  // use a renderBody to wrap conditional logic, so that the common div can be outside
        return (
            <div className="boarder red">
                <Clock/>
                {this.renderBody()}
                {this.test2}
            </div>
        );

    }
}

export default App2