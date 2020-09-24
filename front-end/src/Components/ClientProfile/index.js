import React, { useState, useEffect } from 'react';
import { postUpdateName } from '../../services/api_endpoints';
import { Redirect } from 'react-router-dom';
import MenuBar from '../MenuBar/index';
import './styles.css';

const ClientProfile = () => {
  const { name, email } = JSON.parse(localStorage.getItem('user'));
  const [userEmail] = useState(email);
  const [newName, setNewName] = useState(name);
  const [message, setMessage] = useState(null);

  const handleChangeName = async () => {
    const { data } = await postUpdateName(newName, email);
    if (data.token) { localStorage.setItem('user', JSON.stringify(data)); setMessage(data.message); }
    return setMessage(data.message);
  };

  useEffect(() => { }, [setNewName]);

  if (!name || !email) return <Redirect to="/login" />;

  return (
    <div>
      <MenuBar titleName="Meu perfil" />
      <label htmlFor="name">
        Nome
        <input
          id="name"
          name="name"
          data-testid="profile-name-input"
          type="email"
          required
          onChange={ (e) => setNewName(e.target.value) && setMessage(null) }
          value={ newName }
        />
      </label>
      <br />
      <label htmlFor="email">
        Email
        <input
          id="email"
          name="email"
          data-testid="profile-email-input"
          type="email"
          required
          readOnly
          value={ userEmail }
        />
      </label>
      <br />
      <button
        className="login-btn"
        type="button"
        data-testid="profile-save-btn"
        disabled={ name === newName }
        onClick={ () => handleChangeName(name, email) }
      >
        Salvar
      </button>
      { message && <p>{message}</p> }
    </div>
  );
};

export default ClientProfile;
