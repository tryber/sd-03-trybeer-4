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
    .catch(({ err }) => err);

  return response;
};

export const getOrderList = async () => {
  const orders = await axios({
    baseURL: 'http://localhost:3001/profile',
    method: 'get',
  })
    .catch(({ err }) => err);

  return orders;
};
