const jwt = require('jsonwebtoken');
const { createUser } = require('../models/userModel');
const { getUserByEmail } = require('../models/userModel');

// const { JWT_SECRET } = process.env;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const ValidadeUser = async (name, email, password) => {
  const validEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  const validName = /^[a-z ,.'-]+$/i.test(name);
  const validPass = /^[\d]{6}$/.test(password);
  switch (true) {
    case (!validName || name.length < 12):
      return { status: 422, message: 'Nome inválido!' };
    case (!validEmail):
      return { status: 422, message: 'Email inválido!' };
    case (!validPass):
      return { status: 422, message: 'Senha inválida!' };
    default:
      return { status: 200, message: '' };
  }
};

const RegisterUser = async (userData) => {
  const { name, email, password, seller } = userData;
  const { status, message } = await ValidadeUser(name, email, password);
  if (status === 200) {
    const user = await createUser(name, email, password, seller);
    return { status: 201, message: 'Usuário criado com sucesso!', user };
  }
  return { status, message };
};

const LoginUser = async (userEmail, userPass) => {
  if (userPass === '' || userEmail === '') return { status: 401, message: 'Preencha todos os campos.' };
  const user = await getUserByEmail(userEmail);
  if (user.email !== userEmail) return { status: 404, message: 'Não há cadastro com esse email.' };
  if (user.password !== userPass) return { status: 400, message: 'Senha incorreta.' };
  const { password, id, ...userData } = user;
  const token = jwt.sign(userData, 'JWT_SECRET', jwtConfig);
  return { ...userData, token };
};

module.exports = {
  LoginUser,
  RegisterUser,
};
