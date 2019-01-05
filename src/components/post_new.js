import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component{
    render() {
        return (
            <div>
                Posts New!
            </div>
        )
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostNew);