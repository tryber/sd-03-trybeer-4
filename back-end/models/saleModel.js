const connection = require('./connection');

const createSale = async (id,
  totalPrice, nameAdress, numberAdress, saleDate, status) => connection()
  .then((schema) => schema
    .getTable('sales')
    .insert(['user_id', 'total_price', 'delivery_address', 'delivery_number', 'sale_date', 'status'])
    .values(id, totalPrice, nameAdress, numberAdress, saleDate, status)
    .execute())
  .then((query) => query.getAutoIncrementValue())
  .catch((err) => err);

const registerSaleProduct = async (saleId, productId, quantity) => connection()
  .then((schema) => schema
    .getTable('sales_products')
    .insert(['sale_id', 'product_id', 'quantity'])
    .values(saleId, productId, quantity)
    .execute())
  .catch((err) => err);

// const updateStatus = async (id) => connection()
//   .then((schema) => schema
//     .getTable('sales')
//     .update()
//     .set('status', 'entregue')
//     .where('id = :id')
//     .bind('id', id)
//     .execute())
//   .catch((err) => err);

module.exports = {
  createSale,
  registerSaleProduct,
  // updateStatus,
};
