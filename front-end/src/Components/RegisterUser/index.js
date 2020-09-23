import React, { useState } from 'react';
import MenuBar from '../MenuBar/index';
import validateInput from '../../utils/validate';
import './styles.css';

const beers = require('../../images/beers.png');

const RegisterUser = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const { email, password, name } = form;

  const handleInput = (e) => {
    const { name: userName, value } = e.target;
    return validateInput(userName, value)
      ? setForm({ ...form, [userName]: value })
      : setForm({ ...form, [userName]: '' });
  };

  return (
    <>
      <MenuBar titleName="TryBeer" />
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
            className="confirm-btn"
            disabled={ email === '' || password === '' || name === '' }
            type="submit"
            data-testid="signup-btn"
          >
            Cadastrar
          </button>
        </form>
      </section>
    </>
  );
};

export default RegisterUser;
