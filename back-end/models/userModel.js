const { EmitFlags } = require("typescript");

const connection = require('./connection');

const createUser = (name, email, password, seller) => connection()
  .then();

module.exports = {
  createUser,
};
