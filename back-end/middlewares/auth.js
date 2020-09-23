const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

// const { JWT_SECRET } = process.env;

const authMiddleware = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) return res.send(401);

  try {
    const payload = jwt.verify(token, 'JWT_SECRET');

    const user = await userModel.getUserByEmail(payload.email);

    if (!user) {
      return res.status(400).json({ error: 'Erro ao procurar usuario do token.' });
    }
    
    const { password, ...dataUser } = user;

    req.user = dataUser;

    return next();
  
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido.' });
  }
};

module.exports = authMiddleware;
