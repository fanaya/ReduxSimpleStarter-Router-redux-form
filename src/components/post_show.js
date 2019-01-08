import React, { Component } from 'react';
import { connect } from 'react';
import { fetchPost } from '../actions';

class PostShow extends  Component {

    componentDidMount(){
        this.props.fetchPost();
    }

    render() {
        return (
            <div>
                Post Show!
            </div>
        )
    }
}

function mapStateToProps({ posts }) {

}

export default connect(null, { fetchPost })(PostShow);