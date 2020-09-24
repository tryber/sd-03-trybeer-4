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
    .catch(({ err }) => err);

  return response;
};

export const postUpdateName = async (name, email) => {
  const response = await axios({
    baseURL: 'http://localhost:3001/profile',
    method: 'post',
    data: {
      name,
      email,
    },
  })
    .catch(({ err }) => err);

  return response;
};
