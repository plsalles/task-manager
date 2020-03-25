const express = require('express');
const Tasks = require('../models/Task');

const router = express.Router();

router.get('/', (req, res) => {
  Tasks.find()
    .then(tasks => {
      res.render('home', { tasks });
    })
    .catch((err) => {
      throw new Error(err);
    });
});

router.get('/task/new', (req, res) => {
  res.render('new-task');
});

router.post('/task/new', (req, res) => {
  const { title, description, status, dueDate } = req.body;
  const task = new Tasks({ title, description, status, dueDate });

  Tasks.create(task)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      throw new Error(err);
    });
})

module.exports = router;
