const express = require('express');
const bcrypt = require('bcrypt');
const app = express();

// Middleware para evitar "Application exited early"
app.use(express.json());

// Rota OBRIGATÓRIA para o teste do FreeCodeCamp
app.get('/', (req, res) => {
  // Apenas responde OK - o teste roda em background
  res.status(200).send('Server running');
});

// Lógica do desafio (rota opcional para visualização)
app.get('/test-bcrypt', (req, res) => {
  const saltRounds = 12;
  const password = 'freecodecamp';

  bcrypt.hash(password, saltRounds, (err, hash) => {
    bcrypt.compare(password, hash, (err, result) => {
      res.send(`Hash: ${hash}<br>Comparação: ${result}`);
    });
  });
});

// Inicia o servidor na porta do Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));