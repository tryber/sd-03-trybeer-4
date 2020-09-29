const salesModel = require('../models/salesModel');
const { getSales } = require('../models/salesModel');

const getAllSales = async () => {
  const sales = await getSales();

  return sales.map(
    ([id, userId, totalPrice, deliveryAddress, deliveryNumber, date, status]) => (
      { id, userId, totalPrice, deliveryAddress, deliveryNumber, date, status }
    ),
  );
};

const getSaleItems = async (id) => {
  const saleItems = await salesModel.getSaleItems(id);
  return saleItems.length
  ? { code: 200, saleItems }
  : { code: 404, message: 'Sale not found' }

}


module.exports = {
  getAllSales,
  getSaleItems,
};
