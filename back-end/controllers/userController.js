// services
const { RegisterUser } = require('../services/userService');
const { LoginUser } = require('../services/userService');

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const response = await LoginUser(email, password);
  return res.status(200).json(response);
};

const registerController = async (req, res) => {
  const { status, message, user } = await RegisterUser(req.body);
  if (status === 201) return res.status(status).json({ message, user });
  return res.status(status).json({ message, status });
};

module.exports = {
  loginController,
  registerController,
};
