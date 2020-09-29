import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AdminOrdersDetail } from '../Components';
import AdminOrdersPage from '../Components/AdminOrders';
import BeerProvider from '../Context/BeerContext/BeerProvider';
import {
  register,
  login,
  clientProfile,
  products,
  orders,
  adminProfile,
  adminOrders,
  // adminOrdersDetail,
} from '../pages';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ login } />
      <Route exact path="/login" component={ login } />
      <Route exact path="/register" component={ register } />
      <Route exact path="/profile" component={ clientProfile } />
      <Route exact path="/admin/orders" component={ AdminOrdersPage } />
      <Route exact path="/products" component={ products } />
      <Route exact path="/orders" component={ orders } />
      <BeerProvider>
        <Route exact path="/products" component={ products } />
        <Route exact path="/orders" component={ orders } />
        <Route exact path="/admin/orders" component={ adminOrders } />
        <Route
          exact path="/admin/orders/:id"
          render={({ match }) =>
            <AdminOrdersDetail
              id={Number(match.params.id)}
              total={(match.params.totalPrice)}
              status={(match.params.status)}
            />}
        />
      </BeerProvider>
      <Route exact path="/admin/profile" component={ adminProfile } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
