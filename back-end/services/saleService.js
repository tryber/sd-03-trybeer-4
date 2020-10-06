const moment = require('moment');
const Model = require('../models/saleModel');

const createSale = async (id, addressName, addressNumber, totalPrice, cart) => {
  // moment.locale('pt-BR');
  const date = moment().format('YYYY/MM/DD h:mm:ss');
  const status = 'pendente';

  // Registrando venda na tabela sales e retornando o Id da Venda.
  const sale = await Model.createSale(id, totalPrice, addressName, addressNumber, date, status);

  // Para cada Produto do Carrinho, cria-se um registro do produto na tabela sales_products
  // passando Id da Venda + Id Produto + Quantidade
  cart.forEach(async (productCart) => {
    const { id: prodId, quantity } = productCart;
    await Model.registerSaleProduct(sale, prodId, quantity);
  });

  return { message: 'Compra realizada com sucesso!' };
};

const getAllSales = async (uId) => {
  const sales = await Model.getAllSales(uId);
  return sales;
}

module.exports = {
  createSale,
  getAllSales,
};
