const { getSales } = require('../models/salesModel');

const getAllSales = async () => {
  const sales = await getSales();
  console.log(sales);
  return sales.map(
    ([id, userId, total_price, delivery_address, delivery_number, date, status]) => (
      { id, userId, total_price, delivery_address, delivery_number, date, status }))
}

module.exports = {
  getAllSales,
};
