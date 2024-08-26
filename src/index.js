// server/src/index.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 5000;
const questRoutes = require('./routes/questRoutes');

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(helmet());

// Configurando o CORS para aceitar requisições apenas de um domínio específico
const corsOptions = {
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200
  };
  
  app.use(cors(corsOptions));
// Usando as rotas
app.use('/api', questRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
