import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BeerCard from '../BeerCard/index';
import { getProductsFromAPI } from '../../services/api_endpoints';
import MenuBar from '../MenuBar';
import beers from '../../images/beers.png';
import greenBeer from '../../images/green-beer.png';
import starBeer from '../../images/star-beer.png';
import boxBeer from '../../images/box-beers.png';
import './styles.css';

const mockProducts = [
  { name: 'Beer', price: 19.90, image: beers },
  { name: 'Green Beer', price: 14.90, image: greenBeer },
  { name: 'Box Beer', price: 49.90, image: boxBeer },
  { name: 'Beer P', price: 119.90, image: starBeer },
];

const ProductsPage = () => {
  const [productList, setProductList] = useState(mockProducts);

  // useEffect(() => {
  //   // const fetchProducts = async () => {
  //   //   const products = await getProductsFromAPI();
  //   //   setProductList(products);
  //   // }
  //   // fetchProducts();
  // }, []);

  return (
    <div className="products-list">
      <MenuBar titleName="Produtos"/>
       {productList.map(({ name, price, image }, index) => (
         <BeerCard productName={name} price={price} imageURL={image} index={index} key={name} />
      )) }
      <Link to="/checkout">
        <button
        data-testid="checkout-bottom-btn"
        className="checkout-btn"
        >
          Ver Carrinho - Total: R$
          <span data-testid="checkout-bottom-btn-value">{`199.9`}</span>
        </button>
      </Link>
    </div>
  );
}

export default ProductsPage;
