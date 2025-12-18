import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const contactInfo = {
  phoneGroup: {
    title: "Telefones",
    items: [
      {
        label: "(19) 9 9994-0028",
        href: "tel:+551999940028",
        icon: Phone,
      },
      {
        label: "WhatsApp",
        href: "https://wa.me/551999940028",
        icon: FaWhatsapp,
      },
    ],
  },

  email: {
    label: "apmae.lasertech@hotmail.com",
    href: "mailto:apmae.lasertech@hotmail.com",
    icon: Mail,
  },

  location: {
    title: "Localização",
    text: "Rod. Vereador Geraldo Dias, 1325,\nB. Leitão - Louveira/SP",
  },
};
