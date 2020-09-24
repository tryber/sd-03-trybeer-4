const axios = require('axios');

export const getUserFromAPI = async (email, password) => {
  const response = await axios({
    baseURL: 'http://localhost:3001/login',
    method: 'post',
    data: {
      email,
      password,
    },
  })
  .then(({ data }) => data)
  .catch(({ response }) => response);

  return response;
};

export const postNewUserAPI = async (name, email, password, seller) => {
  const response = await axios({
    baseURL: 'http://localhost:3001/register',
    method: 'post',
    data: {
      name,
      email,
      password,
      seller
    },
  })
    .then((resp) => resp.data)
    .catch(({ response }) => response.data);

  return response;
};

