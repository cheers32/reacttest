import React from "react";
import Modal from "./Modal";
import customHistory from "../customHistory";
import {deleteStream, fetchStream} from "../actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

// Ctrl+Alt+Shift+J to select all occurance
// Ctrl+Alt+L to format
//const StreamDelete = () => {  // the purpose is to create a modal prompt window to take immediate action
class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
        //console.log(this.props)
    }

    render() {
        return (
            <Modal title="Delete Stream" content={this.renderContent()} actions={this.renderActions()} onDismiss={() => customHistory.push('/7')}/>
            // <div>StreamDelete
            //     {/*<Modal title="Delete Stream" content="Sure to delete this stream?" actions={actions} onDismiss={() => customHistory.push('/7')}/>*/}
            //
            // </div>
        )
    }

    renderContent() {
        if(!this.props.stream) {
            return "Are you sure to delete this stream?"
        }
        else {
            return `Are you sure to delete this stream? title=${this.props.stream.title}`
        }
    }

    renderActions() {
        //const id = this.props.match.params.id
        const {id} = this.props.match.params
        return (
            <React.Fragment>
                <button onClick={() => {this.props.deleteStream(id)}} className="ui button negative">Delete</button>
                {/*<button className="ui button">Cancel</button>*/}
                <Link to="/7" className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }

    // const actions = ( // fragment doesn't create html inside dom
    //     //<>
    //     //</>
    //     <React.Fragment>
    //         <button className="ui button negative">Delete</button>
    //         <button className="ui button">Cancel</button>
    //     </React.Fragment>
    // )
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete)