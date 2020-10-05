const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const {
  registerController,
  loginController,
  updateNameController,
} = require('./controllers/userController');

// const authMiddleware = require('./middlewares/auth');
const salesController = require('./controllers/salesController');
const { getAllProducts } = require('./controllers/productController');
const auth = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', (_req, res) => res.send());

app.get('/products', auth(true), (req, res) => getAllProducts(req, res));

app.get('/admin/orders', salesController.listSales);
app.get('/admin/orders/:id', salesController.saleDetails);
app.post('/admin/orders/:id', salesController.setAsDelivered);

app.post('/login', (req, res) => loginController(req, res));

app.post('/register', (req, res) => registerController(req, res));

app.post('/profile', (req, res) => updateNameController(req, res));

app.use(errorHandler);

app.listen(3001, () => console.log('Listening on port 3001!'));
