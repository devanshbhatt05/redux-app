import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions/postAction';

class Posts extends Component {


    componentWillMount() {
        this.props.fetchPosts();
    }



    
    componentWillReceiveProps(nextProps) {
       if(nextProps.newPost) {
             this.props.posts.unshift(nextProps.newPost);
       }
    }


/*
    constructor(props)
    {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentWillMount() {
        
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => this.setState({posts: data}));
    } */


  render() {
    const postItems = this.props.posts.map( post => (
        <div key={post.id}>
            <h3>{post.name}</h3>
            <p>{post.city}</p>
            <p>{post.location}</p>
        </div>
    ));
    return (
      <div>
        
        {postItems}
      </div>
    )
  }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts} )(Posts);