import React from "react";
import ReactDOM from "react-dom"

class SearchBar extends React.Component {
    render() {
        return(
            <div className="ui segment">SearchBar
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input className="ui input" type="text" placeholder="Search..."/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar