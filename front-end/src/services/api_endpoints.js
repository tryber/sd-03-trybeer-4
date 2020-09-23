const axios = require('axios').default;

const getUserFromAPI = async (email, password) => {
  const response = await axios.post('http://localhost:3001/login', { email, password })
  .then(response => response.json())
  .catch((error) => console.log(error))
  return response;
};

// const getUserFromAPI = async (email, pass) => {
//   const response = await fetch ('http://localhost:3001/login')
//   .then(response => response.json())
//   .then(userData => userData.role
//     ? Promise.resolve()
//     : Promise.reject());
//   return response;
// };

export { getUserFromAPI };
