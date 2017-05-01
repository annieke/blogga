import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // run fetchPosts() here
  }

  render() {
    return (
      <div>
        posts
      </div>
    );
  }
}

// connects particular parts of redux state to this components props
const mapDispatchToProps = state => (
  {
    posts: state.posts.all,
  }
);

export default withRouter(connect(mapDispatchToProps, null)(Posts));
