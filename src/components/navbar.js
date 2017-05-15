import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { AppBar, RaisedButton, FlatButton } from 'material-ui';
import { signoutUser } from '../actions';

class NavBar extends Component {
  renderAppBar() {
    if (this.props.authenticated) {
      return (
        <AppBar
          title={<NavLink to="/" exact className="main-title">the potato diary</NavLink>}
          iconElementLeft={<span />}
          iconElementRight={
            <div>
              <NavLink to="/posts/new">
                <RaisedButton label="new post" style={{ margin: 5 }} />
              </NavLink>
              <FlatButton label="sign out" style={{ margin: 5 }}
                onClick={() => this.props.signoutUser(this.props.history)}
              />
            </div>
          }
        />
      );
    } else {
      return (
        <AppBar
          title={<NavLink to="/" exact className="main-title">the potato diary</NavLink>}
          iconElementLeft={<span />}
          iconElementRight={
            <div>
              <NavLink to="/signin">
                <RaisedButton label="sign in" style={{ margin: 5 }} />
              </NavLink>
              <NavLink to="/signup">
                <FlatButton label="sign up" style={{ margin: 5 }} />
              </NavLink>
            </div>
          }
        />
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderAppBar()}
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated,
  }
);


export default withRouter(connect(mapStateToProps, { signoutUser })(NavBar));
