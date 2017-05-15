import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, RaisedButton, FlatButton } from 'material-ui';
// import NavBar from './navbar';
import Posts from './posts';
import NewPost from './newpost';
import Post from './post';
import SignIn from './signin';
import SignUp from './signup';

const Nav = (props) => {
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

const App = (props) => {
  return (
    <MuiThemeProvider>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/posts/new" component={NewPost} />
            <Route exact path="/post/:postID" component={Post} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route render={() => (<div>post not found </div>)} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
