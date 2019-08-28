import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  SignupPage,
  LandingPage,
  UserHomepage,
  LoginPage,
  OpenAccountPage
} from '../pages';

export default () => (
  <Router>
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/signup' component={SignupPage} />
      <Route exact path='/home' component={UserHomepage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/account' component={OpenAccountPage} />
    </Switch>
  </Router>
);
