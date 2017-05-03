import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
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
      postlist = <CircularProgress size={80} thickness={7} />;
    } else {
      postlist = this.props.all.map((post) => {
        return (
          <Link to={`/post/${post.id}`} key={post.id}>
            <Card className="post">
              <CardMedia>
                <img src={post.cover_url} alt="cover" />
              </CardMedia>
              <CardTitle title={post.title} subtitle={post.tags} />
            </Card>
          </Link>
        );
      });
    }

    return (
      <div className="postlist">
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
