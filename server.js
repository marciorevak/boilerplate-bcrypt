'use strict';
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();

// Variáveis EXATAS que o FreeCodeCamp espera
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

// Rota principal OBRIGATÓRIA
app.get('/', (req, res) => {
  // Executa o teste de hash/comparação
  bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    if (err) return console.error('Hash error:', err);
    
    console.log('Hash:', hash); // Obrigatório
    
    bcrypt.compare(myPlaintextPassword, hash, (err, result) => {
      console.log('Comparison (correct):', result); // Deve ser true
    });
    
    bcrypt.compare(someOtherPlaintextPassword, hash, (err, result) => {
      console.log('Comparison (incorrect):', result); // Deve ser false
    });
  });
  
  res.send('Server running - check Render logs for test results');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));