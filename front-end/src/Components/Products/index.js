import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import BeerCard from '../BeerCard/index';
import BeerContext from '../../Context/BeerContext/BeerContext';
import MenuBar from '../MenuBar';
import './styles.css';

// import beers from '../../images/beers.png';
// import greenBeer from '../../images/green-beer.png';
// import starBeer from '../../images/star-beer.png';
// import boxBeer from '../../images/box-beers.png';

// const mockProducts = [
//   { name: 'Beer', price: 19.90, image: beers },
//   { name: 'Green Beer', price: 14.90, image: greenBeer },
//   { name: 'Box Beer', price: 49.90, image: boxBeer },
//   { name: 'Beer P', price: 119.90, image: starBeer },
// ];

const ProductsPage = () => {
  const initialValue = 0;
  const { total, products } = useContext(BeerContext);

  return (
    <div className="products-list">
      <MenuBar titleName="TryBeer" />
      {products.map(({
        name, price, quantity,
      }, index) => (
        <BeerCard
          productName={ name }
          price={ price }
          imageURL={ name }
          initialQuantity={ quantity }
          index={ index }
          key={ name }
        />
      )) }
      <Link to="/checkout">
        <button
          disabled={ total === initialValue }
          type="button"
          data-testid="checkout-bottom-btn"
          className="checkout-btn"
        >
          Ver Carrinho
          <span data-testid="checkout-bottom-btn-value">
            {`R$ ${total.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}
          </span>
        </button>
      </Link>
    </div>
  );
};

export default ProductsPage;
