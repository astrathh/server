const data = [
    {
        tema: "Estratégia de Crescimento",
        perguntas: [
            {
                pergunta: "Como sua empresa define as metas de crescimento?",
                respostas: [
                    { texto: "Não há metas claras, definidas de forma aleatória.", valor: 2.4 },
                    { texto: "Metas definidas, mas sem revisão ou adaptação frequente.", valor: 5 },
                    { texto: "Metas claras, revisadas periodicamente, mas sem flexibilidade.", valor: 7.5 },
                    { texto: "Metas bem definidas, revisadas e adaptadas frequentemente com base em dados.", valor: 10 }
                ]
            },
            {
                pergunta: "Qual é o foco principal da estratégia de crescimento da sua empresa?",
                respostas: [
                    { texto: "Nenhum foco claro, decisões baseadas em oportunidades momentâneas.", valor: 2.23 },
                    { texto: "Foco em apenas um canal ou estratégia, sem diversificação.", valor: 5 },
                    { texto: "Estratégia multi-canal, mas sem integração entre os canais.", valor: 7.5 },
                    { texto: "Estratégia multi-canal integrada, com foco em crescimento sustentável.", valor: 10 }
                ]
            },
            {
                pergunta: "Como você avalia o alinhamento entre as equipes de vendas, marketing e produto em relação às metas de crescimento?",
                respostas: [
                    { texto: "Não há alinhamento, cada equipe trabalha de forma isolada.", valor: 2.5 },
                    { texto: "Alinhamento ocasional, sem integração contínua.", valor: 5 },
                    { texto: "Bom alinhamento, mas com falhas de comunicação esporádicas.", valor: 7.55 },
                    { texto: "Alinhamento excelente, com comunicação contínua e integrada.", valor: 10 }
                ]
            },
            {
                pergunta: "Como sua empresa lida com a inovação em seus processos de crescimento?",
                respostas: [
                    { texto: "Inovação não é uma prioridade, seguimos métodos tradicionais.", valor: 2.5 },
                    { texto: "Tentamos inovar, mas sem uma abordagem estruturada.", valor: 5.1 },
                    { texto: "Inovação ocorre, mas de forma esporádica e não documentada.", valor: 7.6 },
                    { texto: "Inovação é uma parte central da nossa estratégia, com processos documentados.", valor: 10 }
                ]
            },
            {
                pergunta: "Qual é o nível de agilidade da sua empresa em adaptar-se a novas oportunidades ou ameaças de mercado?",
                respostas: [
                    { texto: "Muito lenta, mudanças levam muito tempo para serem implementadas.", valor: 2.5 },
                    { texto: "Alguma agilidade, mas com resistência significativa.", valor: 5},
                    { texto: "Agilidade moderada, adaptamos razoavelmente bem às mudanças.", valor: 7.5 },
                    { texto: "Altamente ágil, com capacidade rápida de adaptação a mudanças.", valor: 10 }
                ]
            },
            {
                pergunta: "Como a empresa gerencia o orçamento destinado ao crescimento?",
                respostas: [
                    { texto: "Orçamento não definido, gastos são feitos de forma aleatória.", valor: 2.5 },
                    { texto: "Orçamento básico, com pouco controle.", valor: 5.1 },
                    { texto: "Orçamento definido, mas com ajustes esporádicos.", valor: 7.6 },
                    { texto: "Orçamento bem gerido, com ajustes constantes baseados em resultados.", valor: 10 }
                ]
            }
        ],
        mensagens: {
            critico: "Sua estratégia de crescimento está em uma situação delicada. É crucial que sua empresa defina metas claras e as revise com frequência para acompanhar as mudanças do mercado.",
            abaixo: "Sua estratégia de crescimento precisa de ajustes. Reavaliar e adaptar suas metas com mais frequência pode garantir que você continue no caminho certo.",
            acelerando: "Sua estratégia de crescimento está no caminho certo. Metas claras e revisões regulares estão preparando sua empresa para crescer de forma sustentável. Continue usando dados para tomar decisões.",
            letsGrowth: "Parabéns! Sua estratégia de crescimento é sólida e flexível. Continue revisando e ajustando suas metas para manter um crescimento sustentável e baseado em dados."
        }        
    },
    {
        tema: "Cultura de Crescimento",
        perguntas: [
            {
                pergunta: "Como você descreveria a cultura de inovação na sua empresa?",
                respostas: [
                    { texto: "Inovação não é incentivada, seguimos o que sempre funcionou.", valor: 2.5 },
                    { texto: "Há incentivo à inovação, mas sem suporte efetivo.", valor: 5 },
                    { texto: "Inovação é incentivada e ocasionalmente recompensada.", valor: 7.4 },
                    { texto: "Inovação é parte integral da cultura, com suporte e recompensas claras.", valor: 10 }
                ]
            },
            {
                pergunta: "Qual é a postura da liderança em relação ao risco?",
                respostas: [
                    { texto: "Aversão total ao risco, foco exclusivo na estabilidade.", valor: 2.45 },
                    { texto: "Riscos são evitados, salvo em situações extremas.", valor: 5 },
                    { texto: "Liderança toma riscos moderados, mas com hesitação.", valor: 7.55 },
                    { texto: "Liderança está disposta a tomar riscos calculados para promover o crescimento.", valor: 10 }
                ]
            },
            {
                pergunta: "Como a empresa incentiva o aprendizado e desenvolvimento contínuo?",
                respostas: [
                    { texto: "Não há programas de aprendizado ou desenvolvimento.", valor: 2.5 },
                    { texto: "Programas esporádicos de desenvolvimento, sem continuidade.", valor: 5.1 },
                    { texto: "Incentivo ao desenvolvimento contínuo, mas sem estrutura formal.", valor: 7.5 },
                    { texto: "Programas estruturados e contínuos de aprendizado e desenvolvimento.", valor: 10 }
                ]
            },
            {
                pergunta: "Como a sua empresa reage a falhas ou insucessos?",
                respostas: [
                    { texto: "Falhas não são toleradas, foco em evitar erros a todo custo.", valor: 2.5 },
                    { texto: "Falhas são punidas, com pouca reflexão sobre as lições aprendidas.", valor: 5 },
                    { texto: "Falhas são aceitas, mas sem um processo formal de aprendizado.", valor: 7.5 },
                    { texto: "Falhas são vistas como oportunidades de aprendizado e melhoria contínua.", valor: 10 }
                ]
            },
            {
                pergunta: "Como você descreveria o nível de autonomia e responsabilidade dentro das equipes?",
                respostas: [
                    { texto: "Baixa autonomia, decisões são centralizadas na liderança.", valor: 2.5 },
                    { texto: "Alguma autonomia, mas com forte controle gerencial.", valor: 5 },
                    { texto: "Boa autonomia, mas ainda há necessidade de aprovação frequente.", valor: 7.5 },
                    { texto: "Alta autonomia, com responsabilidade distribuída e confiança nas equipes.", valor: 10 }
                ]
            },
            {
                pergunta: "Qual é a prioridade dada ao feedback e à comunicação interna na sua empresa?",
                respostas: [
                    { texto: "Feedback e comunicação interna são negligenciados.", valor: 2.5 },
                    { texto: "Feedback ocasional, sem canais formais de comunicação.", valor: 5 },
                    { texto: "Feedback regular, mas com falhas na comunicação interna.", valor: 7.5 },
                    { texto: "Feedback contínuo e comunicação interna bem estruturada.", valor: 10 }
                ]
            }
        ],
        mensagens: {
            critico: "A cultura de crescimento na sua empresa precisa de atenção. Incentivar a inovação e oferecer suporte são essenciais para impulsionar o crescimento.",
            abaixo: "Sua empresa está começando a valorizar a inovação, mas ainda precisa de um apoio mais estruturado. Pense em criar programas que incentivem e recompensem a inovação.",
            acelerando: "Sua cultura de crescimento está indo bem. A inovação é incentivada e recompensada, mas ainda dá para melhorar os processos e as recompensas.",
            letsGrowth: "Ótimo trabalho! Sua empresa tem uma cultura de crescimento forte e inovadora. Continue incentivando e recompensando a inovação para manter o ritmo acelerado."
        }
        
    },
    {
        tema: "Operações e Eficiência",
        perguntas: [
            {
                pergunta: "Como você descreveria a eficiência dos processos operacionais da sua empresa?",
                respostas: [
                    { texto: "Processos são ineficientes, causando atrasos e retrabalho frequente.", valor: 2.4 },
                    { texto: "Processos são medianamente eficientes, com espaço para melhorias.", valor: 5 },
                    { texto: "Processos eficientes, mas ainda há oportunidades de otimização.", valor: 7.6 },
                    { texto: "Processos altamente eficientes, otimizados e em constante melhoria.", valor: 10 }
                ]
            },
            {
                pergunta: "Qual é o nível de automação nas operações da sua empresa?",
                respostas: [
                    { texto: "Baixa automação, a maioria dos processos é manual.", valor: 2.5 },
                    { texto: "Automação básica, com processos-chave ainda manuais.", valor: 5.1 },
                    { texto: "Boa automação, mas com algumas áreas ainda manuais.", valor: 7.5 },
                    { texto: "Alta automação, com processos integrados e otimizados.", valor: 10 }
                ]
            },
            {
                pergunta: "Como a empresa gerencia os recursos (humanos, tecnológicos, financeiros)?",
                respostas: [
                    { texto: "Gestão ineficiente, recursos frequentemente mal alocados.", valor: 2.5 },
                    { texto: "Gestão básica, com alocação ocasionalmente inadequada.", valor: 5.1 },
                    { texto: "Boa gestão de recursos, com algumas áreas a melhorar.", valor: 7.5 },
                    { texto: "Gestão excelente, com alocação otimizada e eficiente dos recursos.", valor: 10 }
                ]
            },
            {
                pergunta: "Como a empresa monitora e mede a performance das suas operações?",
                respostas: [
                    { texto: "Não há monitoramento consistente, decisões são baseadas em suposições.", valor: 2.4 },
                    { texto: "Monitoramento básico, com métricas superficiais.", valor: 5 },
                    { texto: "Monitoramento regular, mas sem uma análise aprofundada.", valor: 7.6 },
                    { texto: "Monitoramento detalhado e contínuo, com análise de dados para tomada de decisões.", valor: 10 }
                ]
            },
            {
                pergunta: "Como sua empresa lida com a gestão de fornecedores e parceiros?",
                respostas: [
                    { texto: "Relação fraca, com fornecedores e parceiros mal gerenciados.", valor: 2.5 },
                    { texto: "Gestão básica, mas com falhas na comunicação e alocação.", valor: 5 },
                    { texto: "Relação boa, mas ainda com desafios ocasionais.", valor: 7.5 },
                    { texto: "Gestão excelente, com parcerias estratégicas e comunicação eficaz.", valor: 10 }
                ]
            },
            {
                pergunta: "Como a empresa administra os fluxos de trabalho e prazos?",
                respostas: [
                    { texto: "Fluxos de trabalho e prazos são frequentemente desorganizados e perdidos.", valor: 2.5 },
                    { texto: "Administração básica, com alguns atrasos ocasionais.", valor: 5 },
                    { texto: "Administração eficiente, mas com algumas falhas de coordenação.", valor: 7.5 },
                    { texto: "Administração excelente, com fluxos de trabalho bem definidos e prazos rigorosamente cumpridos.", valor: 10 }
                ]
            }
        ],
        mensagens: {
            critico: "As operações da sua empresa estão precisando de atenção urgente. Revisar e otimizar processos é vital para reduzir atrasos e retrabalho.",
            abaixo: "Sua empresa tem processos operacionais básicos, mas dá para melhorar bastante. Focar na eficiência e automação pode trazer grandes resultados.",
            acelerando: "As operações estão funcionando bem, mas ainda há como otimizar e melhorar a eficiência. Investir mais em automação pode ser um grande passo.",
            letsGrowth: "Muito bem! Suas operações são eficientes, com processos otimizados e em constante melhoria. Continue inovando para manter e melhorar essa eficiência."
        }
        
    },
    {
        tema: "Marketing e Vendas",
        perguntas: [
            {
                pergunta: "Como sua empresa define o público-alvo e as personas de clientes?",
                respostas: [
                    { texto: "Não há definição clara, público-alvo é genérico.", valor: 2.4 },
                    { texto: "Público-alvo é definido, mas sem detalhes nas personas.", valor: 5.1 },
                    { texto: "Público-alvo bem definido, com personas básicas.", valor: 7.6 },
                    { texto: "Público-alvo e personas detalhadamente definidos e revisados periodicamente.", valor: 10 }
                ]
            },
            {
                pergunta: "Como a empresa estrutura suas campanhas de marketing?",
                respostas: [
                    { texto: "Não há uma estrutura clara, campanhas são lançadas de forma aleatória.", valor: 2.5 },
                    { texto: "Estrutura básica, com campanhas esporádicas.", valor: 5 },
                    { texto: "Estrutura organizada, mas sem uma estratégia integrada.", valor: 7.5 },
                    { texto: "Estrutura sólida, com campanhas integradas e alinhadas às metas de crescimento.", valor: 10 }
                ]
            },
            {
                pergunta: "Como a empresa gerencia o funil de vendas?",
                respostas: [
                    { texto: "Não há um funil de vendas claro, leads não são bem gerenciados.", valor: 2.45 },
                    { texto: "Funil básico, mas sem uma gestão ativa de leads.", valor: 5 },
                    { texto: "Funil bem definido, mas com falhas na gestão de leads.", valor: 7.5 },
                    { texto: "Funil de vendas bem gerenciado, com acompanhamento e otimização contínuos.", valor: 10 }
                ]
            },
            {
                pergunta: "Como você avalia a integração entre as equipes de marketing e vendas?",
                respostas: [
                    { texto: "Não há integração, equipes trabalham de forma isolada.", valor: 2.5 },
                    { texto: "Integração ocasional, sem alinhamento contínuo.", valor: 5 },
                    { texto: "Boa integração, mas com áreas a melhorar.", valor: 7.5 },
                    { texto: "Integração excelente, com comunicação constante e alinhamento estratégico.", valor: 10 }
                ]
            },
            {
                pergunta: "Qual é o papel dos dados e da análise na tomada de decisões de marketing e vendas?",
                respostas: [
                    { texto: "Decisões baseadas em intuição, sem análise de dados.", valor: 2.5 },
                    { texto: "Alguma análise de dados, mas sem impacto significativo nas decisões.", valor: 5 },
                    { texto: "Análise de dados regular, mas com limitações em profundidade.", valor: 7.5 },
                    { texto: "Decisões totalmente baseadas em dados, com análises detalhadas e contínuas.", valor: 10 }
                ]
            },
            {
                pergunta: "Como a empresa avalia o retorno sobre investimento (ROI) das campanhas de marketing?",
                respostas: [
                    { texto: "ROI não é avaliado de forma consistente.", valor: 2.5 },
                    { texto: "Avaliação básica do ROI, sem análise aprofundada.", valor: 5 },
                    { texto: "ROI é avaliado regularmente, mas sem ações corretivas frequentes.", valor: 7.5 },
                    { texto: "ROI é monitorado detalhadamente, com ajustes contínuos nas campanhas.", valor: 10 }
                ]
            }
        ],
        mensagens: {
            critico: "Sua abordagem de marketing e vendas precisa de uma revisão urgente. Definir melhor o público-alvo e as personas é essencial para direcionar suas campanhas.",
            abaixo: "Sua empresa tem uma noção básica do público-alvo, mas precisa detalhar mais as personas para melhorar a eficácia das campanhas.",
            acelerando: "Seu marketing e vendas estão no caminho certo, com público-alvo definido. Integrar melhor os canais e revisar periodicamente pode elevar seus resultados.",
            letsGrowth: "Excelente trabalho! Sua estratégia de marketing e vendas é bem estruturada, com público-alvo e personas claros e revisados regularmente. Continue assim para maximizar o crescimento."
        }
        
    },
    {
        tema: "Tecnologia e Inovação",
        perguntas: [
            {
                pergunta: "Como sua empresa adota novas tecnologias em suas operações?",
                respostas: [
                    { texto: "Adoção lenta, com resistência significativa.", valor: 2.4 },
                    { texto: "Adoção moderada, mas sem planejamento estratégico.", valor: 5 },
                    { texto: "Adoção boa, com algum planejamento, mas com áreas de resistência.", valor: 7.5 },
                    { texto: "Adoção rápida e estratégica, com plano claro de implementação.", valor: 10 }
                ]
            },
            {
                pergunta: "Como a empresa utiliza a análise de dados em suas operações diárias?",
                respostas: [
                    { texto: "Análise de dados inexistente, decisões são tomadas sem base analítica.", valor: 2.45 },
                    { texto: "Análise básica, com pouca aplicação prática.", valor: 5.1 },
                    { texto: "Análise regular, mas sem integração total nos processos.", valor: 7.5 },
                    { texto: "Análise de dados robusta, integrada em todos os processos de tomada de decisão.", valor: 10 }
                ]
            },
            {
                pergunta: "Como a empresa investe em pesquisa e desenvolvimento (P&D)?",
                respostas: [
                    { texto: "Não há investimentos em P&D.", valor: 2.5 },
                    { texto: "Investimento esporádico e sem estratégia clara.", valor: 5 },
                    { texto: "Investimento regular, mas com impacto limitado.", valor: 7.6 },
                    { texto: "Investimento estratégico e contínuo, com foco em inovação e crescimento.", valor: 10 }
                ]
            },
            {
                pergunta: "Qual é o papel da automação no crescimento da sua empresa?",
                respostas: [
                    { texto: "Automação quase inexistente, processos são majoritariamente manuais.", valor: 2.5 },
                    { texto: "Automação básica, com alguns processos automatizados.", valor: 5 },
                    { texto: "Automação razoável, com planos de expansão.", valor: 7.5 },
                    { texto: "Automação bem integrada, impulsionando o crescimento de forma contínua.", valor: 10 }
                ]
            },
            {
                pergunta: "Como a empresa lida com a cibersegurança e proteção de dados?",
                respostas: [
                    { texto: "Pouca ou nenhuma atenção à cibersegurança.", valor: 2.5 },
                    { texto: "Atenção básica, com algumas medidas de proteção.", valor: 5 },
                    { texto: "Boas práticas de cibersegurança, mas com áreas de risco.", valor: 7.5 },
                    { texto: "Cibersegurança robusta, com políticas e práticas bem definidas e atualizadas.", valor: 10 }
                ]
            },
            {
                pergunta: "Como a empresa gerencia a implementação de novas tecnologias e a capacitação das equipes?",
                respostas: [
                    { texto: "Implementação e capacitação são mínimas ou inexistentes.", valor: 2.5 },
                    { texto: "Implementação básica, com pouca capacitação das equipes.", valor: 5 },
                    { texto: "Implementação razoável, com capacitação esporádica.", valor: 7.5 },
                    { texto: "Implementação estratégica, com capacitação contínua das equipes.", valor: 10 }
                ]
            }
        ],
        mensagens: {
            critico: "Sua empresa está ficando para trás na adoção de tecnologias, o que pode comprometer seu crescimento. Adotar uma estratégia tecnológica clara é urgente.",
            abaixo: "Sua empresa está começando a adotar novas tecnologias, mas precisa de um planejamento mais robusto para superar resistências internas.",
            acelerando: "Sua empresa está indo bem na adoção de novas tecnologias, mas ainda há resistências a superar. Continue planejando estrategicamente para manter o ritmo.",
            letsGrowth: "Parabéns! Sua empresa está na frente na adoção tecnológica, com um plano estratégico claro. Continue explorando novas oportunidades para manter sua vantagem competitiva."
        }
        
    },
    {
        tema: "Customer Success e Experiência do Cliente",
        perguntas: [
            {
                pergunta: "Como a empresa gerencia a jornada do cliente?",
                respostas: [
                    { texto: "Não há gestão clara, clientes são acompanhados de forma esporádica.", valor: 2.4 },
                    { texto: "Gestão básica, com acompanhamento em pontos-chave.", valor: 5 },
                    { texto: "Gestão boa, mas sem integração entre todos os pontos de contato.", valor: 7.5 },
                    { texto: "Gestão excelente, com acompanhamento contínuo e integrado ao longo de toda a jornada.", valor: 10 }
                ]
            },
            {
                pergunta: "Como a empresa coleta e utiliza feedback de clientes?",
                respostas: [
                    { texto: "Feedback raramente é coletado ou utilizado.", valor: 2.45 },
                    { texto: "Feedback é coletado, mas raramente é implementado.", valor: 5 },
                    { texto: "Feedback é regularmente coletado e ocasionalmente implementado.", valor: 7.6 },
                    { texto: "Feedback é ativamente coletado e utilizado para melhorias contínuas.", valor: 10 }
                ]
            },
            {
                pergunta: "Qual é o nível de personalização no atendimento ao cliente?",
                respostas: [
                    { texto: "Atendimento genérico, sem personalização.", valor: 2.5 },
                    { texto: "Personalização básica, com foco em alguns clientes.", valor: 5.1 },
                    { texto: "Bom nível de personalização, mas com limitações em escala.", valor: 7.5 },
                    { texto: "Alta personalização, com foco em todos os clientes e escalável.", valor: 10 }
                ]
            },
            {
                pergunta: "Como a empresa gerencia reclamações e problemas dos clientes?",
                respostas: [
                    { texto: "Gestão reativa, sem um processo claro.", valor: 2.5 },
                    { texto: "Gestão básica, com solução de problemas recorrente.", valor: 5.1 },
                    { texto: "Boa gestão, com processos para resolver a maioria das reclamações.", valor: 7.5 },
                    { texto: "Gestão proativa, com processos para antecipar e resolver problemas antes que eles ocorram.", valor: 10 }
                ]
            },
            {
                pergunta: "Qual é o nível de satisfação geral dos clientes?",
                respostas: [
                    { texto: "Alta insatisfação, com muitas reclamações.", valor: 2.5 },
                    { texto: "Satisfação moderada, com algumas reclamações recorrentes.", valor: 5 },
                    { texto: "Boa satisfação, mas com áreas que precisam de melhoria.", valor: 7.5 },
                    { texto: "Alta satisfação, com feedback positivo contínuo e poucas reclamações.", valor: 10 }
                ]
            },
            {
                pergunta: "Como a empresa fideliza seus clientes?",
                respostas: [
                    { texto: "Não há estratégias de fidelização em prática.", valor: 2.5 },
                    { texto: "Estratégias de fidelização básicas, sem análise de eficácia.", valor: 5 },
                    { texto: "Estratégias de fidelização boas, mas sem personalização.", valor: 7.5 },
                    { texto: "Estratégias de fidelização robustas, personalizadas e com monitoramento contínuo de eficácia.", valor: 10 }
                ]
            }
        ],
        mensagens: {
            critico: "O sucesso e a experiência do cliente precisam de melhorias urgentes. Melhorar o acompanhamento e a gestão da jornada do cliente é essencial para reter e fidelizar clientes.",
            abaixo: "Sua empresa tem um acompanhamento básico da jornada do cliente, mas precisa melhorar a integração entre os pontos de contato para otimizar a experiência.",
            acelerando: "Sua empresa está gerenciando bem a jornada do cliente, mas pode melhorar a integração entre todos os pontos de contato. Investir em ferramentas de acompanhamento contínuo pode ser muito útil.",
            letsGrowth: "Excelente! Você está gerenciando a jornada do cliente de forma exemplar. Continue melhorando a experiência do cliente para garantir alta satisfação e lealdade."
        }
        
    }
];

module.exports = data;
