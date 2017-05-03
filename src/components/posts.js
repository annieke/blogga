import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    let postlist = '';
    if (!this.props.all) {
      postlist = 'loading';
    } else {
      postlist = this.props.all.map((post) => {
        return (
          <Link to={`/post/${post.id}`} key={post.id}>
            <div key={post.id}>
              <div>
                {post.title}
              </div>
              <div>
                {post.tags}
              </div>
              <div>
                {post.cover_url}
              </div>
            </div>
          </Link>
        );
      });
    }

    return (
      <div>
        {postlist}
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    all: state.posts.all,
  }
);

export default withRouter(connect(mapStateToProps, { fetchPosts })(Posts));
