import React from "react";
import ReactDOM from "react-dom"
import SearchBar from "./SearchBar";
import Clock from "../Clock";

class App3 extends React.Component {
    render() {
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <Clock />
                <SearchBar />
            </div>

        );
    }
}

export default App3