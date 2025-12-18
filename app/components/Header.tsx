// app/components/Header.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { contactInfo } from "@/app/data/contactInfo";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "A LEPSEG", href: "/a-lepseg" },
  { label: "TREINAMENTOS", href: "/treinamentos" },
  { label: "GALERIA", href: "/galeria" },
  { label: "CONTATO", href: "/contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const phone = contactInfo.phoneGroup.items[0];
  const email = contactInfo.email;

  return (
    <>
      {/* HEADER ABSOLUTO SOBRE O BANNER */}
      <header className="absolute top-0 left-0 w-full z-30 text-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* LINHA DE CIMA: LOGO + CONTATOS (DESKTOP) / LOGO + HAMBURGUER (MOBILE) */}
          <div className="flex items-center justify-between py-0">
            {/* LOGO */}
            <Link href="/" className="flex items-center mt-4">
              <Image
                src="/imgs/logo.png"
                alt="Logo"
                width={110}
                height={110}
                className="object-contain"
              />
            </Link>

            {/* CONTATOS DESKTOP */}
            <div className="hidden md:flex items-center gap-4 text-xs lg:text-sm">
              {/* TELEFONE */}
              {phone && (
                <a
                  href={phone.href}
                  className="flex items-center gap-2 hover:text-[#ffc400] transition-colors"
                >
                  {(() => {
                    const Icon = phone.icon;
                    return <Icon size={16} />;
                  })()}
                  <span>{phone.label}</span>
                </a>
              )}

              <span className="h-4 w-px bg-white/40" />

              {/* EMAIL */}
              <a
                href={email.href}
                className="flex items-center gap-2 hover:text-[#ffc400] transition-colors"
              >
                {(() => {
                  const Icon = email.icon;
                  return <Icon size={16} />;
                })()}
                <span>{email.label}</span>
              </a>
            </div>

            {/* BOTÃO HAMBÚRGUER (MOBILE) */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-full border border-white/40 p-2"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* LINHA + MENU DESKTOP (MANTIDO COMO ESTAVA) */}
          <div className="hidden md:block">
            {/* LINHA BRANCA ACIMA DO MENU (LARGURA LIMITADA + ALINHADA À DIREITA) */}
            <div className="flex justify-end">
              <div className="w-full max-w-125 border-t-2 border-white/70 relative bottom-6.5" />
            </div>

            {/* MENU ALINHADO À DIREITA */}
            <nav className="flex justify-end gap-6 text-xs lg:text-sm font-semibold tracking-wide">
              {navLinks.map((item, index) => {
                const isHome = index === 0; // HOME destacado

                if (isHome) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="
                        inline-flex items-center justify-center
                        px-5 py-1.5
                        bg-[#ffc400]
                        text-black
                        rounded-full
                        shadow-md
                        hover:brightness-105
                        transition
                      "
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="
                      uppercase
                      hover:text-[#ffc400]
                      transition-colors
                    "
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* MENU MOBILE FULLSCREEN (APENAS MOBILE) */}
      <div
        className={`
    fixed inset-x-0 top-0 z-40 
    bg-[#282828] text-white
    px-6 pt-6 pb-12
    rounded-b-3xl shadow-lg
    transform transition-transform duration-300
    ${mobileOpen ? "translate-y-0" : "-translate-y-full"}
  `}
      >
        {/* TOPO: LOGO + X */}
        <div className="flex items-center justify-between mb-10 max-w-6xl mx-auto">
          <Image
            src="/imgs/logo.png"
            alt="Logo"
            width={64}
            height={64}
            className="object-contain"
          />

          <button
            type="button"
            className="
        w-10 h-10 rounded-full border border-white/60
        flex items-center justify-center text-2xl
      "
            onClick={() => setMobileOpen(false)}
          >
            ×
          </button>
        </div>

        {/* CONTEÚDO DO MENU */}
        <div className="max-w-6xl mx-auto px-2 space-y-8">
          {/* CONTATOS MOBILE (se quiser manter) */}
          <div className="space-y-3 text-sm text-center">
            {phone && (
              <a
                href={phone.href}
                className="inline-flex items-center gap-2 hover:text-[#ffc400] transition-colors"
              >
                {(() => {
                  const Icon = phone.icon;
                  return <Icon size={18} />;
                })()}
                <span>{phone.label}</span>
              </a>
            )}

            <div>
              <a
                href={email.href}
                className="inline-flex items-center gap-2 hover:text-[#ffc400] transition-colors mt-1"
              >
                {(() => {
                  const Icon = email.icon;
                  return <Icon size={18} />;
                })()}
                <span>{email.label}</span>
              </a>
            </div>
          </div>

          {/* LINKS DO MENU MOBILE (CENTRALIZADOS) */}
          <nav className="flex flex-col items-center gap-6 text-lg w-full">
            {navLinks.map((item, index) => {
              const isHome = index === 0;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`
              uppercase
              ${isHome ? "text-[#ffc400]" : "text-white"}
              hover:text-[#ffc400]
              transition-colors
            `}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
