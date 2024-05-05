const iugu = require('../../infra/iugu/conexao');

class RepositorioIugu {
  async consultarFaturas(options) {
    await iugu
      .deleteObject({
        Bucket: nomeBucket,
        Key: file.path,
      })
      .promise();
  }
}
module.exports = RepositorioIugu;
