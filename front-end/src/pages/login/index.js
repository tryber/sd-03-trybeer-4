import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { getUserFromAPI } from '../../services/api_endpoints';
import './login.css';

const minPasswordSize = 6;

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getUserData = () => {
    try {
      const { name, role, token } = getUserFromAPI(email, password);
      localStorage.setItem('token', token);
      if (role === 'administrator') return <Redirect to="/admin/profile" />;
      if (role === 'client') return <Redirect to="/client/products" />;
      console.log(`Hello, ${name}`);
    }
    catch (error) {
      return error;
    }
  };

  return (
    <div className="form">
      <label htmlFor="Email">Email</label>
      <input
        className="text-box"
        id="Email"
        data-testid="email-input"
        onChange={ (event) => setEmail(event.target.value) }
        type="email"
        required
      />
      <label htmlFor="Senha">Senha</label>
      <input
        className="text-box"
        id="Senha"
        data-testid="password-input"
        onChange={ (event) => setPassword(event.target.value) }
        type="password"
        required
      />
      <button
        className="login-btn"
        type="button"
        disabled={ password.length <= minPasswordSize }
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
