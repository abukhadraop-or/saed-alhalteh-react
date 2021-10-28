import SignInForm from 'components/Forms/SignInForm';
import SignUpForm from 'components/Forms/SignUpForm';
import HomePage from 'components/HomePage/HomePage';
import NavBar from 'components/NavBar/NavBar';
import Post from 'components/Post/Post';
import UserProfile from 'components/UserProfile/UserProfile';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
        <Route path="/" exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
