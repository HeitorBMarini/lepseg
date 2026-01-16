"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ChevronUp } from "lucide-react";
import { contactInfo } from "@/app/data/contactInfo";
import { socialLinks } from "../data/socialLinks";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Quem Somos", href: "/a-lepseg" },
  { label: "Treinamentos", href: "/treinamentos" },
  { label: "Galeria", href: "/galeria" },
  { label: "Contato", href: "/contato" },
  { label: "Mapa do Site", href: "/mapa-do-site" },
];

export default function Footer() {
  const phone = contactInfo.phoneGroup.items?.[0]; // telefone
  const email = contactInfo.emailGroup.items?.[0];

  return (
    <footer
      className="
        relative text-white
        pt-16 pb-8
      "
      style={{
        background:
          "radial-gradient(80.65% 107.8% at 10.68% 16.98%, #333636 0%, #222424 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* GRID */}
        <div className="grid gap-12 lg:grid-cols-3 items-start">
          {/* COL 1 - LOGO + SOCIAL */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <Image
              src="/imgs/logo.png"
              alt="LepSeg"
              width={120}
              height={120}
              className="object-contain"
            />

            <div className="mt-6 flex items-center justify-center lg:justify-start gap-4 text-white/80">
              {contactInfo.socialGroup.items.map((s, index) => {
                const Icon = s.icon;

                return (
                  <a
                    key={index}
                    href={s.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center hover:border-white/35 transition"
                    aria-label={s.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* COL 2 - NAV */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-sm font-semibold text-white/90">Navegação</h3>

            <ul className="mt-5 space-y-2 text-sm text-white/70">
              {navLinks.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="hover:text-(--primary-color) transition-colors"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3 - CONTATO */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-sm font-semibold text-white/90">Contato</h3>

            <div className="mt-5 space-y-3 text-sm text-white/70">
              {/* Endereço */}
              <div className="flex items-start gap-2 justify-center lg:justify-start">
                <MapPin className="mt-0.5 text-(--primary-color)" size={16} />
                <p className="whitespace-pre-line leading-relaxed">
                  {contactInfo.location.text}
                </p>
              </div>

              {/* Telefone */}
              {/* Telefones (Telefone + WhatsApp) */}
              {contactInfo.phoneGroup.items.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-2 justify-center lg:justify-start hover:text-white transition"
                  >
                    <Icon size={16} className="text-(--primary-color)" />
                    <span>{item.label}</span>
                  </a>
                );
              })}

              {/* E-mails */}
              {contactInfo.emailGroup.items.map((email, index) => (
                <a
                  key={index}
                  href={email.href}
                  className="flex items-center gap-2 justify-center lg:justify-start hover:text-white transition"
                >
                  <email.icon className="text-(--primary-color)" size={16} />
                  <span>{email.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-12 h-px w-full bg-white/10" />

        {/* BOTTOM */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-white/50">
          <span>Copyright © LepSeg</span>
        </div>
      </div>

      {/* BOTÃO VOLTAR AO TOPO (igual print) */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
          fixed right-6 bottom-6 z-50
          h-12 w-12 rounded-full
          bg-(--primary-color) text-white
          flex items-center justify-center
          shadow-lg hover:brightness-110 transition
        "
        aria-label="Voltar ao topo"
      >
        <ChevronUp />
      </button>
    </footer>
  );
}
