// server/src/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const questRoutes = require('./routes/questRoutes');

app.use(cors({
  origin: 'http://localhost:3000', // URL do seu frontend
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// Usando as rotas
app.use('/api', questRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});