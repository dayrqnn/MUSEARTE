const express = require('express');
const app = express();
const port = 3000;

console.log("Servidor de prueba arrancado");

app.get('/', (req, res) => {
  res.send('¡Este es un servidor de prueba!');
});

app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`);
});
