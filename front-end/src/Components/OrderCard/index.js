import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const OrderCard = ({
  id,
  totalPrice,
  deliveryNumber,
  deliveryAddress,
  status
}) => {
  return (
    <div className="order">
      <div className="order-info">
        <h2 data-testid={ `${id}-order-number` }>
          {`Pedido ${id}`}
        </h2>
        <h3 data-testid={ `${id}-order-address` }>
          {`${deliveryAddress}, ${deliveryNumber}`}
        </h3>
      </div>
      <div className="order-footer">
        <span
          data-testid={ `${id}-order-total-value` }
          className="order-total"
        >
          R$
          { `${totalPrice.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
          })}` }
        </span>
        <span
          data-testid={ `${id}-order-status` }
          className={ status === 'Entregue' ? 'order-delivered' : 'order-pending' }
        >
          {status}
        </span>
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  deliveryNumber: PropTypes.number.isRequired,
  deliveryAddress: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default OrderCard;
