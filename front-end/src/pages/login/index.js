import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function LoginPage() {

  return (
    <div className="form">
      <label htmlFor="email">
        Email
        <input
          id="email"
          className="text-box"
          name="email"
          data-testid="email-input"
          type="email"
          required
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          id="password"
          className="text-box"
          data-testid="password-input"
          name="password"
          required
          type="password"
        />
      </label>
      <button
        className="login-btn"
        type="button"
        data-testid="signin-btn"
      >
        Entrar
      </button>
      <Link to="./register">
        <button
          className="register-btn"
          type="button"
          data-testid="no-account-btn"
        >
          Ainda não tenho conta
        </button>
      </Link>
    </div>
  );
}

export default LoginPage;
