const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello depuis Docker + Node.js !</h1>');
});

app.listen(3000, () => {
  console.log('Serveur lancé sur le port 3000');
});