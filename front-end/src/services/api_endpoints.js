const axios = require('axios');

export const getUserFromAPI = async (email, password) => {
  const dataResponse = await axios({
    baseURL: 'http://localhost:3001/login',
    method: 'post',
    data: {
      email,
      password,
    },
  })
    .then(({ data }) => data)
    .catch(({ response }) => response);

  return dataResponse;
};

export const postNewUserAPI = async (name, email, password, seller) => {
  const dataResponse = await axios({
    baseURL: 'http://localhost:3001/register',
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
