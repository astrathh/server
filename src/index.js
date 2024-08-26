// server/src/index.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 5000;
const questRoutes = require('./routes/questRoutes');

app.use(cors());
app.use(express.json());

// Usando as rotas
app.use('/api', questRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
