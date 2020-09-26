const { getSales } = require('../models/salesModel');

const getAllSales = async () => {
  const sales = await getSales();

  return sales.map(
    ([id, userId, totalPrice, deliveryAddress, deliveryNumber, date, status]) => (
      { id, userId, totalPrice, deliveryAddress, deliveryNumber, date, status }
    ));
};

module.exports = {
  getAllSales,
};
