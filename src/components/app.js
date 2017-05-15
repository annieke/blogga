import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './navbar';
import Posts from './posts';
import NewPost from './newpost';
import Post from './post';
import SignIn from './signin';
import SignUp from './signup';
import requireAuth from './requireAuth';

const App = (props) => {
  return (
    <MuiThemeProvider>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/posts/new" component={requireAuth(NewPost)} />
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
