const yup = require('yup');

const loginSchema = yup.object().shape({
  email: yup.string().email().required('O email é um campo obrigatório'),
  senha: yup.string().required('A senha é um campo obrigatório'),
});

module.exports = {
  loginSchema,
};