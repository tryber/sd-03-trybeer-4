import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import MenuBar from '../MenuBar/index';
import validateInput from '../../utils/validate';
import { postNewUserAPI } from '../../services/api_endpoints';
import './styles.css';

const beers = require('../../images/beers.png');

const RegisterUser = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    seller: false,
  });
  const [error, setError] = useState({});
  const [userCreated, setRedirect] = useState({ redirect: false, role: '' });
  const {
    email,
    password,
    name,
    seller,
  } = form;
  const { redirect, role } = userCreated;

  const handleInput = (e) => {
    if (e === 'seller') return setForm({ ...form, seller: !seller });
    const { name: userName, value } = e.target;
    return validateInput(userName, value)
      ? setForm({ ...form, [userName]: value })
      : setForm({ ...form, [userName]: '' });
  };

  const createNewUser = async () => {
    const unprocessableEntityCode = 422;
    const { message, status, user } = await postNewUserAPI(name, email, password, seller);
    if (status === unprocessableEntityCode) return setError({ message });
    if (user) return setRedirect({ redirect: true, role: user.role });
    return null;
  };
  if (redirect) {
    return (role === 'client'
      ? <Redirect to="/products" />
      : <Redirect to="/admin/orders" />);
  }
  return (
    <>
      <MenuBar titleName="TryBeer" />
      <section className="register-container default-color shadow">
        <img src={ beers } alt="Icone de duas cervejas" width="100px" />
        {error.message && <p>{error.message}</p>}
        <form>
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
            Password
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
            Quero Vender
            <input
              type="checkbox"
              name="seller"
              id="userSeller"
              data-testid="signup-seller"
              onChange={ () => handleInput('seller') }
            />
          </label>
          <br />
          <button
            onClick={ () => createNewUser() }
            className="confirm-btn"
            disabled={ email === '' || password === '' || name === '' }
            type="button"
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
