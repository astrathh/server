// server/src/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const questRoutes = require('./routes/questRoutes');

// Configurando o CORS
const corsOptions = {
  origin: 'https://diagnostico.growthagency.com.br/',  // Domínio específico
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  credentials: true,  // Mantém o envio de cookies
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.options('https://diagnostico.growthagency.com.br/', cors(corsOptions));

app.use(express.json());

// Usando as rotas
app.use('/api', questRoutes);
