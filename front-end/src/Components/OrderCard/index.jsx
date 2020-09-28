import React from 'react';

const OrderCard = (order) => {
  const { orderId, date, products = [], total } = order;
  return (
    <>
      <h3>{`Pedido ${orderId}`}</h3>
      <h3>{`Data: ${date}`}</h3>
      {products.map((product) => (
        <>
          <h4>{product.qty}</h4>
          <h4>{product.name}</h4>
          <h4>{product.price}</h4>
        </>
      ))}
      <h3>{`Total: R$${total}`}</h3>
    </>
  );
}

export default OrderCard;
