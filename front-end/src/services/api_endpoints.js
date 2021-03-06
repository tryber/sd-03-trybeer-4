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

export const postUpdateName = async (name, email, token) => {
  const response = await axios({
    baseURL: `${url}profile`,
    method: 'post',
    headers: {
      authorization: token,
    },
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

export const getOrdersFromAPI = async (token) => {
  const response = await axios({
    baseURL: `${url}orders`,
    method: 'get',
    headers: {
      authorization: token,
    },
  })
    .then((res) => res.data)
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

export const getOrderData = async (id) => {
  const { saleItems, saleInfo } = await axios({
    baseURL: `${url}admin/orders/${id}`,
    method: 'get',
  })
    .then((result) => result.data)
    .catch(({ err }) => err);
  return { saleItems, saleInfo };
};

export const markOrderAsDelivered = async (id) => {
  await axios({
    baseURL: `${url}admin/orders/${id}`,
    method: 'post',
  });
};

export const postNewOrder = async (nameAdress, numberAdress, cart, user, justNumberPrice) => {
  const response = await axios({
    baseURL: `${url}orders`,
    method: 'post',
    data: {
      nameAdress,
      numberAdress,
      cart,
      user,
      justNumberPrice,
    },
  })
    .catch(({ err }) => err);

  return response;
};
