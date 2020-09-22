import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import { getUserFromAPI } from "../../services/api_endpoints";
import './login.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValidFields = () => (
    password.length > 6 &&
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)
  );

  const addToStorage = (userToken) => {
    localStorage.setItem('token', JSON.stringify(userToken));
  };

  const getUserInfo = () => {
    const userRole = await getUserFromAPI(email, password);
    if (userRole === 'administrator') (<Redirect to="/admin/profile" />)
    if (userRole === 'client') (<Redirect to="/client/products" />)
  }

  return (
    <div className="form">
      <label for="Email">Email</label>
      <input
        className="text-box"
        name="Email"
        data-testid="email-input"
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <label for="Senha">Senha</label>
      <input
        className="text-box"
        data-testid="password-input"
        onChange={(event) => setPassword(event.target.value)}
        name="Senha"
        required
        type="password"
      />
      <button
        className="login-btn"
        type="button"
        disabled={!isValidFields()}
        data-testid="signin-btn"
        onClick={() => getUserInfo(email, password)}
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
