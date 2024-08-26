function gerarRelatorio(resultados) {
    return resultados.map((resultado) => {
      const { tema, respostas } = resultado;
  
      // Calcula a média das respostas
      const total = respostas.reduce((soma, valor) => soma + valor, 0);
      const media = total / respostas.length;
      
      let mensagem = '';

    // Define a mensagem com base na média
    if (media < 2.5) {
        mensagem = 'Mensagem para média baixa (Crítico)';
  } else if (media >= 2.5 && media < 5) {
        mensagem = 'Mensagem para média média (Abaixo)';
  } else if (media >= 5 && media < 7.5) {
        mensagem = 'Mensagem para média alta (Acelerando)';
  } else {
        mensagem = 'Mensagem para média muito alta (Let\'s Growth!)';
  }

      return {
        tema,
        media,
        mensagem,
      };
    });
  }

  module.exports = { gerarRelatorio };

  

  