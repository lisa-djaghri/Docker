const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'database',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'projetdb'
});

// Route principale
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenue sur le backend Node.js + Docker !' });
});

// Route statut BDD
app.get('/api/status', (req, res) => {
  db.query('SELECT NOW() as heure', (err, results) => {
    if (err) {
      return res.status(500).json({ status: 'Erreur BDD', error: err.message });
    }
    res.json({
      status: 'Base de données connectée ✅',
      heure: results[0].heure
    });
  });
});

app.listen(3000, () => {
  console.log('Backend démarré sur le port 3000');
});