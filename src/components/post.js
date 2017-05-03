import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { RaisedButton } from 'material-ui';
import { fetchPost, deletePost } from '../actions';

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
        <div>
          <div>
            <Link to="/" exact>back to index</Link>
            <RaisedButton
              onClick={() => this.props.deletePost(this.props.post._id, this.props.history)}
              label="delete" secondary
            />
          </div>
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

export default withRouter(connect(mapStateToProps, { fetchPost, deletePost })(Post));
