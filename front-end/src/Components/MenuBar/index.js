import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.css';

const MenuBar = ({ titleName }) => {
  const [change, setChange] = useState(false);

  return (
    <section>
      <div className="menu">
        <button
          data-testid="top-hamburguer"
          type="button"
          className={ change ? 'change menu-bar menu-btn' : 'menu-bar menu-btn' }
          onClick={ () => setChange(!change) }
        >
          <div className="bar1 bar" />
          <div className="bar2 bar" />
          <div className="bar3 bar" />
        </button>
        <nav className={ change ? 'side-menu-container change' : 'side-menu-container' }>
          <ul>
            <li><Link data-testid="side-menu-item-products" to="/products">Produtos</Link></li>
            <li><Link data-testid="side-menu-item-my-orders" to="/orders">Meus pedidos</Link></li>
            <li><Link data-testid="side-menu-item-my-profile" to="/profile">Meu perfil</Link></li>
            <li><Link data-testid="side-menu-item-logout" to="/login">Sair</Link></li>
          </ul>
        </nav>
      </div>
      <div className={ change ? 'menu-bg change-bg' : 'menu-bg' }>
        <h2 data-testid="top-title" className="title">{ titleName }</h2>
      </div>
    </section>
  );
};

MenuBar.propTypes = {
  titleName: PropTypes.string.isRequired,
};

export default MenuBar;
