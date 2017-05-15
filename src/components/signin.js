import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { TextField, RaisedButton } from 'material-ui';
import { signinUser } from '../actions';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
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
        <h1>Sign In</h1>
        <div className="inputs">
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
              onClick={() => this.props.signinUser(this.state, this.props.history)}
              label="Sign In" className="submit-button" primary
            />
            <Link to="/" exact><RaisedButton label="cancel" secondary /></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { signinUser })(SignIn));
