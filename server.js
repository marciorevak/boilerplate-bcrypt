const express = require('express');
const bcrypt = require('bcrypt');
const app = express();

// Middleware CRUCIAL para o FreeCodeCamp
app.use(express.urlencoded({ extended: true }));

// Rota que o FreeCodeCamp testa
app.post('/hash-route', (req, res) => {
  const { password } = req.body;
  const saltRounds = 12;
  
  bcrypt.hash(password, saltRounds, (err, hash) => {
    bcrypt.compare(password, hash, (err, result) => {
      res.json({ hash, comparison: result }); // Formato que o FCC espera
    });
  });
});

// Rota raiz opcional (só para verificar se está online)
app.get('/', (req, res) => res.send('Server running'));

// Porta dinâmica para o Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));