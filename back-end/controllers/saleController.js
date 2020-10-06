const Services = require('../services/saleService');

const createSale = async (req, res) => {
  const data = req.body;
  const { nameAdress, numberAdress } = data;
  const { cart, user, justNumberPrice } = req.body;
  const { id } = user;

  const sale = await Services.createSale(id, nameAdress, numberAdress, justNumberPrice, cart);

  return res.status(200).json(sale);
};

const getSales = async (req, res) => {
  const { id } = req.body;
  console.log(req.body);
  const sales = await Services.getAllSales(id);
  console.log(sales);
  return res.status(200).json(sales);
}

module.exports = {
  createSale,
  getSales,
};
