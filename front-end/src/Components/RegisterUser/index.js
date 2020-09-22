import React, { useState } from 'react';
import './styles.css';

const beers = require('../../images/beers.png');

const RegisterUser = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const { email, password, name } = form;

  const handleInput = (e) => {
    const nameLength = 12;
    const passwordLength = 6;
    const regExrEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const { name: userName, value } = e.target;
    let input = '';
    if (userName === 'name') {
      input = value.length >= nameLength ? value : '';
    }
    if (userName === 'email') {
      input = regExrEmail.test(value) ? value : '';
    }
    if (userName === 'password') {
      input = value.length >= passwordLength ? value : '';
    }
    return setForm({ ...form, [userName]: input });
  };

  return (
    <section className="register-container default-color shadow">
      <img src={ beers } alt="Icone de duas cervejas" width="100px" />
      <form action="http://localhost:3001/register" method="POST">
        <label htmlFor="userName">
          Nome
          <input
            onChange={ (e) => handleInput(e) }
            type="text"
            name="name"
            id="userName"
            data-testid="signup-name"
          />
        </label>
        <br />
        <label htmlFor="userEmail">
          Email
          <input
            onChange={ (e) => handleInput(e) }
            type="email"
            name="email"
            id="userEmail"
            data-testid="signup-email"
          />
        </label>
        <br />
        <label htmlFor="userPassword">
          Senha
          <input
            onChange={ (e) => handleInput(e) }
            type="password"
            name="password"
            id="userPassword"
            minLength="6"
            data-testid="signup-password"
          />
        </label>
        <br />
        <label htmlFor="userSeller">
          Quero vender
          <input type="checkbox" name="seller" id="userSeller" data-testid="signup-seller" />
        </label>
        <br />
        <button
          disabled={ email === '' || password === '' || name === '' }
          type="submit"
          data-testid="signup-btn"
        >
          Cadastrar
        </button>
      </form>
    </section>
  );
};

export default RegisterUser;
