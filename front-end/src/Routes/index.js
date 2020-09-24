import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { register, login, clientProfile } from '../pages';
import AdminOrdersPage from '../Components/AdminOrders';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ login } />
      <Route exact path="/login" component={ login } />
      <Route exact path="/register" component={ register } />
      <Route exact path="/profile" component={ clientProfile } />
      <Route exact path="/admin/orders" component={ AdminOrdersPage } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
