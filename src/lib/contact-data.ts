import { RiMailFill, RiWhatsappFill } from "@remixicon/react";

export const whatsappNumber = "5519992752708";
export const email = "contato@coimbraprotec.com.br";

export const navigationContacts = [
  {
    id: 1,
    label: "Whatsapp",
    Icon: RiWhatsappFill as React.ElementType,
    link: `https://wa.me/${whatsappNumber}`,
    contact: whatsappNumber,
  },
  {
    id: 2,
    label: "Email",
    Icon: RiMailFill as React.ElementType,
    link: `mailto:${email}`,
    contact: email,
  },
];
