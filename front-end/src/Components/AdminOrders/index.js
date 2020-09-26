import React, { useState, useEffect } from 'react';
import MenuAdmin from '../MenuAdmin';
import OrderCard from '../OrderCard';
import { getOrderList } from '../../services/api_endpoints';

const AdminOrdersPage = () => {
  const { token } = JSON.parse(localStorage.getItem('user'));
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => { return await getOrderList(token) || [] };
    fetchOrders().then((orders) => setProductList(orders));
  }, [token]);

  return (
    <>
      <MenuAdmin />
      <section>
      {productList.map(({ id, total_price, delivery_address, delivery_number, status }) => (
        <OrderCard
          id={id}
          total_price={total_price}
          delivery_address={delivery_address}
          delivery_number={delivery_number}
          status={status}
        />
      )) }
      </section>
    </>
  );
};

export default AdminOrdersPage;
