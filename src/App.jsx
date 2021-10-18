import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import NavBar from 'components/NavBar/NavBar';
import SignUpForm from 'components/Forms/SignUpForm';
import SignInForm from 'components/Forms/SignInForm';
import Conduit from 'components/ConduitHomePage/Conduit';
import Post from 'components/Post/Post';
import Footer from 'components/Footer/Footer';
import UserProfile from 'components/UserProfile/UserProfile';
import ContentContainer from 'app.style';
import './App.css';

function App() {
  return (
    <Fragment>
      <ContentContainer>
        <NavBar />
        <Switch>
          <Route path="/user" component={UserProfile} />
          <Route path="/posts/" component={Post} />
          <Route path="/signUp" component={SignUpForm} />
          <Route path="/signIn" component={SignInForm} />
          <Route path="/" exact component={Conduit} />
        </Switch>
      </ContentContainer>
      <Footer />
    </Fragment>
  );
}

export default App;
