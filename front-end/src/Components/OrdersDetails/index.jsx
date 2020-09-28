import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getOrdersFromAPI } from '../../services/api_endpoints';
import OrderCard from '../OrderCard';
import MenuBar from '../MenuBar';

const OrdersDetails = () => {
  const [orders, setOrders] = useState([]);
  const { id } = useParams();
  const { token } = JSON.parse(localStorage.getItem('user')) || '';

  useEffect(() => {
    const getData = async (id) => {
      setOrders(await getOrdersFromAPI(id))
    }
    getData(id);
  }, [id]);

  if (!token) return <Redirect to="/login"/>

  return (
    <div>
      <MenuBar titleName="CLiente - Detalhes de Pedido" />
      {orders && orders.length
        ? orders.map((order) => <OrderCard order={order}/>)
        : <h2>Loading...</h2>}
    </div>
  );
};

export default OrdersDetails;
