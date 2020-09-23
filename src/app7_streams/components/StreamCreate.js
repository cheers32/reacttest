import React from "react";
import {Field, reduxForm} from 'redux-form'  // similar to connection function

class StreamCreate extends React.Component {
    render() {
        //console.log(this.props)
        return (
            <div>
                StreamCreat
            </div>
        )
    }
}

export default reduxForm({
    form: 'streamCreateForm'
})(StreamCreate)