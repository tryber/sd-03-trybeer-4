const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const {
  registerController,
  loginController,
  updateNameController,
} = require('./controllers/userController');

const { getAllProducts } = require('./controllers/productController');

// const authMiddleware = require('./middlewares/auth');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', (_req, res) => {
  res.send();
});

app.get('/products', (req, res) => getAllProducts(req, res));

// Rota Get Testando Middleware de Validação do Token JWT
// app.get('/auth', authMiddleware);

app.post('/login', (req, res) => loginController(req, res));

app.post('/register', (req, res) => registerController(req, res));

app.post('/profile', (req, res) => updateNameController(req, res));

app.listen(3001, () => console.log('Listening on port 3001!'));
