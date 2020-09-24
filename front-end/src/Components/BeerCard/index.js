import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import BeerContext from '../../Context/BeerContext/BeerContext';

const BeerCard = ({
  productName,
  price,
  imageURL,
  index,
}) => {
  const initialQuantity = 0;
  const sumQuantity = 1;
  const discountValue = 0.1;
  // const { handleCartProducts } = useContext(BeerContext);
  const [quantity, setQuantity] = useState(initialQuantity);

  return (
    <div className="product">
      <div className="product-values">
        <div>
          <span
            data-testid={ `${index}-product-price` }
            className="original-product-price"
          >
            R$
            { price }
          </span>
          <span
            className="product-price"
          >
            R$
            { price - price * discountValue }
          </span>
        </div>
        <span className="discount">-10%</span>
      </div>
      <div className="product-img">
        <img
          data-testid={ `${index}-product-img` }
          src={ imageURL }
          alt={ `imagem de um ${productName}` }
          width="100px"
        />
      </div>
      <div className="product-name">
        <span data-testid={ `${index}-product-name` }>{ productName }</span>
      </div>
      <div className="quantity-container">
        <label htmlFor="add">
          Adicionar
          <input
            data-testid={`${index}-product-plus`}
            id="add"
            type="button"
            className="qty-button qty-button-plus"
            // onClick={ () => updateProductCart(sumQuantity) }
          />
        </label>
        <span className="product-quantity">{ quantity }</span>
        <label htmlFor="remove">
          Remover
          <input
            data-testid={`${index}-product-minus`}
            id="remove"
            type="button"
            className="qty-button qty-button-subtract"
            // onClick={ () => updateProductCart(-sumQuantity) }
          />
        </label>
      </div>
    </div>
  );
};

BeerCard.propTypes = {
  imageURL: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};

export default BeerCard;
