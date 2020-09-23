const getUserFromAPI = async = (email, pass) => {
  const response = await fetch('http://localhost:3001/login')
  .then(response => response.json())
  .then(userData => userData.role
    ? Promise.resolve()
    : Promise.reject());
  return response;
};

export { getUserFromAPI };
