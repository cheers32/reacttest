import React from "react";
import {connect} from "react-redux";
import {fetchStream, editStream} from "../actions";
import StreamForm from "./StreamForm";
import _ from 'lodash'

// the rule is, for URL based selection, component must be designed in isolation (by its self, to fetch its own data)
//const StreamEdit = (props) => {
class StreamEdit2 extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        console.log(formValues) // the form looks up for the values and its input name to determine which value to display, but the form value contains the entire intialValues, so the formValues will contain all stream data
        this.props.editStream(this.props.match.params.id, formValues)  // form values only supposed to have values that are supposed to change, so shouldn't send userId to it, but will lose user id information, but the id data is not lost
        // PUT is for update, but some APIs replace all data. this is supposed to be repeatable. PATCH is able to fix this.
        // POST is for create. this is not supposed to be repeatable, but can be made that way
    }

    render() {
        // this props is passed down by react-router-dom, because that's the parent that renders this component
        //console.log("props")
        //console.log(this.props)
        if(!this.props.stream)
            return <div>loading...</div>
        return (
            <div>
                StreamEdit
                {/*{this.props.stream.title}*/}
                {/*initialValues is a special prop for redux form*/}
                <StreamForm onSubmit={this.onSubmit} initialValues={
                    //{title: 'hi', description: 'my disk'}
                    //this.props.stream
                    _.pick(this.props.stream, 'title', 'description', 'id')  // this always creates a new object. the ID doesn't seem to be able to change
                } />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    //console.log(ownProps)
    //console.log("state")
    //console.log(state)
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit2)