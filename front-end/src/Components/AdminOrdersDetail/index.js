import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getOrderData } from '../../services/api_endpoints';
import AdminSideBar from '../AdminSideBar/index';
import './styles.css';

const AdminOrdersDetail = ({ id }) => {
  const [saleInfo, setSaleInfo] = useState([]);
  const [saleItems, setSaleItems] = useState([]);
  const { saleId, total, status } = saleInfo;

  const markAsDelivered = () => {
    console.log('Marked!!!');
  }

  useEffect(() => {
    const fetchSale = async () => await getOrderData(id) || [];
    fetchSale().then((data) => {
      setSaleInfo(data.saleInfo);
      setSaleItems(data.saleItems);
    });
  }, [id]);

  return (
    <div className="admin-order-items">
      <AdminSideBar />
      <div>
        <h1>
          Pedido 
          <span data-testid="order-number"> {saleId} - </span>
          <span
            data-testid="order-status"
            className={ `sale-${status}` }
          >
            {status}
          </span>
        </h1>
        <div className="sale-items">
          <ul>
            {saleItems.map(({ productName, quantity, unitPrice }, index) => (
              <li key={ productName }>
                <span data-testid={`${index}-product-qtd`}>{quantity} - </span>
                <span data-testid={`${index}-product-name`}>{productName} </span>
                <span data-testid={`${index}-order-unit-price`}>R${unitPrice}</span>
                <span data-testid={`${index}-product-total-value`}>R${unitPrice * quantity}</span>
              </li>
              ))}
          </ul>
          <h2 data-testid="order-total-value">
            Total: R$
            {total}
          </h2>
        </div>
        <button
          type="button"
          data-testid="mark-as-delivered-btn"
          onClick={markAsDelivered()}
        >
          Marcar como entregue
        </button>
      </div>
    </div>
  );
};

AdminOrdersDetail.propTypes = {
  id: PropTypes.number.isRequired,
  // status: PropTypes.string.isRequired,
};

export default AdminOrdersDetail;
