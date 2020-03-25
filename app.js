const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const appRoutes = require('./routes/appRoutes');
const app = express();

mongoose
  .connect(
    'mongodb://localhost/task-manager',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => console.log('Conectado ao Banco de Dados'))
  .catch((err) => {
    throw new Error(err);
  });

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', appRoutes);

app.listen(3000, () => console.log('Task Manager Server Rodando na Porta 3000'));
