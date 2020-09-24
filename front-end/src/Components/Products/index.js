import React from 'react';
// import { Link } from 'react-router-dom'; { useState }
// import getProductsFromAPI from '../../services/api_endpoints';
import MenuBar from '../MenuBar';

function ProductsPage() {
  // const [total, setTotal] = useState(0.00);

  // const itemList = getProductsFromAPI;

  return (
    <div>
      <MenuBar />
      {/* {itemList.map(({ name, price, url_image }) => (
         <Card name={name} price={price} image={url_image} />
      )) } */}
    </div>
  );
}

export default ProductsPage;
