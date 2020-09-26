import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const MenuAdmin = () => {
  return (
    <section>
      <div className="menu">
        <h2 data-testid="top-title" className="title">TryBeer</h2>
        <nav className="admin-side-menu-container">
          <ul>
            <li><Link data-testid="side-menu-item-orders" to="admin/orders">Pedidos</Link></li>
            <li><Link data-testid="side-menu-item-profile" to="admin/profile">Perfil</Link></li>
            <li><Link data-testid="side-menu-item-logout" to="/">Sair</Link></li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default MenuAdmin;
