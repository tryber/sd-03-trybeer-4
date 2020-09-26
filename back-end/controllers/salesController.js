const { getAllSales } = require('../services/saleService');

const listSales = async (_req, res) => {
  const sales = await getAllSales();
  return res.status(200).json(sales);
};

module.exports = {
  listSales,
};
