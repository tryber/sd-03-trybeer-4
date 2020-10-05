const Services = require('../services/saleService');

const createSale = async (req, res) => {
  const data = req.body;
  const { nameAdress, numberAdress } = data;
  const { cart, user, justNumberPrice } = req.body;
  const { id } = user;

  const sale = await Services.createSale(id, nameAdress, numberAdress, justNumberPrice, cart);

  console.log('Service Response:', sale);
  return res.status(200).json(sale);
};

module.exports = {
  createSale,
};
