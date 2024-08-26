// server/src/controllers/gerarRelatorio.js
const data = require('../models/data');

exports.getQuestions = (req, res) => {
    res.json(data);
};

exports.calculateResults = (req, res) => {
    const { respostas } = req.body;

    // Lógica para calcular a média e gerar o relatório com base nas respostas
    const resultados = respostas.map((resposta, index) => {
        const tema = data[index].tema;
        const media = resposta.reduce((acc, valor) => acc + valor, 0) / resposta.length;

        let mensagem = '';

        if (media <= 2.5) {
            mensagem = data[index].mensagens.critico;
        } else if (media > 2.5 && media < 5) {
            mensagem = data[index].mensagens.abaixo;
        } else if (media >= 5 && media < 7.5) {
            mensagem = data[index].mensagens.acelerando;
        } else {
            mensagem = data[index].mensagens.letsGrowth;
        }

        return {
            tema,
            media,
            mensagem
        };
    });

    res.json(resultados);
};


