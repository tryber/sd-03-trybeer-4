import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getOrderData, markOrderAsDelivered } from '../../services/api_endpoints';
import AdminSideBar from '../AdminSideBar/index';
import './styles.css';

const AdminOrdersDetail = ({ id }) => {
  const [saleInfo, setSaleInfo] = useState({ total: 0 });
  const [saleItems, setSaleItems] = useState([]);
  const [saleStatus, setSaleStatus] = useState();
  const { saleId, total } = saleInfo;

  const markAsDelivered = async () => {
    setSaleStatus('Entregue');
    await markOrderAsDelivered(saleId);
  };

  useEffect(() => {
    const fetchSale = async () => await getOrderData(id) || [];
    fetchSale().then((data) => {
      setSaleInfo(data.saleInfo);
      setSaleItems(data.saleItems);
      setSaleStatus(data.saleInfo.status);
    });
  }, [id]);

  return (
    <div className="admin-order-items">
      <AdminSideBar />
      <div>
        <h1>
          <span data-testid="order-number">
            {`Pedido ${saleId}`}
          </span>
          <span
            data-testid="order-status"
            className={ ` - sale-${saleStatus}` }
          >
            {saleStatus}
          </span>
        </h1>
        <div className="sale-items">
          <ul>
            {saleItems.map(({ productName, quantity, unitPrice }, index) => (
              <li key={ productName }>
                <span data-testid={ `${index}-product-qtd` }>
                  {`${quantity} - `}
                </span>
                <span data-testid={ `${index}-product-name` }>
                  {`${productName} - `}
                </span>
                <span data-testid={ `${index}-product-total-value` }>
                  {`R$ ${(unitPrice * quantity).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`}
                </span>
                <span
                  className="product-unit-price"
                  data-testid={ `${index}-order-unit-price` }
                >
                  {`(R$ ${(unitPrice).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })})`}
                  )
                </span>
              </li>
            ))}
          </ul>
          <h2 data-testid="order-total-value">
            {`Total: R$ ${total.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}
          </h2>
        </div>
        <button
          type="button"
          className={ `sale-${saleStatus}-btn` }
          data-testid="mark-as-delivered-btn"
          onClick={ () => markAsDelivered() }
        >
          Marcar como entregue
        </button>
      </div>
    </div>
  );
};

AdminOrdersDetail.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AdminOrdersDetail;
