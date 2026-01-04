import {
  RiBook2Fill,
  RiCalendar2Fill,
  RiServiceLine,
  RiWallet3Fill,
} from "@remixicon/react";

export const navigationOptions = [
  {
    id: 1,
    label: "Nossos serviços",
    description:
      "Conheça nossos serviços e veja resultados reais dos nossos clientes.",
    Icon: RiServiceLine as React.ElementType,
    link: "/servicos",
  },
  {
    id: 2,
    label: "Agende uma visita técnica",
    description:
      "Precisa de avaliação no local? Agende uma visita técnica sem compromisso.",
    Icon: RiCalendar2Fill as React.ElementType,
    link: "/agendar-visita",
  },
  {
    id: 3,
    label: "Solicite um orçamento",
    description:
      "Descreva o serviço desejado e receba um orçamento sem compromisso.",
    Icon: RiWallet3Fill as React.ElementType,
    link: "/orcamento",
  },
  {
    id: 4,
    label: "Nosso Blog",
    description:
      "Se mantenha informado sobre as melhores soluções para sua segurança e automação.",
    Icon: RiBook2Fill as React.ElementType,
    link: "/blog",
  },
];
