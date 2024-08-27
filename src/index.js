// server/src/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const questRoutes = require('./routes/questRoutes');

const allowedOrigins = process.env.NODE_ENV === 'production' 
  ? ['https://seu-frontend.vercel.app'] 
  : ['http://localhost:3000/diagnosys'];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Usando as rotas
app.use('/api', questRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});