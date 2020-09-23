import React from "react";
import {connect} from 'react-redux'
import {signIn, signOut} from "../actions";

class GoogleAuth extends React.Component {
    //state = {isSignedIn: null}

    // this is only called after the component is mounted (tag in place), not re-rendered; render method is controlling re-rendered result
    // initialize the gapi library
    // this works because a <script src="https://apis.google.com/js/api.js"></script> was added to index head
    componentDidMount() {
        //console.log("here")
        window.gapi.load('client:auth2', () => {  // add this callback to init after the load completes
            window.gapi.client.init({  // this is an async function, use promise to do
                clientId: "781008424609-qmmi4f2alkq8tk5l12396s5fboue7495.apps.googleusercontent.com",
                scope: 'email'
            }).then(()=> { // this is when gapi is ready to go, using the Promise (promise, callback, await)
                this.auth = window.gapi.auth2.getAuthInstance()  // use a new component to rerender the status
                //this.setState({isSignedIn: this.auth.isSignedIn.get()})  // this seems to be needed as a default
                this.onAuthChange(this.auth.isSignedIn.get())  // can be used as this to avoid duplicate code
                this.auth.isSignedIn.listen(this.onAuthChange) //the get() result is automatically passed in to onAuthChange handler
            })
        }) // this is same effect as typing in the console load, working as in window scope
    }

    onAuthChange = (isSignedIn2) => {  // this is only called once signed in or signed out as an event handler
        //this.setState({isSignedIn: this.auth.isSignedIn.get()})  // previously just set state to re-render the sign-in status, but now want to call a action creator to send status to redux
        // this parameter looks like is a default param that passed in from the isSignedIn property to this event handler
        //console.log(isSignedIn2)
        //console.log("verify!")
        if(isSignedIn2) {
            //console.log("sign in status")
            this.props.signIn(this.auth.currentUser.get().getId())  // this is to tell action creator to register this status
        }
        else {
            //console.log("sign out status")
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    // JS only has prototypes, no classes, to use inheritance
    renderAuthButton() {
        //if(this.state.isSignedIn === null) {
            // return (
            //     <div>Loading status</div>
            // )
        if(this.props.isSignedInProp === null) {
            return null
            // return <div>Loading status</div>
        //} else if(this.state.isSignedIn) {
        } else if(this.props.isSignedInProp) {
            return (
                <div>
                <button onClick={this.onSignOutClick} className="ui blue google button">
                    <i className="google icon" />
                    Sign Out
                    <div>({this.props.currentUserId})</div>
                </button>
                {/*Signed in*/}
                </div>
            )
        } else {
            return(
                <div>
                <button onClick={this.onSignInClick} className="ui green google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
                {/*Not Signed in*/}
                </div>
            )
        }
    }

    render() {
        //console.log("hello")
        return (
            <div>
                {/*Google Auth*/}
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log("mapping!")
    //console.log(state)
    return {isSignedInProp: state.authState.isSignedIn, currentUserId: state.authState.currentUserId}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)