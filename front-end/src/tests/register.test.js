import React from 'react';
import {
  cleanup, fireEvent,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithRouter from './testUtilities/renderWithRouter';
import Register from '../pages/register';

describe('Test register page', () => {
  afterEach(() => cleanup());
  test('Register page must have a menu bar with a title `TryBeer`', () => {
    const { getByText, getByAltText } = renderWithRouter(<Register />, { route: '/register' });
    const titlePage = getByText(/TryBeer/i);
    const headerImage = getByAltText('Icone de duas pessoas tomando cervejas');
    expect(titlePage).toBeInTheDocument();
    expect(headerImage).toBeInTheDocument();
  });

  test('Register button should be enable when e-mail and password are filled', () => {
    const { getByTestId } = renderWithRouter(<Register />, { route: '/register' });

    const loginButton = getByTestId('signup-btn');
    const name = 'test username for new register';
    const email = 'user@email.com';
    const password = '12345678';
    const nameInput = getByTestId('signup-name');
    const emailInput = getByTestId('signup-email');
    const passwordInput = getByTestId('signup-password');
    expect(loginButton).toHaveAttribute('disabled');
    act(() => {
      fireEvent.input(nameInput, { target: { value: name } });
      fireEvent.input(emailInput, { target: { value: email } });
      fireEvent.input(passwordInput, { target: { value: password } });
      expect(loginButton).toBeVisible();
    });
  });
});
