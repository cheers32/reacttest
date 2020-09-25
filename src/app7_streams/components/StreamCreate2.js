import React from "react";
import {connect} from "react-redux";
import {createStream} from "../actions";
import StreamForm from "./StreamForm";  // similar to connection function

// refactor this and make this as a parent component, and use call back from stream form
class StreamCreate2 extends React.Component {
    onSubmit = (formValues)  => {  // this is just pure form values with their keys
        console.log(formValues)
        this.props.createStream(formValues)
    }

    render() {
        //console.log(this.props)
        return (
            <div>
                StreamCreate
                {/*this stream form is a ReduxForm, so it goes through redux form to reach our component*/}
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, {createStream})(StreamCreate2)
