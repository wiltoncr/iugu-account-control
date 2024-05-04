const bancoDeDados = require('../../infra/bancodedados/conexao');

class RepositorioUsuario {
  async buscaUsuarioPorEmail(email) {
    const usuario = bancoDeDados('usuarios').where('email', email);

    return usuario;
  }

  async buscaUsuarioPorId(id) {
    const usuario = bancoDeDados('usuarios').where('id', id);

    return usuario;
  }

  async cadastroUsuario({ nome, email, senha }) {
    await bancoDeDados('usuarios').insert({
      nome,
      email,
      senha,
    });
  }

  async atualizarPerfil(emailAtual, { nome, email, senha }) {
    await bancoDeDados('usuarios')
      .where('email', emailAtual)
      .update({ nome, email, senha });
  }
}

module.exports = RepositorioUsuario;