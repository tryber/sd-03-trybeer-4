const connection = require('./connection');

const getSales = async () => connection()
  .then((db) => db
    .getTable('sales')
    .select()
    .execute())
  .then((orders) => orders.fetchAll())
  .catch((error) => error);

module.exports = {
  getSales,
};
