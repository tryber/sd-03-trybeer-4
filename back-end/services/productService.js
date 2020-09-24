const { getAllProducts } = require('../models/productModel');

const GetAllProducts = async () => {
  const products = await getAllProducts();
  return products.map(([id, name, price, url_image]) => ({ id, name, price, url_image }));
};

module.exports = {
  GetAllProducts,
};
