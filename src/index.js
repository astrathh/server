// server/src/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const questRoutes = require('./routes/questRoutes');

// Configurando o CORS
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  preflightContinue: false,
  optionsSuccessStatus: 204
};
app.use(cors(corsOptions));

app.use(express.json());

// Usando as rotas
app.use('/api', questRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://192.168.15.11:3000`);
});