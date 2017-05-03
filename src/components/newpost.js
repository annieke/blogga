import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { TextField, RaisedButton } from 'material-ui';
import { createPost } from '../actions';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tags: '',
      content: '',
      cover_url: '',
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onCoverURLChange = this.onCoverURLChange.bind(this);
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

  onCoverURLChange(event) {
    this.setState({ cover_url: event.target.value });
  }

  render() {
    return (
      <div className="new-post-page">
        <div>create a new post</div>
        <div className="inputs">
          <TextField
            floatingLabelText="title"
            onChange={this.onTitleChange} value={this.state.title}
          />
          <TextField
            floatingLabelText="tags"
            onChange={this.onTagsChange} value={this.state.tags}
          />
          <TextField
            floatingLabelText="content"
            multiLine
            rows={4}
            onChange={this.onContentChange} value={this.state.content}
          />
          <TextField
            floatingLabelText="cover_url"
            onChange={this.onCoverURLChange} value={this.state.cover_url}
          />
          <div>
            <RaisedButton
              onClick={() => this.props.createPost(this.state, this.props.history)}
              label="submit" primary
            />
            <Link to="/" exact><RaisedButton label="cancel" secondary /></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { createPost })(NewPost));
