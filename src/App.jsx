import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from 'components/NavBar/NavBar';
import SignUpForm from 'components/Forms/SignUpForm';
import SignInForm from 'components/Forms/SignInForm';
import Conduit from 'components/ConduitHomePage/Conduit';
import Post from 'components/Post/Post';
import UserProfile from 'components/UserProfile/UserProfile';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/user" component={UserProfile} />
        <Route path="/posts/" component={Post} />
        <Route path="/signUp" component={SignUpForm} />
        <Route path="/signIn" component={SignInForm} />
        <Route path="/" exact component={Conduit} />
      </Switch>
    </>
  );
}

export default App;
