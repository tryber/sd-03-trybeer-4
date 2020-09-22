const mysqlx = require('@mysql/xdevapi');
require('dotenv/config');

let schema;
module.exports = () => (
  schema
    ? Promise.resolve(schema)
    : mysqlx
      .getSession({
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        host: process.env.HOSTNAME,
        port: 33060,
        socketPath: '/var/run/mysqld/mysqld.sock',
      })
      .then(async (session) => {
        schema = await session.getSchema('Trybeer');
        return schema;
      })
      .catch((error) => {
        console.error('EU SOU O ERRO', error);
        process.exit(1);
      }));
