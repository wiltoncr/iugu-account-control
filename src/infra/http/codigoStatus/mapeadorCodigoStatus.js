const mapeadorCodigoStatus = {
  // status de erro
  SolicitacaoInvalida: 400,
  NaoAutorizado: 401,
  PagamentoNecessario: 402,
  Proibido: 403,
  NaoEncontrado: 404,
  MetodoNaoPermitido: 405,
  NaoAceitavel: 406,
  AutenticacaoDeProxyNecessaria: 407,
  TempoEsgotadoDaRequisicao: 408,
  Conflito: 409,
  RecursoNaoDisponivel: 410,
  ErroInternoDoServidor: 500,
  NaoImplementado: 501,

  // Status de sucesso
  OK: 200,
  Criado: 201,
  Aceito: 202,
  SemConteudo: 204,
  ConteudoParcial: 206,
};

module.exports = mapeadorCodigoStatus;