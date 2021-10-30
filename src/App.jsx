import SignInForm from 'components/Forms/SignInForm';
import SignUpForm from 'components/Forms/SignUpForm';
import HomePage from 'components/HomePage';
import NavBar from 'components/NavBar';
import NotFound from 'components/NotFound';
import Post from 'components/Post';
import UserProfile from 'components/UserProfile';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import GlobalStyle from 'styles/global-style';

/**
 * The entry point for the application.
 *
 * @return {JSX.Element} App component.
 */
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route path="/user" component={UserProfile} />
        <Route path="/posts/" component={Post} />
        <Route path="/signUp" component={SignUpForm} />
        <Route path="/signIn" component={SignInForm} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" exact component={HomePage} />
        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
