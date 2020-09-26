const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { registerController } = require('./controllers/userController');
const { loginController } = require('./controllers/userController');
const { updateNameController } = require('./controllers/userController');

const authMiddleware = require('./middlewares/auth');
const salesController = require('./controllers/salesController');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (_req, res) => {
  res.send();
});

// Rota Get Testando Middleware de Validação do Token JWT
app.get('/auth', authMiddleware);

app.get('/admin/orders', salesController.listSales);

app.post('/login', (req, res) => loginController(req, res));

app.post('/register', (req, res) => registerController(req, res));

app.post('/profile', (req, res) => updateNameController(req, res));

app.listen(3001, () => console.log('Listening on port 3001!'));
