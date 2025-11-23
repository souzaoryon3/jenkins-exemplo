const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello Jenkins!',
    version: '1.0.0',
    build: process.env.BUILD_NUMBER || 'local'
  });
});

app.listen(3000, () => {
  console.log('App rodando na porta 3000');
});

module.exports = app;
