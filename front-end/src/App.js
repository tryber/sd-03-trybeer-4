import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/login';

import './App.css';

function App() {
  return (
    <center>
      {/* <Provider> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={ LoginPage } />
        </Switch>
      </BrowserRouter>
      {/* </Provider> */}
    </center>
  );
}

export default App;
