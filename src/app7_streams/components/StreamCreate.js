import React from "react";
import {Field, reduxForm} from 'redux-form'
import Clock from "../../shared/Clock";  // similar to connection function

class StreamCreate extends React.Component {

    renderInput = (formProps) => {
    //renderInput({name, input, label, meta}) {
        console.log(formProps)
        console.log(formProps.input.name)
        //console.log(meta)
        const className = `field ${formProps.meta.touched && formProps.meta.error ? 'error' : ''}`
        return (
            // <div>I'm an input</div>
            // <input onChange={formProps.input.onChange} value={formProps.input.value}/>
            // <input {...formProps.input} />
            //<div className={"field"}>
            <div className={className}>
                {/*{formProps.input.title}*/}
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete={"off"} />
                {/* this will automatically check for the input.name to see a match to display, no need to check value null*/}
                {/*initial or any user interaction*/}
                <div>
                    {/*{formProps.meta.error}*/}
                    {/*calling "this" will cause a context error, because this renderInput is passed in to "render" and then the context doesn't carry*/}
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

    //onSubmit(event) {
    onSubmit(formValues) {  // this is just pure form values with their keys
        console.log(formValues)
        //event.preventDefault()  // stops to submit to backend server; this was handled by redux form automatically; no more event param to take
    }

    render() {
        //console.log(this.props)
        return (
            <div>
                StreamCreate
                {/*similar as before but added a new props call*/}
                {/*add a class name error to show errors*/}
                <form className={"ui form error"} onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="test" component={Clock}/>
                    <Field name="title" component={this.renderInput} label={"Enter Title"} />
                    <Field name="description" component={this.renderInput} label={"Enter Description"}/>
                    <button className={"ui button primary"}>Submit</button>
                </form>
            </div>
        )
    }
}

const validate = formValues => {
    const errors = {}
    if(!formValues.title) {
        errors.title = 'You must enter a title'  // this is assignment to a field in an object
    }
    return errors
}

export default reduxForm({
    form: 'streamCreateForm',
    //validate: validate
    validate
})(StreamCreate)