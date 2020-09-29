import React, { useState, useEffect } from 'react';
import { getItemsFromOrder } from '../../services/api_endpoints';
import AdminSideBar from '../AdminSideBar/index';
import './styles.css';

const AdminOrdersDetail = ({ id, status }) => {
  const [saleItems, setSaleItems] = useState([]);

  useEffect(() => {
    const fetchSale = async () => await getItemsFromOrder(id) || [];

    fetchSale().then((items) => setSaleItems(items));
  }, [id]);

  return (
    <div className="admin-order-items">
      <AdminSideBar />
      <div >
      <h1>Pedido {id} - {status}</h1>
        <ul>
          {saleItems.map(({productId, quantity}) =>
            (<li key={productId}>{`${quantity} - ${productId}`}</li>)
          )}
        </ul>
      <button>Marcar como entregue</button>
      </div>
    </div>
  )
};

export default AdminOrdersDetail;
