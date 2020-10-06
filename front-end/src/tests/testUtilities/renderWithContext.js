import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import BeerProvider from '../../Context/BeerContext/BeerProvider';

const renderWithContext = (children, route = '/', path = '/') => {
  const initialEntries = [route];
  const history = createMemoryHistory({ initialEntries });
  return {
    ...render(
      <Router history={ history }>
        <Route path={ path }>
          <BeerProvider>
            {children}
          </BeerProvider>
        </Route>
      </Router>,
    ),
    history,
  };
};

export default renderWithContext;
