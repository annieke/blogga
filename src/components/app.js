import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Posts from './posts';
import NewPost from './newpost';
import Post from './post';

const NavBar = (props) => {
  return (
    <AppBar
      iconElementLeft={<NavLink to="/" exact>the potato diary</NavLink>}
      iconElementRight={<NavLink to="/posts/new">new post</NavLink>}
    />
  );
};

const App = () => {
  return (
    <MuiThemeProvider>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/posts/new" component={NewPost} />
            <Route exact path="/post/:postID" component={Post} />
            <Route render={() => (<div>post not found </div>)} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
