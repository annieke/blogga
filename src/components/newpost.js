import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>create a new post</div>
        <div className="inputs">
          <TextField floatingLabelText="title" />
          <TextField floatingLabelText="tags" />
          <TextField
            floatingLabelText="content"
            multiLine
            rows={4}
          />
          <TextField floatingLabelText="cover_url" />
        </div>
      </div>
    );
  }
}

export default NewPost;
