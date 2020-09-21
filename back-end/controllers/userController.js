// services
const { RegisterUser } = require('../services/userService');

const registerController = async (req, res) => {
  const { status, message, user } = await RegisterUser(req.body);
  if (status === 201) return res.status(status).json({ message, user });
  return res.status(status).json({ message });
};

module.exports = {
  registerController,
};
