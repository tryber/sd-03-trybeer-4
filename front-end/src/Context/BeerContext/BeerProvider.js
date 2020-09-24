import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BeerContext from './BeerContext';

const BeerProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const updateQuantity = (quantity, productName) => {
    setCartProducts(cartProducts.map((product) => {
      if (product.name === productName) {
        return { ...product, quantity };
      }
      return product;
    }));
  }

  const removeProduct = (productName) => 
    setCartProducts((currentState) =>
      currentState.filter(({ name }) => (productName !== name)));


  const addProduct = (productName, price, quantity, imageURL) => {
    setCartProducts((currentState) => ([...currentState, {
      name: productName,
      price,
      quantity,
      imageURL,
    }]));
  }

  // const updateCart = (quantity, productName = '', price = '', imageURL = '') => {
  //   setCartProducts((currentState) =>
  //    currentState.reduce((newCart, product) => {
  //      console.log(newCart, product);
  //       if (productName === product.name) {
  //         return newCart.push({
  //           name: productName,
  //           price,
  //           quantity,
  //           imageURL,
  //         });
  //       }
  //     return newCart.push(product);
  //   }, []));
  // }

  // const updateCart = (quantity, productName = '', price = '', imageURL = '') => {
  //   if (quantity === 0) return setCartProducts((currentState) =>
  //     currentState.filter(({ name }) => (productName !== name)));
  //   if (quantity === 1) {
  //     return setCartProducts((currentState) => ([...currentState, {
  //       name: productName,
  //       price,
  //       quantity,
  //       imageURL,
  //     }]));
  //   }
  //   return setCartProducts(cartProducts.map((product) => {
  //     if (product.name === productName) {
  //       return { ...product, quantity };
  //     }
  //     return product;
  //   }));
  // };
  const context = {
    updateQuantity,
    removeProduct,
    addProduct,
  };
  return (
    <BeerContext.Provider value={ context }>
      {children}
    </BeerContext.Provider>
  );
};

BeerProvider.propTypes = { children: PropTypes.node.isRequired };

export default BeerProvider;
