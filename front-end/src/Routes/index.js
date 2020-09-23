import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { register } from '../pages';
import LoginPage from '../pages/login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ LoginPage } />
      <Route exact path="/login" component={ LoginPage } />
      <Route exact path="/register" component={ register } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
