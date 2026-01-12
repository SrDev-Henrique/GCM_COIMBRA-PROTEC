import { faker } from "@faker-js/faker";

export const clientServices = [
  {
    id: 1,
    title: "Automatização de portão deslizante",
    description:
      "Nosso cliente tinha problemas em entrar em sua residência em horários de pico por conta da necessidade de sair de seu veículo para poder abrir o portão e estacionar seu carro, realizamos a automatização de seu portão para um portão deslizante solucionando o seu problema.",
    serviceImage: "/images/portoes-eletricos.webp",
    clientName: "João da Silva",
    clientImage: faker.image.personPortrait(),
    price: faker.number.int({ min: 1000, max: 10000 }),
    href: "/servicos/automatizacao-de-portao-deslizante-joao-da-silva",
    videoUrl:
      "https://d3v6dicq4pzaym.cloudfront.net/vi_vs_capangas_legendado.mp4",
    videoThumbnail: "/images/portoes-eletricos.webp",
    useCase: {
      title: "Automatização de portão deslizante - caso João Silva",
      contact: {
        paragraphs: [
          "Nós recebemos o contato do João por meio do formulário do site: ele relatou a frustração diária de ter que sair do carro para abrir o portão em horários de pico — problema que atrapalhava a rotina da família e aumentava o risco de perda de tempo e segurança. Agendamos uma visita técnica no mesmo dia útil para entender a situação in loco e trazer uma solução prática.",
        ],
      },
      problem: {
        paragraphs: [
          "Na vistoria inicial nossa equipe fez uma inspeção completa: medimos o vão e o peso do portão, verificamos o estado das roldanas e trilhos, analisamos o batente e as folgas, testamos o acabamento elétrico existente e checamos a alimentação no quadro. Identificamos que o conjunto mecânico estava em boas condições, mas o portão era pesado o suficiente para exigir um motor com torque adequado e controles com proteção contra sobrecarga — além disso, não havia fotocélulas nem sistemas de segurança instalados, o que aumentava o risco para crianças e veículos.",
        ],
      },
      service: {
        paragraphs: [
          "Com esses dados, elaboramos um plano de trabalho claro e transparente. Propusemos a automatização com motor especificado para a massa e frequência de uso do portão, instalação de painel de comando com proteção contra surtos, limitadores de curso, fotocélulas e dois controles remotos multiusuário. Enviamos orçamento detalhado com prazos (visita técnica + 1 dia de instalação + testes) e orientações sobre manutenção preventiva. O João aprovou e marcamos a execução.",
          "No dia da obra nossa equipe executou a remoção parcial do mecanismo antigo (quando necessário), fixou o suporte do motor, alinhou trilhos e roldanas, instalou o motor de acionamento e o painel de comando em caixa estanque, e fez toda a fiação com aterramento e proteção. Em seguida programamos limites de abertura/fechamento, configuramos a desaceleração para um movimento suave, e instalamos fotocélulas e contato de segurança. Realizamos testes em diferentes condições (com carro parado, com pessoa próxima, ciclos repetidos) até garantir estabilidade e segurança. Finalizamos com vedação e proteção contra intempéries nos pontos elétricos.",
        ],
      },
      conclusion: {
        paragraphs: [
          "A entrega incluiu a orientação prática ao João: como usar os controles, trocar baterias, acionar o modo manual em emergências e os cuidados simples de manutenção. Também deixamos um relatório com o que foi instalado, garantias e recomendações para revisões periódicas. O resultado foi imediato — João voltou a entrar sem sair do carro, ganhou mais segurança e tempo no dia a dia, e relatou grande tranquilidade ao chegar à noite. Para nós, foi mais um projeto cumprido com sucesso — solução técnica alinhada à experiência do usuário.",
        ],
      },
    },
  },
  {
    id: 2,
    title: "Reparo de motor de portão",
    description:
      "O cliente notou que, ao chegar em casa à noite, o portão emperrava e o motor fazia um ruído alto antes de parar — em dias de chuva o problema piorava. Após inspeção, identificamos escova desgastada e acoplamento desalinhado. Substituímos as peças, reajustamos o alinhamento, testamos dezenas de aberturas/fechamentos e deixamos o portão silencioso e confiável novamente. Agora o cliente entra com segurança e sem se preocupar com falhas.",
    serviceImage: "/images/service-2.webp",
    clientName: "Mariana Costa",
    clientImage: faker.image.personPortrait(),
    price: faker.number.int({ min: 300, max: 3500 }),
    href: "/servicos/reparo-de-motor-mariana-costa",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    videoThumbnail: "/images/service-2.webp",
    useCase: {
      title: "Reparo de motor de portão - caso Mariana Costa",
      contact: {
        paragraphs: [
          "Recebemos a solicitação da Mariana via WhatsApp: ela relatou que, nas últimas semanas, o motor do portão começava a chiar e, em alguns dias, travava durante a abertura, obrigando-a a sair do carro para forçar a movimentação. Como a família costuma chegar tarde, a insegurança e o incômodo eram constantes. Agendamos uma visita técnica para o dia seguinte, priorizando uma janela horária que não atrapalhasse sua rotina.",
        ],
      },
      problem: {
        paragraphs: [
          "Na vistoria identificamos sinais claros de desgaste no motor: escovas com consumo avançado, acoplamento levemente desalinhado e folga nos rolamentos. Também observamos presença de poeira e umidade que haviam comprometido a isolação em alguns pontos, além de lubrificação antiga e endurecida. Esses fatores juntos causavam ruído, aquecimento e perda de torque em alguns ciclos, explicando as falhas intermitentes relatadas pela cliente.",
        ],
      },
      service: {
        paragraphs: [
          "Com o diagnóstico em mãos apresentamos à Mariana um plano objetivo: substituição das escovas, troca do acoplamento e rolamentos danificados, limpeza interna completa, aplicação de lubrificante recomendado e verificação do circuito de comando. Discutimos opções (reparo com peças originais ou substituição por kit recondicionado) e oferecemos o orçamento detalhado com tempo de execução estimado. Assim que aprovado, programamos a intervenção para o dia seguinte.",
          "Durante a execução desmontamos o casco do motor, removemos os componentes comprometidos e procedemos com a limpeza e secagem das partes elétricas. Instalamos escovas novas, rolamentos e acoplamento de precisão, reaplicamos lubrificante adequado nas partes móveis e revisamos a fiação e conectores. Recolocamos o motor, ajustamos o torque e calibramos o painel de comando. Finalizamos com testes de ciclo completos (abertura/fechamento repetidos, simulação com veículo parado na entrada e verificação de temperaturas), garantindo estabilidade e silêncio operacional.",
        ],
      },
      conclusion: {
        paragraphs: [
          "Entregamos o sistema plenamente funcional: o portão voltou a operar sem ruídos excessivos, com arrancada e parada suaves e sem perda de força. Explicamos à Mariana as intervenções realizadas, entregamos a nota técnica das peças trocadas, oferecemos garantia sobre o serviço e orientações de manutenção preventiva (pontos de lubrificação e periodicidade de revisão). A cliente relatou alívio por não precisar mais sair do carro para forçar o portão e destacou a confiança em poder contar conosco para futuras manutenções. Para a nossa equipe, foi um reparo que reforçou a importância de diagnóstico rápido e solução com peças e procedimentos adequados. ✅",
        ],
      },
    },
  },
  {
    id: 3,
    title: "Instalação de controle remoto",
    description:
      "O cliente vivia tendo que sair do carro para abrir o portão porque os controles antigos estavam perdidos ou sem bateria. Instalamos um sistema de controle remoto multiusuário, programamos chaves reservas e deixamos a interface intuitiva. Em poucos minutos ele voltou a entrar sem sair do veículo, e ganhou ainda acesso remoto para familiares — problema resolvido e rotina muito mais prática.",
    serviceImage: "/images/service-3.webp",
    clientName: "Carlos Ferreira",
    clientImage: faker.image.personPortrait(),
    price: faker.number.int({ min: 150, max: 900 }),
    href: "/servicos/instalacao-controle-remoto-carlos-ferreira",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    videoThumbnail: "/images/service-3.webp",
    useCase: {
      title: "Instalação de controle remoto - caso Carlos Ferreira",
      contact: {
        paragraphs: [
          "O Carlos nos procurou após perder os controles antigos e perceber a dificuldade de sempre ter que abrir o portão manualmente. Ele nos contatou pelo telefone e descreveu que precisava de uma solução simples, confiável e com possibilidade de múltiplos usuários (família e empregada doméstica). Agendamos visita técnica para avaliação e apresentamos opções claras de controles e receptor compatíveis.",
        ],
      },
      problem: {
        paragraphs: [
          "Na inspeção percebemos que o receptor do portão estava funcionando, mas os controles disponíveis eram antigos e muitos haviam sido perdidos ou estavam danificados. Além disso, o receptor tinha apenas dois slots registrados, o que impedia a inclusão de novos controles sem reprogramação completa. O cliente precisava de uma solução que não exigisse substituição total do receptor, mas que ampliasse a conveniência e a segurança.",
        ],
      },
      service: {
        paragraphs: [
          "Propusemos duas alternativas: instalar um receptor universal compatível (mantendo a fiação existente) ou programar um receptor novo com mais slots e funções de segurança. O Carlos optou pela instalação de um receptor novo com capacidade para múltiplos controles e função de bloqueio temporário. Fornecemos orçamento transparente e prazo curto — o cliente aprovou no mesmo dia.",
          "Na execução substituímos o módulo receptor, mantendo a alimentação e o aterramento existentes, e posicionamos o equipamento em caixa protegida contra intempéries. Programamos cinco controles (incluindo um reserva), configuramos códigos únicos para cada usuário e testamos alcance e operação a partir do interior do veículo. Também instalamos um botão de fechamento manual próximo ao portão e deixamos instruções de segurança e troca de pilhas para o Carlos e sua família.",
        ],
      },
      conclusion: {
        paragraphs: [
          "Ao final, entregamos um sistema com operação estável e acesso multiusuário: o Carlos e demais moradores passaram a entrar e sair sem sair do carro, com controles de reserva e possibilidade de bloqueio em caso de perda. Fornecemos um relatório com as configurações, garantias e recomendações de uso. O cliente relatou grande alívio pela praticidade recuperada e elogiou a rapidez da nossa resposta. Note técnico e garantia foram entregues — caso encerrado com sucesso. ✅",
        ],
      },
    },
  },
  {
    id: 4,
    title: "Manutenção preventiva",
    description:
      "Uma família ligou preocupada porque o portão vibrava e travava às vezes; eles temiam que uma pane ocorresse em um dia de festa. Agendamos visita, fizemos revisão completa: lubrificação das trilhas, troca de rolamentos, aperto das dobradiças e calibração dos sensores. Entregamos um laudo e orientações simples de uso. Desde então o portão funciona sem surpresas e os proprietários dormem tranquilos.",
    serviceImage: "/images/service-4.webp",
    clientName: "Aline Ribeiro",
    clientImage: faker.image.personPortrait(),
    price: faker.number.int({ min: 200, max: 1200 }),
    href: "/servicos/manutencao-preventiva-aline-ribeiro",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    videoThumbnail: "/images/service-4.webp",
    useCase: {
      title: "Manutenção preventiva - caso Aline Ribeiro",
      contact: {
        paragraphs: [
          "A Aline entrou em contato pelo telefone preocupada: o portão da casa dela apresentava vibrações e, por vezes, travava na metade do percurso. Como ela receberia familiares para uma comemoração no fim de semana, solicitou uma revisão completa com prioridade. Agendamos uma visita técnica em janela compatível com a rotina dela para garantir que o serviço fosse feito antes do evento.",
        ],
      },
      problem: {
        paragraphs: [
          "Na inspeção inicial constatamos acúmulo de sujeira e ferrugem nos trilhos, rolamentos com folga e dobradiças levemente frouxas. As guias apresentavam desgaste localizado e havia sinais de lubrificação antiga e contaminada. Também detectamos pequenos desajustes no conjunto de batente que causavam impacto em pontos específicos do curso, explicando a vibração e os travamentos intermitentes.",
        ],
      },
      service: {
        paragraphs: [
          "Apresentamos à Aline um plano de manutenção preventiva: limpeza e desobstrução dos trilhos, substituição dos rolamentos com folga, aperto e reaperto das dobradiças e batentes, aplicação de lubrificantes específicos e realinhamento do conjunto. Incluímos no serviço a verificação elétrica rápida (conexões do motor e painel) e a calibração dos sensores de fim de curso para evitar repetições do problema.",
          "Na execução realizamos a limpeza profunda e a retirada de partículas que impediam o curso suave, trocamos os rolamentos comprometidos, reapertamos fixações e ajustamos os batentes. Aplicamos lubrificante apropriado nas partes móveis e testamos o portão em múltiplos ciclos sob diferentes cargas (com e sem veículo na entrada). Também geramos um laudo simples com os pontos verificados, peças trocadas e recomendações de manutenção periódica.",
        ],
      },
      conclusion: {
        paragraphs: [
          "Entregamos o portão funcionando com movimento linear e sem vibrações; os travamentos desapareceram e a operação ficou mais silenciosa. Orientamos a Aline sobre os cuidados básicos (frequência de lubrificação, o que observar em uma revisão rápida) e deixamos um cronograma sugerido para revisões futuras. Ela pôde receber a família sem preocupações e nos relatou satisfação com a rapidez e a limpeza do serviço. Para nós, foi um trabalho de prevenção efetivo, que evitou um possível reparo emergencial. ✅",
        ],
      },
    },
  },
  {
    id: 5,
    title: "Automatização de portão basculante",
    description:
      "O cliente precisava abrir manualmente um portão pesado toda vez que chegava com compras ou crianças no carro. Fizemos a conversão para automatização, instalamos motor adequado e sensores de segurança para evitar fechamento sobre obstáculos. Treinamos o cliente no uso e deixamos o sistema com ajuste fino — agora ele entra e sai com praticidade e tranquilidade, especialmente nos dias corridos.",
    serviceImage: "/images/service-5.webp",
    clientName: "Rafael Gomes",
    clientImage: faker.image.personPortrait(),
    price: faker.number.int({ min: 900, max: 7000 }),
    href: "/servicos/automatizacao-basculante-rafael-gomes",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    videoThumbnail: "/images/service-5.webp",
    useCase: {
      title: "Automatização de portão basculante - caso Rafael Gomes",
      contact: {
        paragraphs: [
          "O Rafael nos procurou após uma série de tentativas cansativas de abrir manualmente o portão basculante sempre que chegava com compras ou com as crianças no carro. Ele descreveu episódios em que o portão prendia no batente e em dias de vento ficava doloroso de manusear. Marcamos uma visita técnica para avaliar viabilidade e medir a estrutura do portão e do batente.",
        ],
      },
      problem: {
        paragraphs: [
          "Durante a vistoria constatamos que o portão era pesado e o braço central apresentava desgaste nas dobradiças, além de folgas no travamento que dificultavam a vedação. A estrutura da moldura não possuía pontos de fixação adequados para um motor convencional, e não havia sensores de segurança—o que tornaria perigosa uma automação sem reforço e ajustes. Também medimos o espaço útil para batentes e verificamos que seria necessário um motor com torque elevado e sistema de desaceleração para evitar impactos.",
        ],
      },
      service: {
        paragraphs: [
          "Apresentamos ao Rafael um plano detalhado: reforço dos pontos de fixação na estrutura, substituição das dobradiças desgastadas, instalação de um motor específico para basculantes com torque adequado, painel de comando com ajuste de força e desaceleração, além de fotocélulas e sensores de fim de curso. Enviamos orçamento com etapas claras (reforço estrutural + montagem do motor + testes) e prazos, e o cliente aprovou a proposta.",
          "No dia da execução reforçamos a moldura com chapas e buchas de ancoragem apropriadas, trocamos as dobradiças e alinhamos o batente. Instalamos o motor com suporte projetado, fixamos o painel em caixa protegida e realizamos toda a passagem elétrica com aterramento. Programamos limites de curso, desaceleração nas fases finais de abertura/fechamento e integramos fotocélulas e botoeiras de emergência. Testamos o sistema em múltiplos ciclos, com cargas simuladas (sacos de compras, veículo parado) e verificamos redundância de segurança para evitar fechamento sobre obstáculos.",
        ],
      },
      conclusion: {
        paragraphs: [
          "Ao finalizar, entregamos ao Rafael um portão automatizado que se moveu de forma suave e segura desde o primeiro acionamento. Ele passou a entrar com muito mais facilidade — especialmente quando vinha com crianças e compras — e ficou satisfeito com o reforço estrutural que eliminou rangidos e folgas. Fornecemos orientação prática sobre uso, manutenção preventiva e comportamento em caso de emergência (liberação manual). Registramos o serviço com nota técnica e garantia, e o Rafael comentou que ganhou tempo, conforto e mais segurança no dia a dia. ✅",
        ],
      },
    },
  },
  {
    id: 6,
    title: "Substituição de painel de comando",
    description:
      "Após uma queda de energia e um pico, o painel do portão parou de responder e o portão ficou inoperante por dias. Diagnosticamos dano no módulo de comando e substituímos por um painel com proteção contra surtos, além de configurar rotinas e backups. Reestabelecemos todas as funções (controles, sensores e travas) e deixamos o cliente com um sistema mais seguro e resiliente contra novas falhas.",
    serviceImage: "/images/service-6.webp",
    clientName: "Patrícia Lima",
    clientImage: faker.image.personPortrait(),
    price: faker.number.int({ min: 250, max: 2500 }),
    href: "/servicos/substituicao-painel-patricia-lima",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    videoThumbnail: "/images/service-6.webp",
    useCase: {
      title: "Substituição de painel de comando - caso Patrícia Lima",
      contact: {
        paragraphs: [
          "A Patrícia nos acionou após uma instabilidade elétrica que deixou o portão sem resposta: às vezes funcionava, às vezes não, e em um pico recente o painel desligou completamente. Ela nos escreveu pelo formulário e solicitou atendimento com urgência, pois dependia do portão para a rotina diária da família.",
        ],
      },
      problem: {
        paragraphs: [
          "Na visita técnica verificamos que o painel apresentava sinais de sobreaquecimento e componentes visivelmente danificados por surtos elétricos. Havia conexões oxidadas e ausência de proteção contra transientes. O comportamento intermitente indicava falha no circuito de comando, tornando o sistema pouco confiável e sujeito a novas queimas em futuras oscilações de rede.",
        ],
      },
      service: {
        paragraphs: [
          "Apresentamos à Patrícia um plano objetivo: substituição do painel por um módulo moderno com proteção contra surtos e supressão de transientes, troca de bornes corroídos e reorganização da fiação em caixa selada. Fornecemos orçamento detalhado e cronograma curto. Com aprovação imediata, programamos a intervenção em uma manhã conveniente para a cliente.",
          "No dia da execução removemos o painel danificado, inspecionamos a fiação existente, substituímos conectores comprometidos e instalamos o novo painel em caixa metálica com tratamentos de proteção. Configuramos parâmetros de segurança (sensibilidade de sensores, tempo de desaceleração e redundâncias), testamos as proteções contra surtos e validamos todas as entradas/saídas. Realizamos ciclos de teste repetidos e medimos tensões para garantir estabilidade.",
        ],
      },
      conclusion: {
        paragraphs: [
          "Entregamos o sistema funcionando de maneira confiável e protegida contra novos picos. Explicamos à Patrícia as medidas adotadas, entregamos a nota técnica com especificação do novo painel e orientações sobre como proceder em casos de queda de energia. Oferecemos um plano opcional de manutenção preventiva para checagem semestral. A cliente relatou alívio e comentou que agora se sente mais segura quanto à proteção elétrica da residência. ✅",
        ],
      },
    },
  },
  {
    id: 7,
    title: "Instalação de sensores e fotocélulas",
    description:
      "Uma residência tinha risco constante de o portão fechar sobre bicicletas e pets porque não havia detecção adequada. Instalamos fotocélulas e sensores laterais, fizemos a calibração e testes de segurança em diversas situações. O cliente ganhou proteção extra e confiança: as crianças agora brincam perto da entrada sem medo e o portão para automaticamente ao detectar obstáculos.",
    serviceImage: "/images/service-7.webp",
    clientName: "Bruno Alves",
    clientImage: faker.image.personPortrait(),
    price: faker.number.int({ min: 180, max: 1800 }),
    href: "/servicos/instalacao-sensores-bruno-alves",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    videoThumbnail: "/images/service-7.webp",
    useCase: {
      title: "Instalação de sensores e fotocélulas - caso Bruno Alves",
      contact: {
        paragraphs: [
          "O Bruno nos procurou preocupado: seus filhos e o pet costumavam brincar próximos à garagem e ele temia que o portão pudesse fechar sobre alguém. Ele entrou em contato por telefone e pediu uma solução que trouxesse segurança imediata sem comprometer a praticidade do dia a dia.",
        ],
      },
      problem: {
        paragraphs: [
          "Na vistoria detectamos que o sistema existente não possuía detecção adequada em toda a largura de passagem — apenas um sensor lateral de baixa sensibilidade e sem redundância. Também havia pontos cegos devido a postes e calhas, o que criava situações em que objetos menores não eram detectados, mantendo o risco de acidentes.",
        ],
      },
      service: {
        paragraphs: [
          "Propusemos a instalação de um conjunto de fotocélulas frontais, sensores laterais e um feixe adicional na altura baixa para detecção de bicicletas e animais. Apresentamos layout de posicionamento, explicando como cada sensor reduziria riscos em pontos específicos. O Bruno aprovou e agendamos a instalação.",
          "Na execução posicionamos fotocélulas com proteção contra intempéries, passamos cabeamento protegido e sincronizamos os sensores ao painel de comando, ajustando tempos de resposta e zonas de sensibilidade. Realizamos calibração fina e uma bateria de testes com crianças, bicicletas e objetos diversos para garantir que o portão parasse sempre ao detectar obstáculos, sem falsos positivos que comprometessem a operação.",
        ],
      },
      conclusion: {
        paragraphs: [
          "Ao finalizar, o sistema apresentou detecção confiável em todas as situações testadas: o portão interrompeu o fechamento sempre que um objeto foi detectado, e os ajustes reduziram alarmes falsos. Orientamos o Bruno sobre manutenção simples (limpeza das lentes e checagem anual) e deixamos um relatório das instalações. Ele nos relatou grande alívio ao ver as crianças brincando novamente sem risco próximo ao portão. Segurança entregue com eficiência. ✅",
        ],
      },
    },
  },
  {
    id: 8,
    title: "Abertura de emergência e chave manual",
    description:
      "Durante uma pane elétrica, o cliente ficou preso fora de casa e precisou de acesso imediato. Instalamos e configuramos um sistema de abertura manual de emergência com chave local e procedimento de uso seguro. Também treinamos o cliente para utilizar o mecanismo sem danificar o motor. Hoje ele tem garantia de acesso mesmo em situações críticas e relata sentir-se mais seguro.",
    serviceImage: "/images/service-8.webp",
    clientName: "Clara Sousa",
    clientImage: faker.image.personPortrait(),
    price: faker.number.int({ min: 120, max: 1200 }),
    href: "/servicos/abertura-emergencia-clara-sousa",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    videoThumbnail: "/images/service-8.webp",
    useCase: {
      title: "Abertura de emergência e chave manual - caso Clara Sousa",
      contact: {
        paragraphs: [
          "A Clara nos chamou após ficar trancada fora de casa durante uma queda de energia: ela não conseguia liberar o motor e precisou pedir ajuda a vizinhos. Procurou nossa assistência por indicação e solicitou uma solução que garantisse acesso mesmo em situações críticas.",
        ],
      },
      problem: {
        paragraphs: [
          "Na verificação constatamos que o mecanismo de liberação manual existente estava emperrado e de difícil acionamento, além de não haver instrução visível para uso em emergência. Isso deixava a família vulnerável em casos de falta de energia ou pane no motor. Era necessário um sistema de liberação confiável e de fácil operação.",
        ],
      },
      service: {
        paragraphs: [
          "Propusemos a instalação de um kit de liberação manual com chave externa e mecanismo de acionamento ergonômico, além de um procedimento documentado para uso em emergência. A Clara gostou da ideia e autorizou a intervenção imediata.",
          "Instalamos a tranca com acionamento por chave, ajustamos o mecanismo de desengate para que pudesse ser acionado sem esforços excessivos e posicionamos etiquetas instruindo o passo a passo. Realizamos simulações de queda de energia e demonstramos a liberação manual para todos os moradores, garantindo que todos soubessem como proceder sem risco de danificar o motor ou a estrutura.",
        ],
      },
      conclusion: {
        paragraphs: [
          "Ao entregar o serviço, a Clara passou a ter acesso garantido mesmo em situações críticas. Ela valorizou especialmente o treinamento prático que demos à família e a documentação com o passo a passo. Oferecemos ainda revisão gratuita de verificação do mecanismo após 30 dias para garantir que tudo permaneça em perfeito funcionamento. Resultado: mais segurança e tranquilidade para a cliente. ✅",
        ],
      },
    },
  },
];
