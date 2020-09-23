import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import getUserFromAPI from '../../services/api_endpoints';
import './login.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getUserData = async () => {
    const { data } = await getUserFromAPI(email, password);
    // console.log('O QUE VEM ? POST REQUEST LOGIN', data);
    if (data.token) { localStorage.setItem('user', JSON.stringify(data)); }
    return true;
  };

  return (
    <div className="form">
      <label htmlFor="email">
        Email
        <input
          id="email"
          className="text-box"
          name="email"
          data-testid="email-input"
          onChange={ (event) => setEmail(event.target.value) }
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
          onChange={ (event) => setPassword(event.target.value) }
          name="password"
          required
          type="password"
        />
      </label>
      <button
        className="login-btn"
        type="button"
        data-testid="signin-btn"
        onClick={ () => getUserData(email, password) }
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
