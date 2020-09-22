import React from "react";

class GoogleAuth extends React.Component {
    state = {isSignedIn: null}

    componentDidMount() { // this is only called after the component is mounted (tag in place), not re-rendered; render method is controlling re-rendered result
        console.log("here")
        // initialize the gapi library
        // this works because a <script src="https://apis.google.com/js/api.js"></script> was added to index head
        window.gapi.load('client:auth2', () => {  // add this callback to init after the load completes
            window.gapi.client.init({  // this is an async function, use promise to do
                clientId: "781008424609-qmmi4f2alkq8tk5l12396s5fboue7495.apps.googleusercontent.com",
                scope: 'email'
            }).then(()=> { // this is when gapi is ready to go
                this.auth = window.gapi.auth2.getAuthInstance()  // use a new component to rerender the status
                //this.setState({isSignedIn: this.auth.isSignedIn.get()})
                this.setState({isSignedIn: this.auth.isSignedIn.get()})  // this seems to be needed as a default
                //this.onAuthChange()  // can be used as this to avoid duplicate code
                this.auth.isSignedIn.listen(this.onAuthChange)

            })
        }) // this is same effect as typing in the console load, working as in window scope
    }

    onAuthChange = () => {  // this is only called once signed in or signed out as an event handler
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    // JS only has prototypes, no classes, to use inheritance
    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            // return (
            //     <div>Loading status</div>
            // )
            return null
        } else if(this.state.isSignedIn) {
            return (
                <div>
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
                Signed in
                </div>
            )
        } else {
            return(
                <div>
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
                Not Signed in
                </div>
            )
        }
    }

    render() {
        console.log("hello")
        return (
            <div>
                Google Auth
                {this.renderAuthButton()}
            </div>
        )
    }
}

export default GoogleAuth