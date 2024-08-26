// server/src/routes/questionnaireRoutes.js
const express = require('express');
const router = express.Router();
const questController = require('../controllers/questController');
const relatorioController = require('../controllers/relatorioController');

// Rota para obter as perguntas do questionário
router.get('/questions', questController.getQuestions);

// Rota para calcular os resultados com base nas respostas
router.post('/calculate', questController.calculateResults);

// Rota para gerar o relatório
router.post('/relatorio', relatorioController.calcularRelatorio);

module.exports = router;
