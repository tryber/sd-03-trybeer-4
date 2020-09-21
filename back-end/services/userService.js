const { createUser } = require('../models/userModel');

const ValidadeUser = async (name, email, password) => {
  const validEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  const validName = /^[a-z ,.'-]+$/i.test(name);
  const validPass = /^[\d]{6}$/.test(password);
  switch(true){
    case (!name || !email || !password):
      return { status: 422, message: 'Dados incompletos!' };
    case (!validName || name.length < 12):
      return { status: 422, message: 'Nome inválido!' };
    case (!validEmail):
      return { status: 422, message: 'Email inválido!' };
    case (!validPass):
      return { status: 422, message: 'Senha em padrão inválido!' };
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

module.exports = { 
  RegisterUser,
};
