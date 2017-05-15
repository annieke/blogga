import React from 'react';
import { BrowserRouter as NavLink } from 'react-router-dom';
import { AppBar, RaisedButton, FlatButton } from 'material-ui';

const NavBar = (props) => {
  return (
    <AppBar
      title={<NavLink to="/" exact className="main-title">the potato diary</NavLink>}
      iconElementLeft={<span />}
      iconElementRight={
        <div>
          <NavLink to="/posts/new">
            <RaisedButton label="new post" style={{ margin: 5 }} />
          </NavLink>
          <FlatButton label="sign out" style={{ margin: 5 }} />
        </div>
      }
    />
  );
};

export default NavBar;
