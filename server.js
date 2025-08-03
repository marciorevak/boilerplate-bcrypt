'use strict';
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();

// Variáveis DEFINIDAS PELO FREECODECAMP (não altere os nomes!)
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

// Middleware para evitar erros
app.use(express.json());

// Rota raiz OBRIGATÓRIA (o FCC testa isso)
app.get('/', (req, res) => {
  // Executa o hash E a comparação CONFORME PEDIDO
  bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    console.log('Hash gerado:', hash); // 1. Log do hash
    
    bcrypt.compare(myPlaintextPassword, hash, (err, result) => {
      console.log('Comparação (senha correta):', result); // 2. Log true
    });
    
    bcrypt.compare(someOtherPlaintextPassword, hash, (err, result) => {
      console.log('Comparação (senha errada):', result); // 3. Log false
    });
  });
  
  res.send('Server running - check console logs for hash and comparison');
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));