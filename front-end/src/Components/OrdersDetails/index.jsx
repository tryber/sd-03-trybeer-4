import React from 'react';
import { Redirect } from 'react-router-dom';
import OrderCard from '../OrderCard';
import MenuBar from '../MenuBar';

const OrdersDetails = (orders = []) => {
  const { name, email } = JSON.parse(localStorage.getItem('user')) || '';
  if (!name) return <Redirect to="/login"/>
  return (
    <div>
      <MenuBar titleName="CLiente - Detalhes de Pedido" />
      {orders.map((order) => <OrderCard order={order}/>)}
    </div>
  );
};

export default OrdersDetails;
