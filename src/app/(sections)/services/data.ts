import {
  RiAlarmWarningFill,
  RiAncientGateFill,
  RiChargingPile2Fill,
  RiCommandFill,
  RiVidiconFill,
  RiWrenchFill,
} from "@remixicon/react";

export const services = [
  {
    id: 1,
    title: "Automatização de portões elétricos",
    description:
      "Instalação e modernização de automatizadores para portões deslizantes, basculantes e pivotantes. Ajustes, programação de controles e manutenção preventiva para maior segurança e durabilidade.",
    icon: RiAncientGateFill as React.ElementType,
  },
  {
    id: 2,
    title: "Alarmes",
    description:
      "Projeto, instalação e manutenção de sistemas de alarme residenciais e comerciais, com sensores de presença, abertura e centrais configuradas para notificações por telefone/app. Testes e reparos para garantir funcionamento 24/7.",
    icon: RiAlarmWarningFill as React.ElementType,
  },
  {
    id: 3,
    title: "Câmeras (CFTV / IP)",
    description:
      "Instalação, configuração e manutenção de sistemas de câmeras (IP e analógicas), gravação e acesso remoto via aplicativo. Soluções para monitoramento contínuo e evidências de segurança.",
    icon: RiVidiconFill as React.ElementType,
  },
  {
    id: 4,
    title: "Cercas elétricas",
    description:
      "Instalação e manutenção de cercas elétricas com rede segura e aterramento correto, inspeção periódica e ajustes para operação eficiente e dentro das normas de segurança. Ideal para proteção perimetral de casas, comércios e indústrias.",
    icon: RiChargingPile2Fill as React.ElementType,
  },
  {
    id: 5,
    title: "Concertinas",
    description:
      "Fornecimento e instalação de concertina (espiral) para reforço de muros e portões, com opções galvanizadas e galvanizadas com PVC. Montagem profissional e fixação segura para alta resistência e longa vida útil.",
    icon: RiCommandFill as React.ElementType,
  },
  {
    id: 6,
    title: "Reparos elétricos",
    description:
      "Serviços elétricos gerais relacionados a sistemas de segurança e automação: diagnóstico, troca de componentes, manutenção de quadros de comando e correção de falhas elétricas. Atendimento técnico rápido com garantia de serviço.",
    icon: RiWrenchFill as React.ElementType,
  },
];
