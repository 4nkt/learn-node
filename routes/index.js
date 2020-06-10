const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.send('Hey! It works!');
});

router.get('/json', (req, res) => {
  const data = { name: 'John', age: 30, cool: true };
  res.json(data);
});

router.get('/query', (req, res) => {
  res.json(req.query);
});

router.get('/reverse/:text', (req, res) => {
  const reverse = [...req.params.text].reverse().join('');
  res.send(reverse);
});

module.exports = router;
