const axios = require('axios');

const url = 'http://localhost:3001/';

export const getUserFromAPI = async (email, password) => {
  const response = await axios({
    baseURL: `${url}login`,
    method: 'post',
    data: {
      email,
      password,
    },
  })
    .catch(({ err }) => err);

  return response;
};

export const postNewUserAPI = async (name, email, password, seller) => {
  const dataResponse = await axios({
    baseURL: `${url}register`,
    method: 'post',
    data: {
      name,
      email,
      password,
      seller,
    },
  })
    .then((resp) => resp.data)
    .catch(({ response }) => response.data);

  return dataResponse;
};

export const postUpdateName = async (name, email) => {
  const response = await axios({
    baseURL: `${url}profile`,
    method: 'post',
    data: {
      name,
      email,
    },
  })
    .then((resp) => resp.data)
    .catch(({ err }) => err);

  return response;
};

export const getProductsFromAPI = async (token) => {
  const response = await axios({
    baseURL: `${url}products`,
    method: 'get',
    headers: {
      authorization: token,
    },
  })
    .then((resp) => resp.data)
    .catch(({ err }) => err);

  return response;
};

export const getOrderList = async (token) => {
  const orders = await axios({
    baseURL: `${url}admin/orders`,
    method: 'get',
    headers: {
      authorization: token,
    },
  })
    .then((result) => result.data)
    .catch(({ err }) => err);
  return orders;
};

export const getItemsFromOrder = async (id) => {
  const { saleItems } = await axios({
    baseURL: `${url}admin/orders/${id}`,
    method: 'get',
  })
    .then((result) => result.data)
    .catch(({ err }) => err);
  return saleItems;
};
