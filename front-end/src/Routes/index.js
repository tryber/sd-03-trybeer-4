import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  register,
  login,
  clientProfile,
  products,
  orders,
  adminProfile,
  adminOrders,
  adminOrdersDetail,
} from '../pages';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ login } />
      <Route exact path="/login" component={ login } />
      <Route exact path="/register" component={ register } />
      <Route exact path="/profile" component={ clientProfile } />
      <Route exact path="/products" component={ products } />
      <Route exact path="/orders" component={ orders } />
      <Route exact path="/admin/profile" component={ adminProfile } />
      <Route exact path="/admin/orders" component={ adminOrders } />
      <Route exact path="/admin/orders/:id" component={ adminOrdersDetail } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
