const mysqlx = require('@mysql/xdevapi');
require('dotenv/config');

const config = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  port: 33060,
  socketPath: '/var/run/mysqld/mysqld.sock',
};

let schema;
let joinSchema;

const connection = async () => (
  schema
    ? Promise.resolve(schema)
    : mysqlx
      .getSession(config)
      .then(async (session) => {
        schema = await session.getSchema('Trybeer');
        return schema;
      })
      .catch((error) => {
        console.error('EU SOU O ERRO', error);
        process.exit(1);
      }));

// Connection dedicado exclusivamente à query usada para juntar 2 tabelas.
// Sugestão de @Hfreitas dadas as limitações do driver MySQL para Node.
const queryConnection = async (query) => (
  joinSchema
    ? Promise.resolve(joinSchema)
    : mysqlx
      .getSession(config)
      .then(async (session) => {
        joinSchema = await session.sql(query).execute()
        return joinSchema;
      })
);

module.exports = { connection, queryConnection };
