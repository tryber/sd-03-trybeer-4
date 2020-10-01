const salesModel = require('../models/salesModel');
const { getSales, getSaleById, getSaleItems, getSaleItemsV2 } = require('../models/salesModel');

const getAllSales = async () => {
  const sales = await getSales();
  
  return sales.map(
    ([id, userId, totalPrice, deliveryAddress, deliveryNumber, date, status]) => (
      { id, userId, totalPrice, deliveryAddress, deliveryNumber, date, status }
      ),
      );
    };

const getSaleInfo = async (id) => {
  const saleInfo = await getSaleById(id);
  const saleItems = await getSaleItemsV2(id);
  return saleItems.length
    ? { code: 200, saleItems, saleInfo }
    : { code: 404, message: 'Sale not found' };
};

const finishSale = async (id) => {
  return await salesModel.finishSale(id);
};

module.exports = {
  getAllSales,
  getSaleInfo,
  finishSale,
};
