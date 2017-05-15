import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { TextField, RaisedButton } from 'material-ui';
import { signupUser } from '../actions';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div className="new-post-page">
        <h1>Sign Up</h1>
        <div className="inputs">
          <TextField
            fullWidth
            floatingLabelText="username"
            onChange={this.onUsernameChange} value={this.state.username}
          />
          <TextField
            fullWidth
            floatingLabelText="email"
            onChange={this.onEmailChange} value={this.state.email}
          />
          <TextField
            fullWidth
            floatingLabelText="password"
            type="password"
            onChange={this.onPasswordChange} value={this.state.password}
          />
          <div className="new-post-buttons">
            <RaisedButton
              onClick={() => this.props.signupUser(this.state, this.props.history)}
              label="Sign Up" className="submit-button" primary
            />
            <Link to="/" exact><RaisedButton label="cancel" secondary /></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { signupUser })(SignUp));
