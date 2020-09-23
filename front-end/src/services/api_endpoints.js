const axios = require('axios');

const getUserFromAPI = async (email, password) => {
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

export default getUserFromAPI;
