import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Form extends Component {
    render(){

        const {handleSubmit, reset} = this.props;

        const submit = (values) => console.log(values);

        return (
            <form onSubmit={handleSubmit(submit)}>
                Name:
                <Field name="drink" component="input" type="text"/>
                Category
                <Field name="category" component="input" type="text"/>
                Alcoholic:
                <Field name="alcoholic" component="input" type="text"/>
                Glass:
                <Field name="glass" component="input" type="text"/>
                Instructions:
                <Field name="instructions" component="input" type="text"/>
                Image URL:
                <Field name="thumbnail" component="input" type="text"/>
                Ingredients:
                <Field name="ingredient-name" component="input" type="text"/>
                <div>
                    <button type="button" onClick={reset}>Clear form</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        );
    }
}
Form = reduxForm({
    form: 'post', 
})(Form);

export default Form;