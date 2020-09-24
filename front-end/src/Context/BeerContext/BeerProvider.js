import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BeerContext from './BeerContext';

const BeerProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const updateQuantity = (quantity, productName) => {
    setCartProducts((currentState) => currentState.map((product) => {
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
      setCartProducts((currentState) => { 
        console.log(currentState);
        return ([...currentState, {
        name: productName,
        price,
        quantity,
        imageURL,
      }]);
    });
  }

  const updateProduct = (quantity, productName) => {
    if (cartProducts.some(({ name }) => productName === name)) {
      return setCartProducts((currentState) => {
        currentState.reduce((cartProducts, product) => {
          if (product.name === productName) {
            return cartProducts.push({ ...product, quantity });
          }
          return cartProducts.push(product);
        }, [])
      })
    }
    return 
  }

  const context = {
    updateProduct,
    removeProduct,
    addProduct,
    cartProducts,
  };
  return (
    <BeerContext.Provider value={ context }>
      {children}
    </BeerContext.Provider>
  );
};

BeerProvider.propTypes = { children: PropTypes.node.isRequired };

export default BeerProvider;
