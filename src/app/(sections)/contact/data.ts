import {
  RiCalendar2Fill,
  RiWallet3Fill,
  RiWhatsappFill,
} from "@remixicon/react";

export const contact = [
  {
    id: 1,
    title: "Precisando de um contato imediato?",
    description:
      "Entre em contato conosco pelo nosso número do WhatsApp e retornaremos o mais rápido possível.",
    icon: RiWhatsappFill as React.ElementType,
    buttonText: "Chamar no WhatsApp",
    link: "https://wa.me/5519992752708",
  },
  {
    id: 2,
    title: "Precisando de um orçamento?",
    description:
      "Clique no link abaixo e preencha o formulário com detalhes do serviço desejado ou solicite um orçamento via WhatsApp.",
    icon: RiWallet3Fill as React.ElementType,
    buttonText: "Solicitar orçamento",
    link: "/orcamento",
  },
  {
    id: 3,
    title: "Agende uma visita técnica",
    description:
      "Precisa de avaliação no local? Agende uma visita técnica e nosso técnico fará a inspeção e orçamento sem compromisso.",
    icon: RiCalendar2Fill as React.ElementType,
    buttonText: "Agendar visita",
    link: "/agendar-visita",
  },
];
