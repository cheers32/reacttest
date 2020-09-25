import React from "react";
import {connect} from "react-redux";
import {fetchStream} from "../actions";

// the rule is, for URL based selection, component must be designed in isolation (by its self, to fetch its own data)
//const StreamEdit = (props) => {
class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    render() {
        // this props is passed down by react-router-dom, because that's the parent that renders this component
        console.log("props")
        console.log(this.props)
        if(!this.props.stream)
            return <div>loading...</div>
        return (
            <div>
                StreamEdit
                {this.props.stream.title}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    //console.log(ownProps)
    console.log("state")
    console.log(state)
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream})(StreamEdit)