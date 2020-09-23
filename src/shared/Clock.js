import React from "react";

class Clock extends React.Component {
    componentDidMount() {
        setInterval(() => {
            this.setState({"time": new Date().toLocaleTimeString()})  // must be an object
        }, 1000);
    }
    //state = {time: ""}
    state = {time: new Date().toLocaleTimeString()}

    render() { /*call by state, not by this.time*/
        // console.log("clock rerendered")
        return (
            <div className="time">
                The time is: {this.state.time}
            </div>
        );
    }
}

export default Clock