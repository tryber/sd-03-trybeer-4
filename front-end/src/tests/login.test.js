import React from 'react';
import {
  fireEvent, cleanup, render,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '../App';

describe('Test login page', () => {
  afterEach(() => cleanup());
  test('Login page must have a menu bar with a title `Tente Cerveja`', () => {
    const { getByText, getByAltText } = render(<App />);
    const titlePage = getByText(/Tente Cerveja/i);
    const headerImage = getByAltText('Icone de dois amigos brindando');
    expect(titlePage).toBeInTheDocument();
    expect(headerImage).toBeInTheDocument();
  });

  test('Login button should be enable when e-mail and password are filled', () => {
    const { getByTestId } = render(<App />);
    const loginButton = getByTestId('signin-btn');
    const email = 'user@email.com';
    const password = '12345678';
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    expect(loginButton).toHaveAttribute('disabled');
    act(() => {
      fireEvent.input(emailInput, { target: { value: email } });
      fireEvent.input(passwordInput, { target: { value: password } });
      expect(loginButton).toBeVisible();
    });
  });

  test('Login button should do a request to database and return a json', async () => {
    const { getByTestId } = render(<App />);
    const loginButton = getByTestId('signin-btn');
    const email = 'user@email.com';
    const password = '12345678';
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    expect(loginButton).toHaveAttribute('disabled');
    fireEvent.input(emailInput, { target: { value: email } });
    fireEvent.input(passwordInput, { target: { value: password } });
    expect(loginButton).toBeVisible();
  });
});
