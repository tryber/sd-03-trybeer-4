import React, { useState, useEffect } from 'react';
import { postUpdateName } from '../../services/api_endpoints';
import MenuBar from '../MenuBar/index';
import './styles.css';

const ClientProfile = () => {
  const { name, email } = JSON.parse(localStorage.getItem('user'));
  const [userEmail] = useState(email);
  const [newName, setNewName] = useState(name);
  const [error, setError] = useState(null);

  const handleChangeName = async () => {
    const { data } = await postUpdateName(newName, email);
    if (data.token) { localStorage.setItem('user', JSON.stringify(data)); setError(data.message); }
    return setError(data.message);
  };

  useEffect(() => { }, [setNewName]);

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
          onChange={ (e) => setNewName(e.target.value) && setError(null) }
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
      { error && <p>{error}</p> }
    </div>
  );
};

export default ClientProfile;
