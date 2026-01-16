"use client";

import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "../data/contactInfo";

export default function WhatsappButton() {
  // Procura o item que tenha o ícone WhatsApp
  const whatsapp = contactInfo.phoneGroup.items.find(
    (item) => item.icon === FaWhatsapp
  );

  if (!whatsapp) return null;

  const message = "Olá! Gostaria de mais informações.";
  const link = `${whatsapp.href}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="
        fixed md:bottom-20 bottom-40 right-5 z-50 
        flex items-center justify-center
        w-12 h-12 
        rounded-full 
        bg-green-500 text-white 
        shadow-xl shadow-black/20
        hover:bg-green-600 
        transition-all duration-200
        animate-[pulse_2.5s_ease-in-out_infinite]
        
        md:w-14 md:h-14 md:text-4xl
      "
    >
      <FaWhatsapp className="text-3xl md:text-[38px]" />
    </a>
  );
}
