const dotenv = require('dotenv');
const cors = require('cors');
const express = require('express');
const rotas = require('./rotas');

dotenv.config();

const whiteList = ['http://localhost:3000'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

const app = express();

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(rotas);

module.exports = app;
