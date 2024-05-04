const knex = require('knex');
const { development } = require('./knex');

const bancoDeDados = knex(development);

bancoDeDados
  .raw('SELECT 1+1 as result')
  .then(() => {
    console.log('Conexão bem-sucedida com o banco de dados PostgreSQL.');
  })
  .catch((error) => {
    console.error('Erro na conexão com o banco de dados:', error);
  });

module.exports = bancoDeDados;