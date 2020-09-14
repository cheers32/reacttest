import React from "react";
import ReactDOM from "react-dom"

class Clock extends React.Component {
    componentDidMount() {
        setInterval(() => {
            this.setState({"time": new Date().toLocaleTimeString()})  // must be an object
        }, 1000);
    }
    //state = {time: ""}
    state = {time: new Date().toLocaleTimeString()}

    render() { /*call by state, not by this.time*/
        return (
            <div className="time">
                The time is: {this.state.time}
            </div>
        );
    }
}

export default Clock