const jwt = require('jsonwebtoken');
const { createUser, getUserByEmail, updateName } = require('../models/userModel');

const ValidadeUser = async (name, email, password, dbEmail) => {
  const validEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  const validName = /^[a-z ,.'-]+$/i.test(name);
  const validPass = /[\d]{6}$/.test(password);
  switch (true) {
    case (!validName || name.length < 12):
      return { status: 422, message: 'Nome inválido!' };
    case (!validEmail):
      return { status: 422, message: 'Email inválido!' };
    case (!validPass):
      return { status: 422, message: 'Senha inválida!' };
    case (dbEmail && dbEmail === email):
      return { status: 422, message: 'E-mail already in database.' };
    default:
      return { status: 200, message: '' };
  }
};

const RegisterUser = async (userData) => {
  const { name, email, password, seller } = userData;
  const { email: duplicateEmail } = await getUserByEmail(email);
  const { status, message } = await ValidadeUser(name, email, password, duplicateEmail);
  if (status === 200) {
    const user = await createUser(name, email, password, seller);
    return { status: 201, message: 'Usuário criado com sucesso!', user };
  }
  return { status, message };
};

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const LoginUser = async (userEmail, userPass) => {
  const user = await getUserByEmail(userEmail);
  if (user.email !== userEmail) return { status: 404, message: 'Não há cadastro com esse email.' };
  if (user.password !== userPass) return { status: 400, message: 'Senha incorreta.' };
  const { password, id, ...userData } = user;
  const token = jwt.sign(userData, JWT_SECRET || 'tentecerveja', jwtConfig);
  return { ...userData, token };
};

const UpdateUserName = async (userName, userEmail) => {
  if (userName.length <= 1 || userName.length > 24) return { status: 400, message: 'Nome inválido.' };
  await updateName(userName, userEmail);
  const user = await getUserByEmail(userEmail);
  const { password, id, ...userData } = user;
  const token = jwt.sign(userData, JWT_SECRET || 'tentecerveja', jwtConfig);
  return { ...userData, token, message: 'Atualização concluída com sucesso' };
};

module.exports = {
  LoginUser,
  RegisterUser,
  UpdateUserName,
};
