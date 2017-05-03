import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { RaisedButton, CircularProgress } from 'material-ui';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import marked from 'marked';
import { fetchPost, deletePost, updatePost } from '../actions';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: this.props.post._id,
      cover_url: this.props.post.cover_url,
      title: this.props.post.title,
      content: this.props.post.content,
      tags: this.props.post.tags,
      coverIsEditing: false,
      titleIsEditing: false,
      contentIsEditing: false,
      tagsAreEditing: false,
    };
    this.onCoverURLChange = this.onCoverURLChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postID);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      _id: newProps.post._id,
      cover_url: newProps.post.cover_url,
      title: newProps.post.title,
      content: newProps.post.content,
      tags: newProps.post.tags,
    });
  }

  onCoverURLChange(event) {
    this.setState({ cover_url: event.target.value });
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onTagsChange(event) {
    this.setState({ tags: event.target.value });
  }

  onContentChange(event) {
    this.setState({ content: event.target.value });
  }

  renderCover() {
    if (this.state.coverIsEditing) {
      return (
        <div>
          <input
            onChange={this.onCoverURLChange} value={this.state.cover_url}
            onBlur={() => {
              this.props.updatePost(this.props.post._id,
              { cover_url: this.state.cover_url },
            );
              this.setState({ coverIsEditing: false });
            }}
          />
        </div>
      );
    } else {
      return (<img src={this.props.post.cover_url} alt="cover" />);
    }
  }

  renderTitle() {
    if (this.state.titleIsEditing) {
      return (
        <div>
          <input
            onChange={this.onTitleChange} value={this.state.title}
            onBlur={() => {
              this.props.updatePost(this.props.post._id,
              { title: this.state.title },
            );
              this.setState({ titleIsEditing: false });
            }}
          />
        </div>
      );
    } else {
      return (<CardTitle title={this.props.post.title} />);
    }
  }

  renderContent() {
    if (this.state.contentIsEditing) {
      return (
        <div>
          <input
            onChange={this.onContentChange} value={this.state.content}
            onBlur={() => {
              this.props.updatePost(this.props.post._id,
              { content: this.state.content },
            );
              this.setState({ contentIsEditing: false });
            }}
          />
        </div>
      );
    } else {
      return (
        <div dangerouslySetInnerHTML={{ __html: marked(this.props.post.content || '') }} />
      );
    }
  }

  renderTags() {
    if (this.state.tagsAreEditing) {
      return (
        <div>
          <input
            onChange={this.onTagsChange} value={this.state.tags}
            onBlur={() => {
              this.props.updatePost(this.props.post._id,
              { tags: this.state.tags },
            );
              this.setState({ tagsAreEditing: false });
            }}
          />
        </div>
      );
    } else {
      return (<div>{this.props.post.tags}</div>);
    }
  }

  render() {
    if (!this.props.post) {
      return (
        <div>
          <CircularProgress size={80} thickness={7} />
        </div>
      );
    } else {
      return (
        <div className="post-frame">
          <div className="post-buttons">
            <Link to="/" exact>back to index</Link>
            <RaisedButton
              onClick={() => this.props.deletePost(this.props.post._id, this.props.history)}
              label="delete" secondary
            />
          </div>
          <div key={this.props.post._id} className="post-body">
            <Card>
              <CardMedia
                onClick={() => {
                  this.setState({ coverIsEditing: true });
                }}
              >
                {this.renderCover()}
              </CardMedia>
              <textbox
                onClick={() => {
                  this.setState({ titleIsEditing: true });
                }}
              >
                {this.renderTitle()}
              </textbox>
              <CardText
                onClick={() => {
                  this.setState({ contentIsEditing: true });
                }}
              >
                {this.renderContent()}
              </CardText>
              <textbox
                onClick={() => {
                  this.setState({ tagsAreEditing: true });
                }}
              >
                {this.renderTags()}
              </textbox>
            </Card>

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

export default withRouter(
  connect(mapStateToProps, { fetchPost, deletePost, updatePost })(Post),
);
