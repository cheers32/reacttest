import React from "react";
import {Field, reduxForm} from 'redux-form'
import Clock from "../../shared/Clock";  // similar to connection function

class StreamCreate extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                StreamCreate
                <form>
                    <Field name="title" component={Clock}/>
                    {/*<Field name="description" />*/}
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'streamCreateForm'
})(StreamCreate)