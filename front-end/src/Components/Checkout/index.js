import React, { useState, useEffect, useContext, createFactory } from 'react';
import MenuBar from '../MenuBar/';
import './styles.css';


const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [newCart, setNewCart] = useState([]);
  const CartList = JSON.parse(localStorage.getItem('cart')) || [];

  const calculePrice = (cart) => cart.reduce((acc, { price, quantity }) => acc + (price * quantity), 0);

  const formatePrice = (price) => price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  const totalPrice = calculePrice(cart).toLocaleString('pt-br',{ style: 'currency', currency: 'BRL' });

  const removeOrder = (index) => {
    cart.splice(index, 1)
    setNewCart(cart)
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  useEffect(() => {
    setCart(CartList)
  }, [newCart])
  

  return (
    <div>
      <MenuBar titleName="Finalizar Pedido" />

      <h2>Produtos</h2>
      {cart.length < 1 && <h2>Não há produtos no carrinho</h2>}
      {cart.map(({ price, productName, quantity }, index) => (
        <div className="cart-products" key = {index}>
          <div className="cart-qtd" data-testid={`${index}-product-qtd-input`}>{quantity}</div>
          <div className="cart-name" data-testid={`${index}-product-name`}>{productName}</div>
          <div className="cart-total" data-testid={`${index}-product-total-value`}>
            {formatePrice(quantity * price)}
          </div>
          <div className="cart-price" data-testid={`${index}-product-unit-price`}>
            {`(${formatePrice(price)} un)`} 
            <button
              type="submit"
              value="Submit"
              data-testid={`${index}-removal-button`}
              onClick={() => removeOrder(index)}
            >
              X
            </button>
          </div>
        </div>
      ))}

      <div data-testid="order-total-value">
        {`Total: ${totalPrice}`}
      </div>

      <h2>Endereço</h2>
      <label htmlFor="street">
        Rua:
        <input
          id="street"
          name="street"
          data-testid="checkout-street-input"
          type="text"
          required
          // onChange={ (e) => setNewName(e.target.value) && setMessage(null) }
          // value={ newName }
        />
      </label>
      <br />
      <label htmlFor="number">
        Número da casa:
        <input
          id="number"
          name="number"
          data-testid="checkout-house-number-input"
          type="text"
          required
          // onChange={ (e) => setNewName(e.target.value) && setMessage(null) }
          // value={ newName }
        />
      </label>
      <br />
      <button
        type="button"
        data-testid="checkout-finish-btn"
        // disabled={ name === newName }
        // onClick={ () => handleChangeName(name, email) }
      >
        Finalizar Pedido
      </button>
    </div>
  )
};

export default Checkout;
