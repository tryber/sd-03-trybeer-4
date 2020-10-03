const { getAllSales, getSaleInfo } = require('../services/saleService');

const feedback = (message) => { message };

const listSales = async (_req, res) => {
  const sales = await getAllSales();
  return res.status(200).json(sales);
};

const saleDetails = async (req, res) => {
  const sales = await getSaleInfo(req.params.id);
  const { code } = sales;
  return res.status(code).json(sales);
};

const finishSale = async (req, res) => {
  const { id } = req.params;
  const { saleInfo } = await getSaleInfo(id);
  console.log('SaleInfo: ', saleInfo);
  switch (true) {
    case !saleInfo:
      return res.status(404).json(feedback('Order not found'));
    case saleInfo.status === 'Entregue':
      return res.status(304).json(feedback('Order was already delivered'));
    case saleInfo.status === 'Pendente':
      await finishSale(id);
      return res.status(200);
    default:
      return res.status(400).json(feedback('Sorry. Try again!'));
  }
}

module.exports = {
  listSales,
  saleDetails,
  finishSale,
};
