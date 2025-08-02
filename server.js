const bcrypt = require('bcrypt');
const saltRounds = 10; // Você pode ajustar este valor conforme necessário

// Gerar o hash da senha
bcrypt.hash('passw0rd!', saltRounds, (err, hash) => {
  if (err) {
    console.error(err);
    return;
  }
  
  console.log('Hash gerado:', hash);
  
  // Comparar a senha com o hash gerado
  bcrypt.compare('passw0rd!', hash, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    
    console.log('Resultado da comparação (deve ser true):', res);
    
    // Testar com senha incorreta
    bcrypt.compare('senha_errada', hash, (err, res) => {
      console.log('Resultado da comparação (deve ser false):', res);
    });
  });
});