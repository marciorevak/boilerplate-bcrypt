'use strict';
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();

// Variáveis DEFINIDAS PELO FREECODECAMP
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

app.use(express.json());

// Rota principal OBRIGATÓRIA (o FCC verifica isso)
app.get('/', (req, res) => {
  res.send('Server running - access /fcc-test for verification');
});

// Rota específica para o teste do FreeCodeCamp
app.get('/fcc-test', (req, res) => {
  bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    if (err) return res.status(500).send('Hash error');
    
    console.log('Hash:', hash); // Log obrigatório para o FCC
    
    bcrypt.compare(myPlaintextPassword, hash, (err, result1) => {
      console.log('Correct comparison:', result1); // Deve ser true
      
      bcrypt.compare(someOtherPlaintextPassword, hash, (err, result2) => {
        console.log('Incorrect comparison:', result2); // Deve be false
        
        res.json({
          hash: hash,
          correctMatch: result1,
          incorrectMatch: result2
        });
      });
    });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));