import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

class RequireAuth extends Component {
  componentWillMount() {

  }

  componentWillUpdate() {

  }

  render() {
    return (<div />);
  }

}

const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default withRouter(connect(mapStateToProps, null)(RequireAuth));
