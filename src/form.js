import React from 'react';
import {Field, reduxForm} from 'redux-form';


let Form = props => {
    const {handleSubmit, pristine, submitting, reset} = props;
    return (
        <div className="main">
            <h2> Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className = "single-item">
                    <label htmlFor="firstName"> First Name</label>
                    <Field component = "input" name = "firstName" type = "text"/>
                </div>
                <div className = "single-item">
                    <label htmlFor="lastName"> Last Name</label>
                    <Field component = "input" name = "lastName" type = "text"/>
                </div>
                <div className = "single-item">
                    <label htmlFor="age"> Age</label>
                    <Field component = "input" name = "age" type = "number"/>
                </div>
                <div className = "single-item">
                    <label> Gender</label>
                    <div>
                        <label>
                            <Field component = "input" name = "gender" type = "radio"/>
                         Male</label>
                        <label>
                            <Field component = "input" name = "gender" type = "radio"/>
                        Female</label>
                    </div>
                </div>
                <div className = "single-item">
                    <label htmlFor="work"> Employed</label>
                    <Field component = "input" name = "work" type = "checkbox"/>
                </div>
                <div className = "single-item">
                    <label htmlFor="education"> Education</label>
                    <Field component = "select" name = "education">
                        <option value="bachelor"> Bachelor</option>
                        <option value = "master"> Master</option>
                    </Field>
                </div>
                <button type = "submit" disabled = {pristine || submitting}> Submit </button>
                <button type = "submit" disabled={ pristine || submitting} onClick={reset} > Resubmit </button>
            </form>
        </div>
    )
}

Form = reduxForm({
    form: 'contact'
})(Form);

export default Form;