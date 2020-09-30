import React, { useState, useEffect } from 'react';
import MenuBar from '../MenuBar';
import { getProductsLocalStorage } from '../../utils/localStorage';
import './styles.css';

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [newCart, setNewCart] = useState([]);
  const [nameAdress, setNameAdress] = useState(null);
  const [numberAdress, setNumberAdress] = useState(null);
  const zero = 0;

  const calculePrice = (param, paramZero) => param
    .reduce((acc, { price, quantity }) => acc + (price * quantity), paramZero);

  const formatePrice = (price) => price
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  const totalPrice = calculePrice(cart, zero)
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  const justNumberPrice = calculePrice(cart, zero);

  const disableButtton = (price, name, number) => {
    if (price <= zero) return true;
    if (!name || !number) return true;
    return false;
  }

  const removeOrder = (index) => {
    cart.splice(index, 1);
    setNewCart(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  useEffect(() => {
    setCart(getProductsLocalStorage('cart'));
  }, [newCart]);

  // console.log('Name', nameAdress);
  // console.log('Number', numberAdress);
  // console.log('Total Price', justNumberPrice);
  return (
    <div>
      <MenuBar titleName="Finalizar Pedido" />

      <h2>Produtos</h2>
      {cart.length < 1 && <h2>Não há produtos no carrinho</h2>}
      {cart.map(({ price = zero, productName, quantity }, index) => (
        <div className="cart-products" key={ productName }>
          <div className="cart-qtd" data-testid={ `${index}-product-qtd-input` }>{ quantity }</div>
          <div className="cart-name" data-testid={ `${index}-product-name` }>{ productName }</div>
          <div className="cart-total" data-testid={ `${index}-product-total-value` }>
            { formatePrice(quantity * price) }
          </div>
          <div className="cart-price" data-testid={ `${index}-product-unit-price` }>
            { `(${formatePrice(price)} un)` }
            <button
              type="submit"
              value="Submit"
              data-testid={ `${index}-removal-button` }
              onClick={ () => removeOrder(index) }
            >
              X
            </button>
          </div>
        </div>
      ))}

      <div data-testid="order-total-value">
        { `Total: ${totalPrice}` }
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
          onChange={ (e) => setNameAdress(e.target.value) }
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
          onChange={ (e) => setNumberAdress(e.target.value) }
          // value={ newName }
        />
      </label>
      <br />
      <button
        type="button"
        data-testid="checkout-finish-btn"
        disabled={ disableButtton(justNumberPrice, nameAdress, numberAdress) }
        // onClick={ () => handleChangeName(name, email) }
      >
        Finalizar Pedido
      </button>
    </div>
  );
};

export default Checkout;
