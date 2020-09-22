import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// const { register } = require('../pages/index');
import { register } from '../pages';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/register" component={ register } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
