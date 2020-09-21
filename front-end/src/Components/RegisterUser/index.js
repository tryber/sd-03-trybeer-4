import React, { useState } from 'react';
import './styles.css';

const RegisterUser = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const { email, password, name } = form;

  const handleName = ({ target: { value } }) => {
    const nameLength = 12;
    const input = value.length > nameLength ? value : '';
    return setForm((currentState) => ({ ...currentState, name: input }));
  };

  const handleEmail = ({ target: { email: value } }) => {
    const regExr = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const input = regExr.test(value) ? value : '';
    return setForm((currentState) => ({ ...currentState, email: input }));
  };

  const handlePassword = ({ target: { value } }) => {
    const passwordLength = 6;
    const input = value.length > passwordLength ? value : '';
    return setForm((currentState) => ({ ...currentState, password: input }));
  };

  return (
    <section className="register-contrainer">
      <form action="/register" method="POST">
        <label htmlFor="userName">
          Nome
          <input 
            onChange={ (e) => handleName(e) }
            type="text" name="name" id="userName" data-testid="signup-name"
            />
        </label>
        <br />
        <label htmlFor="userEmail">
          Email
          <input
            onChange={ (e) => handleEmail(e) }
            type="email" name="email" id="userEmail" data-testid="signup-email"
          />
        </label>
        <br />
        <label htmlFor="userPassword">
          Senha
          <input
            onChange={ (e) => handlePassword(e) }
            type="password" name="password" id="userPassword"
            minLength="6" data-testid="signup-password"
          />
        </label>
        <br />
        <label htmlFor="userSeller">
          Quero vender
          <input type="checkbox" name="seller" id="userSeller" data-testid="signup-seller"/>
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
