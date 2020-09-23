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
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="form">
      <form action="http://localhost:3001/login" method="POST">
        <label htmlFor="userEmail">Email
          <input
            className="text-box"
            id="userEmail"
            data-testid="email-input"
            onChange={ (event) => setEmail(event.target.value) }
            type="email"
            required
          />
        </label>
        <label htmlFor="userPass">Senha
          <input
            className="text-box"
            id="userPass"
            data-testid="password-input"
            onChange={ (event) => setPassword(event.target.value) }
            type="password"
            required
          />
        </label>
        <button
          className="login-btn"
          type="submit"
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
      </form>
    </div>
  );
}

export default LoginPage;
