const { gerarRelatorio } = require('../models/calculation');
const data = require('../models/data');

exports.calcularRelatorio = (req, res) => {
  const { respostas } = req.body;

  const resultados = gerarRelatorio(respostas);

  // Calcular a média geral da empresa em porcentagem
  const mediaGeral = (resultados.reduce((acc, tema) => acc + tema.media, 0) / resultados.length) * 10;

  // Encontrar o tema com a menor média
  const temaMenorMedia = resultados.reduce((min, tema) => (tema.media < min.media ? tema : min), resultados[0]);

  // Definir cores específicas para cada tema
  const coresTemas = {
    'Tema 1': '#60a5fa',
    'Tema 2': '#34d399',
    'Tema 3': '#fbbf24',
    'Tema 4': '#f87171',
    // Adicione mais temas e cores conforme necessário
  };

  res.json({
    mediaGeral,
    temaMenorMedia,
    coresTemas,
    resultados,
  });
};
