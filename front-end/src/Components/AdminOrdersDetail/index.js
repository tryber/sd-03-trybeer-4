import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';
import { getItemsFromOrder } from '../../services/api_endpoints';
import AdminSideBar from '../AdminSideBar/index';
import './styles.css';

const AdminOrdersDetail = (props) => {
  const [saleItems, setSaleItems] = useState([]);
  const { saleProps } = useLocation();
  const { id, totalPrice, status } = saleProps;
  console.log(props);

  useEffect(() => {
    const fetchSale = async () => await getItemsFromOrder(id) || [];

    fetchSale().then((items) => setSaleItems(items));
  }, [id]);

  return (
    <div className="admin-order-items">
      <AdminSideBar />
      <div>
        <h1>{`Pedido ${id} - ${status}`}</h1>
        <ul>
          {saleItems.map(({ productId, quantity }) => (
            <li key={ productId }>{`${quantity} - ${productId}`}</li>))}
        </ul>
        <h2 data-testid="order-total-value">
          Total:
          {totalPrice}
        </h2>
        <button type="button" data-testid="mark-as-delivered-btn">Marcar como entregue</button>
      </div>
    </div>
  );
};

AdminOrdersDetail.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};

export default AdminOrdersDetail;
