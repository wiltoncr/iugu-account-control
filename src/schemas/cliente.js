const yup = require('yup');
const { pt } = require('yup-locales');

yup.setLocale(pt);

const clienteSchema = yup.object().shape({
  start: yup.number().min(0).required('O start é um campo obrigatório'),
  limit: yup.number().min(0).required('A Limit é um campo obrigatório'),
});

module.exports = {
  clienteSchema,
};
