const app = require('./app');

const port = process.env.APP_PORT;
console.log(port);
app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
