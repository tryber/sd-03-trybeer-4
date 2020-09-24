import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import getProductsFromAPI from '../../services/api_endpoints';
import MenuBar from '../MenuBar';

function ProductsPage() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0.00);

  setItems(getProductsFromAPI);

  return (
    <div>
      <MenuBar />
       {/* {items.map(({ name, price, url_image }) => (
         <Card name={name} price={price} image={url_image} />
      )) } */}
    </div>
  );
}

export default ProductsPage;
