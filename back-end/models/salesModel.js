const connection = require('./connection');

const getSales = async () => connection()
  .then((db) => db
    .getTable('sales')
    .select()
    .execute())
  .then((orders) => orders.fetchAll())
  .catch((error) => error);

const getSaleItems = async (id) => connection()
  .then((db) => db
    .getTable('sales_products')
    .select()
    .where('sale_id = :id')
    .bind('id', id)
    .execute()
  )
  .then((products) => products.fetchAll())
  .then((fetched) => fetched.map(elem => (
    {
      saleId: elem[0],
      productId: elem[1],
      quantity: elem[2]
    }
  )))

module.exports = {
  getSales,
  getSaleItems,
};
