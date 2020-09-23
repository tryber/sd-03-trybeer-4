import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { register, login } from '../pages';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ login } />
      <Route exact path="/login" component={ login } />
      <Route exact path="/register" component={ register } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
