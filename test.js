const mongoose = require('mongoose');
const User = require('./models/User');

mongoose
  .connect(
    'mongodb://localhost/task-manager',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => console.log('Connected with database'))
  .catch(err => {
    throw new Error(err);
  });

  const newUser = {
    name: 'Adriana Saty',
    username: 'drisaty',
    password: '12345',
    email: 'dri@adriana.com.br',
    ativo: true,
  };

 User.create(new User(newUser))
  .then(user => console.log(user))
  .catch(err => {
    throw new Error(err);
  })
