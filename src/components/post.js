import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost } from '../actions';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postID);
  }

  render() {
    if (!this.props.post) {
      return (
        <div>
          loading...
        </div>
      );
    } else {
      return (
        <div key={this.props.post._id}>

          <div>
            {this.props.post.cover_url}
          </div>

          <div>
            {this.props.post.title}
          </div>

          <div>
            {this.props.post.content}
          </div>

          <div>
            {this.props.post.tags}
          </div>

        </div>
      );
    }
  }

}

const mapStateToProps = state => (
  {
    post: state.posts.post,
  }
);

export default withRouter(connect(mapStateToProps, { fetchPost })(Post));
