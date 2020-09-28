import React from 'react';
import AdminSideBar from '../AdminSideBar/index';
import './styles.css';

const AdminOrders = () => (
  <div className="admin-orders">
    <AdminSideBar />
    <div className="admin-orders-aside">
      <h1>Pagina de Pedidos do Admin</h1>
    </div>
  </div>
);

export default AdminOrders;
