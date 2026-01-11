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
  },
  {
    id: 2,
    title: "Reparo de motor de portão",
    description:
      "O cliente notou que, ao chegar em casa à noite, o portão emperrava e o motor fazia um ruído alto antes de parar — em dias de chuva o problema piorava. Após inspeção, identificamos escova desgastada e acoplamento desalinhado. Substituímos as peças, reajustamos o alinhamento, testamos dezenas de aberturas/fechamentos e deixamos o portão silencioso e confiável novamente. Agora o cliente entra com segurança e sem se preocupar com falhas.",
    serviceImage: faker.image.url(),
    clientName: "Mariana Costa",
    clientImage: faker.image.personPortrait(),
    price: faker.number.int({ min: 300, max: 3500 }),
    href: "/servicos/reparo-de-motor-mariana-costa",
  },
  {
    id: 3,
    title: "Instalação de controle remoto",
    description:
      "O cliente vivia tendo que sair do carro para abrir o portão porque os controles antigos estavam perdidos ou sem bateria. Instalamos um sistema de controle remoto multiusuário, programamos chaves reservas e deixamos a interface intuitiva. Em poucos minutos ele voltou a entrar sem sair do veículo, e ganhou ainda acesso remoto para familiares — problema resolvido e rotina muito mais prática.",
    serviceImage: faker.image.url(),
    clientName: "Carlos Ferreira",
    clientImage: faker.image.personPortrait(),
    price: faker.number.int({ min: 150, max: 900 }),
    href: "/servicos/instalacao-controle-remoto-carlos-ferreira",
  },
  {
    id: 4,
    title: "Manutenção preventiva",
    description:
      "Uma família ligou preocupada porque o portão vibrava e travava às vezes; eles temiam que uma pane ocorresse em um dia de festa. Agendamos visita, fizemos revisão completa: lubrificação das trilhas, troca de rolamentos, aperto das dobradiças e calibração dos sensores. Entregamos um laudo e orientações simples de uso. Desde então o portão funciona sem surpresas e os proprietários dormem tranquilos.",
    serviceImage: faker.image.url(),
    clientName: "Aline Ribeiro",
    clientImage: faker.image.personPortrait(),
    price: faker.number.int({ min: 200, max: 1200 }),
    href: "/servicos/manutencao-preventiva-aline-ribeiro",
  },
  {
    id: 5,
    title: "Automatização de portão basculante",
    description:
      "O cliente precisava abrir manualmente um portão pesado toda vez que chegava com compras ou crianças no carro. Fizemos a conversão para automatização, instalamos motor adequado e sensores de segurança para evitar fechamento sobre obstáculos. Treinamos o cliente no uso e deixamos o sistema com ajuste fino — agora ele entra e sai com praticidade e tranquilidade, especialmente nos dias corridos.",
    serviceImage: faker.image.url(),
    clientName: "Rafael Gomes",
    clientImage: faker.image.personPortrait(),
    price: faker.number.int({ min: 900, max: 7000 }),
    href: "/servicos/automatizacao-basculante-rafael-gomes",
  },
  {
    id: 6,
    title: "Substituição de painel de comando",
    description:
      "Após uma queda de energia e um pico, o painel do portão parou de responder e o portão ficou inoperante por dias. Diagnosticamos dano no módulo de comando e substituímos por um painel com proteção contra surtos, além de configurar rotinas e backups. Reestabelecemos todas as funções (controles, sensores e travas) e deixamos o cliente com um sistema mais seguro e resiliente contra novas falhas.",
    serviceImage: faker.image.url(),
    clientName: "Patrícia Lima",
    clientImage: faker.image.personPortrait(),
    price: faker.number.int({ min: 250, max: 2500 }),
    href: "/servicos/substituicao-painel-patricia-lima",
  },
  {
    id: 7,
    title: "Instalação de sensores e fotocélulas",
    description:
      "Uma residência tinha risco constante de o portão fechar sobre bicicletas e pets porque não havia detecção adequada. Instalamos fotocélulas e sensores laterais, fizemos a calibração e testes de segurança em diversas situações. O cliente ganhou proteção extra e confiança: as crianças agora brincam perto da entrada sem medo e o portão para automaticamente ao detectar obstáculos.",
    serviceImage: faker.image.url(),
    clientName: "Bruno Alves",
    clientImage: faker.image.personPortrait(),
    price: faker.number.int({ min: 180, max: 1800 }),
    href: "/servicos/instalacao-sensores-bruno-alves",
  },
  {
    id: 8,
    title: "Abertura de emergência e chave manual",
    description:
      "Durante uma pane elétrica, o cliente ficou preso fora de casa e precisou de acesso imediato. Instalamos e configuramos um sistema de abertura manual de emergência com chave local e procedimento de uso seguro. Também treinamos o cliente para utilizar o mecanismo sem danificar o motor. Hoje ele tem garantia de acesso mesmo em situações críticas e relata sentir-se mais seguro.",
    serviceImage: faker.image.url(),
    clientName: "Clara Sousa",
    clientImage: faker.image.personPortrait(),
    price: faker.number.int({ min: 120, max: 1200 }),
    href: "/servicos/abertura-emergencia-clara-sousa",
  },
];
