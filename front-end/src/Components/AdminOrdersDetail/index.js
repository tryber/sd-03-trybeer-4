import React from 'react';
import AdminSideBar from '../AdminSideBar/index';
import './styles.css';

const AdminOrdersDetail = () => (
  <div className="admin-orders">
    <AdminSideBar />
    <div className="admin-orders-aside">
      <h1>Pagina de Detalhes dos Pedidos do Admin</h1>
    </div>
  </div>
);

export default AdminOrdersDetail;
