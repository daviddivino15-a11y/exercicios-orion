const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Exercício 3: Múltiplos ambientes funcionando!');
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));