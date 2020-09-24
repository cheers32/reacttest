import React from "react";
import {connect} from "react-redux"
import {fetchStreams} from "../actions";

class StreamList extends React.Component{
    componentDidMount() {
        this.props.fetchStreams()
    }

    renderAdminButtons(stream) {
        if(stream.userId && stream.userId === this.props.currentUserId)
            return (
                <div className={"right floated content"}>
                    <button className={"ui button primary"}>Edit</button>
                    <button className={"ui button negative"}>Delete</button>
                </div>
            )
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className={"item"} key={stream.id}>
                    {this.renderAdminButtons(stream)}
                    <i className={"large middle aligned icon camera"} />
                    <div className={"content"}>
                        {stream.title}
                        <div className={"description"}>{stream.description}</div>
                    </div>
                </div>
            )
        })
    }

    renderCreateButton() {
        if(this.props.isSignedIn)
            return (
                <div className={"right floated content"}>
                    <button className={"ui button primary"}>Create</button>
                </div>
            )
    }

    render() {
        //console.log(this.props.streams)
        return (
            <div>
                StreamList
                <div className={"ui celled list"}>
                {this.renderList()}
                </div>
                {/*{renderCreateButton()}*/}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.authState.currentUserId,
        isSignedIn: state.authState.isSignedIn
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList)