const { queryConnection, connection } = require('./connection');

const getSales = async () => connection()
  .then((db) => db
    .getTable('sales')
    .select()
    .execute())
  .then((orders) => orders.fetchAll())
  .catch((error) => error);

const getSaleById = async (id) => connection()
  .then((db) => db
    .getTable('sales')
    .select()
    .where('id = :id')
    .bind('id', id)
    .execute())
  .then((sale) => sale.fetchOne())
  .then(([ saleId, userId, total, address, number, date, status]) => ({
    saleId,
    userId,
    total,
    address,
    number,
    date,
    status,
  }))

const getSaleItems = async (id) => {
  const query = `SELECT s.sale_id, s.quantity, p.name, p.price
  FROM Trybeer.sales_products as s
  JOIN Trybeer.products AS p WHERE s.product_id = p.id
  AND s.sale_id = ${id}`;

  return await queryConnection(query)
  .then((items) => items.fetchAll())
  .then((fetched) => fetched.map((elem) => (
    {
      saleId: elem[0],
      quantity: elem[1],
      productName: elem[2],
      unitPrice: elem[3],
    }
    )))
  };

const finishSale = async (id) => connection()
  .then((db) => db
    .getTable('sales')
    .update()
    .set('status', 'entregue')
    .where('id = :id')
    .bind('id', id)
    .execute())
    
module.exports = {
  getSales,
  getSaleById,
  getSaleItems,
  finishSale,
};
