import React from 'react';
import './style.css';

const OrderCard = ({ id, total_price, delivery_number, delivery_address, status }) => {

  return (
    <div className="order">
      <div className="order-info">
        <h2 data-testid={ `${id}-order-number`}>Pedido {id}</h2>
        <h3 data-testid={ `${id}-order-address`}>{delivery_address}, {delivery_number}</h3>
      </div>
      <div className="order-footer">
        <span
          data-testid={ `${id}-order-total-value` }
          className="order-total"
        >
          R$
          { `${total_price.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
          })}` }
        </span>
        <span
          data-testid={ `${id}-order-status` } 
          className={ status === 'Entregue' ? 'order-delivered' : 'order-pending' }>
            {status}
        </span>
      </div>
    </div>
  );
};

export default OrderCard;
