import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from 'components/NavBar/NavBar';
import SignUpForm from 'components/Forms/SignUpForm';
import SignInForm from 'components/Forms/SignInForm';
import Conduit from 'components/ConduitHomePage/Conduit';
import Post from 'components/Post/Post';
import UserProfile from 'components/UserProfile/UserProfile';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family:'Titillium Web', sans-serif;
    margin: 0;
  }
`;

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
