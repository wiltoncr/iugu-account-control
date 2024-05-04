const jwt = require('jsonwebtoken');
require('dotenv').config();

const geraTokenJwt = async ({ id }) => {
  const payload = { id };

  const token = jwt.sign(payload, process.env.SECRET_KEY_JWT, {
    expiresIn: '10h',
  });

  return token;
};

module.exports = { geraTokenJwt };