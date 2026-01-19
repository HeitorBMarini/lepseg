import { Phone, Mail, Youtube, Instagram, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const contactInfo = {
  phoneGroup: {
    title: "Telefones",
    items: [
      {
        label: "(11) 94030-3050",
        href: "tel:+5511940303050",
        icon: Phone,
      },
      {
        label: "(11) 94030-3050",
        href: "https://wa.me/5511940303050",
        icon: FaWhatsapp,
      },
    ],
  },

  emailGroup: {
    title: "E-mails",
    items: [
      {
        label: "lindonorribeiro@lepseg.com",
        href: "mailto:lindonorribeiro@lepseg.com",
        icon: Mail,
      },
      {
        label: "pedroribeiro@lepseg.com",
        href: "mailto:pedroribeiro@lepseg.com",
        icon: Mail,
      },
      {
        label: "contato@lepseg.com",
        href: "mailto:contato@lepseg.com",
        icon: Mail,
      },
    ],
  },

  socialGroup: {
    title: "Redes",
    items: [
      {
        label: "YouTube",
        href: "https://www.youtube.com/channel/UCQv8jpNa3bh8VaGkUm6YPKg/posts?pvf=CAI%253D",
        icon: Youtube,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/lepseg_assesoria/",
        icon: Instagram,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/lepseg-assesssria-treinamentos/",
        icon: Linkedin,
      },
    ],
  },

  location: {
    title: "Localização",
    text: "Rua Francisco de Paula Ferraiol, 213\nSão Paulo/SP\nCEP: 05797-290",
  },
};
