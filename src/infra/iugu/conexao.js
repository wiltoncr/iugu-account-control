const axios = require('axios');

require('dotenv').config();

const axiosIugu = axios.create({
  baseURL: 'https://api.iugu.com/v1',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TOKEN_KEY_IUGU}`,
  },
});

module.exports = axiosIugu;
