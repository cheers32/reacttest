import React from "react";
import ReactDOM from "react-dom"

class SearchBar extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.onFormSubmit = this.onFormSubmit.bind(this)
    // }

    state = {term: "", myText: "great"}

    onInputChange(event) {  // automatic event parameter
        console.log(event.target.value);
        this.setState({term: event.target.value.toUpperCase()});
    }

    onInputClick(event) {
        console.log(event.target.value);
    }

    // const handleClick = (event) => {  // cannot put const inside a class, ok in a function
    //     console.log(event.target.value);
    // }

    // value taking value is important! this becomes a controlled element; centralize all data into component, using state;
    // don't go into DOM to find element for a value
    // passing directly an arrow function is the 3rd way to solve binding problem (event)=>this.onFormSubmit(event), not a reference, it's a call
    render() {
        return(
            <div className="ui segment">SearchBar
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input value={this.state.term} onClick={this.onInputClick}  // this set value is important, as controlled element
                               //onChange={e => {this.setState({term: e.target.value.toUpperCase()})}} className="ui input" type="text" placeholder="Search..."/>
                               onChange={e => {this.setState({term: e.target.value})}} className="ui input" type="text" placeholder="Search..."/>
                    </div>
                </form>
            </div>
        );
    }
    // JS "this" depends on calling location, not exactly like java, need a binding in constructor
    //onFormSubmit(event) {
    onFormSubmit = (event) => {  // cannot use const here, this is a function definition using arrow function; assignment to a reference.
        event.preventDefault()
        console.log(this.state)  // let parent to handle API call, props can only go down; can use a callback method from parent to solve, like return value; parent must be class component
        this.props.onSubmit2(this.state.term)  // use the props to do callback, because it's a passed in prop!
    }

    // this is equivalent to
    // onFormSubmit: function(event) {
    // } // always have "this" problem, fixed by ES2015 arrow function which does auto binding
}

export default SearchBar