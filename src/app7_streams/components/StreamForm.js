import React from "react";
import {Field, reduxForm} from 'redux-form'
import Clock from "../../shared/Clock";

// refactor this and make this as a parent component, and use call back from stream form
class StreamForm extends React.Component {

    renderInput = (formProps) => {
    //renderInput = ({input, label, meta}) => { // this is passed in from Field
        //const className = `field ${formProps.meta.touched && formProps.meta.error ? 'error' : ''}`
        //console.log(input)
        //console.log(formProps)
        return (
            <div className={"field"}>
                {/*<div className={className}>*/}
                {/*<label>{label}</label>*/}
                <label>{formProps.label}</label>
                {/*<input {...input} autoComplete={"off"} />*/}
                <input {...formProps.input} autoComplete={"off"} />
                {/* this will automatically check for the input.name to see a match to display, no need to check value null*/}
                {/*only pass the relevant form values for the corresponding field from the stream input object*/}
                {/*initial or any user interaction*/}
                <div>
                    {/*{this.renderError(meta)}*/}
                    {this.renderError(formProps.meta)}
                </div>
            </div>
        )
    }

    renderError({error, touched}) {  // touched is used to know enter then exit a field
        if(touched && error) {
            return (
                // this error message is automatically hidden by semantic ui
                <div className={"ui error message"}>
                    <div className={"header"}>{error}</div>
                </div>
            )
        }
    }

    onSubmit = (formValues)  => {
        this.props.onSubmit(formValues)
    }

    render() {
        return (
            <div>
                {/*similar as before but added a new props call*/}
                {/*add a class name error to show errors*/}
                <form className={"ui form error"} onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="test" component={Clock}/>
                    <Field name="title" component={this.renderInput} label={"Enter Title"} />
                    <Field name="description" component={this.renderInput} label={"Enter Description"}/>
                    <Field name="id" component={this.renderInput} label={"Stream ID"}/>
                    <button className={"ui button primary"}>Submit</button>
                </form>
            </div>
        )
    }
}

const validate = formValues => {
    const errors = {}
    if(!formValues.title) {
        errors.title = 'You must enter a title'
    }
    return errors
}

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm)
