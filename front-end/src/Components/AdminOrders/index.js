import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getOrderList } from '../../services/api_endpoints';
import AdminSideBar from '../AdminSideBar/index';
import OrderCard from '../OrderCard';
import './styles.css';

const AdminOrdersPage = () => {
  const { token } = JSON.parse(localStorage.getItem('user'));
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => await getOrderList(token) || [];

    fetchOrders().then((orders) => setProductList(orders));
  }, [token]);

  return (
    <div className="admin-orders">
      <AdminSideBar />
      <section className="admin-orders-aside">
        {productList.map(({
          id,
          totalPrice,
          deliveryAddress,
          deliveryNumber,
          status,
        }, index) => (
          <Link
            key={ id }
            to={ `/admin/orders/${id}` }
          >
            <OrderCard
              id={ id }
              totalPrice={ totalPrice }
              deliveryAddress={ deliveryAddress }
              deliveryNumber={ deliveryNumber }
              status={ status }
              dtttId={ index }
              // Data-test-ids devem iniciar em zero
            />
          </Link>
        )) }
      </section>
    </div>
  );
};

export default AdminOrdersPage;
