import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { getUserFromAPI } from '../../services/api_endpoints';
import './login.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getToken = () => {
    const { role, token } = getUserFromAPI(email, password);
    localStorage.setItem('token', JSON.stringify(token));

    if (role === 'administrator') return <Redirect to="/admin/profile" />
    if (role === 'client') return <Redirect to="/client/products" />
  }

  return (
    <div className="form">
      <label htmlFor="Email">Email</label>
      <input
        className="text-box"
        name="Email"
        data-testid="email-input"
        onChange={ (event) => setEmail(event.target.value) }
        type="email"
        required
      />
      <label htmlFor="Senha">Senha</label>
      <input
        className="text-box"
        data-testid="password-input"
        onChange={ (event) => setPassword(event.target.value) }
        name="Senha"
        required
        type="password"
      />
      <button
        className="login-btn"
        type="button"
        disabled={ password.length <= 6 }
        data-testid="signin-btn"
        onClick={ () => getToken(email, password) }
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
