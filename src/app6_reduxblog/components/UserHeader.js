import React from "react";
import {connect} from "react-redux";
import {fetchUser} from "../actions";

class UserHeader extends React.Component {
    componentDidMount() {
        //this.props.fetchUser(this.props.userId)
    }

    render() {
        //console.log(this.props)
        //const user = this.props.users.find(user => user.id===this.props.userId)
        //const user = this.props.targetUser
        const {targetUser} = this.props
        //console.log(targetUser)
        if(targetUser)
            return <div>{targetUser.name}</div>
        else {
            //return null
            //console.log(this.props.userId)
            return <div>User not found. id={this.props.userId}</div>
        }
        //return <div>UserHeader= {this.props.userId}</div>
    }
}

const mapStateToProps = (state, ownProps) => {  // use this method to make pre-calculation of data to increase reusability
    //console.log(state.users)
    const user = state.users.find(user => user.id===ownProps.userId)
    return {
        targetUser: user
    }
}

export default connect(mapStateToProps,{fetchUser})(UserHeader)

// –save or -S: When the following command is used with npm install this will save all your installed core packages into the dependency section in the package.json file. Core dependencies are those packages without which your application will not give desired results. But as mentioned earlier, it is an unnecessary feature in the npm 5.0.0 version onwards.