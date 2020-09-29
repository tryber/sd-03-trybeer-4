import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import MenuBar from '../MenuBar/index';
import { getProductsLocalStorage } from '../../utils/localStorage';
import './styles.css';
import Footer from '../Footer/index';

const mockOrders = [
  {
    orderId: 1,
    date: '01/01',
    total: 109.9,
  },
  {
    orderId: 2,
    date: '02/01',
    total: 114.3,
  },
  {
    orderId: 3,
    date: '05/01',
    total: 49.7,
  },
  {
    orderId: 5,
    date: '16/01',
    total: 19.9,
  },
  {
    orderId: 6,
    date: '16/01',
    total: 199.74,
  },
];

const getOrdersFromAPI = () => mockOrders;

const Orders = () => {
  const quantityOfDigits = 2;
  const [orders, setOrders] = useState(mockOrders);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const { token } = getProductsLocalStorage('user');
    if (!token) setRedirect(true);
    const orderList = getOrdersFromAPI(token);
    setOrders(orderList);
  }, []);

  if (redirect) return <Redirect to="/login" />;
  return (
    <>
      <MenuBar titleName="Cliente - Meus Pedidos" />
      <section className="orders-list">
        {orders.sort().map(({ orderId, date, total }, index) => (
          <Link
            data-testid={ `${index}-order-card-container` }
            key={ orderId }
            className="order-card"
            to={ `orders/${orderId}` }
          >
            <div className="order-info">
              <span className="info-label">Pedido n°:</span>
              <span data-testid={ `${index}-order-number` }>
                { ` ${orderId}` }
              </span>
            </div>
            <div className="order-info">
              <span>Data:</span>
              <span data-testid={ `${index}-order-date` }>
                { date }
              </span>
            </div>
            <div className="order-info">
              <span>Total pago (R$)</span>
              <span data-testid={ `${index}-order-total-value` }>
                { total.toFixed(quantityOfDigits) }
              </span>
            </div>
          </Link>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default Orders;
