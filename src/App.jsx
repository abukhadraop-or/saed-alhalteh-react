import Conduit from 'components/ConduitHomePage/Conduit';
import SignInForm from 'components/Forms/SignInForm';
import SignUpForm from 'components/Forms/SignUpForm';
import NavBar from 'components/NavBar/NavBar';
import Post from 'components/Post/Post';
import UserProfile from 'components/UserProfile/UserProfile';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from 'styles/global-style';

/**
 * Component shows the Nav-bar and Routes for our applications.
 *
 * @return {JSX.Element} App component.
 */
function App() {
  return (
    <>
      <GlobalStyle />
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
