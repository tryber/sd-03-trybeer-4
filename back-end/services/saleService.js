const moment = require('moment');
const salesModel = require('../models/saleModel');
const { getSales, getSaleById, getSaleItems } = require('../models/saleModel');

const createSale = async (id, addressName, addressNumber, totalPrice, cart) => {
  // moment.locale('pt-BR');
  const date = moment().format('YYYY/MM/DD h:mm:ss');
  const status = 'Pendente';

  // Registrando venda na tabela sales e retornando o Id da Venda.
  const sale = await salesModel.createSale(
    id,
    totalPrice,
    addressName,
    addressNumber,
    date,
    status,
  );

  // Para cada Produto do Carrinho, cria-se um registro do produto na tabela sales_products
  // passando Id da Venda + Id Produto + Quantidade
  cart.forEach(async (productCart) => {
    const { id: prodId, quantity } = productCart;
    await salesModel.registerSaleProduct(sale, prodId, quantity);
  });

  return { message: 'Compra realizada com sucesso!' };
};

const getSalesByUser = async (uId) => {
  const sales = await Model.getAllSales(uId);
  return sales;
};

const getAllSales = async () => {
  const sales = await getSales();

  return sales.map(
    ([id, userId, totalPrice, deliveryAddress, deliveryNumber, date, status]) => (
      { id, userId, totalPrice, deliveryAddress, deliveryNumber, date, status }
    ),
  );
};

const getSaleInfo = async (id) => {
  const saleInfo = await getSaleById(id);
  const saleItems = await getSaleItems(id);
  return saleItems.length
    ? { code: 200, saleItems, saleInfo }
    : { code: 404, message: 'Sale not found' };
};

const finishSale = async (id) => salesModel.finishSale(id);

module.exports = {
  createSale,
  getAllSales,
  getSalesByUser,
  getSaleInfo,
  finishSale,
};
