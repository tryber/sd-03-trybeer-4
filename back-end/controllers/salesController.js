const { getAllSales, getSaleItems } = require('../services/saleService');

const listSales = async (_req, res) => {
  const sales = await getAllSales();
  return res.status(200).json(sales);
};

const saleDetails = async (req, res) => {
  const sales = await getSaleItems(req.params.id);
  const { code } = sales;
  return res.status(code).json(sales);
};

module.exports = {
  listSales,
  saleDetails,
};
