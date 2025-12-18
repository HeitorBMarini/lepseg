// app/components/Header.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "QUEM SOMOS", href: "/quem-somos" },
  { label: "SERVIÇOS", href: "/servicos" },
  { label: "CONTATO", href: "/contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false); // menu mobile

  return (
    <>
      {/* HEADER — MOBILE + DESKTOP */}
      <header
        className="
          w-full md:px-4 px-0 md:py-4 py-0
          md:absolute md:top-6 md:left-1/2 md:-translate-x-1/2 
          z-30
        "
      >
        <div
          className="
            mx-auto max-w-6xl 
            md:rounded-3xl rounded-none

            bg-(--secondary-color) md:bg-white/10
            md:backdrop-blur-md    
            md:border md:border-white/20

            px-6 py-4
            flex items-center justify-between
          "
        >
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/imgs/logo.png"
              alt="Logo Lord Tec"
              width={75}
              height={75}
              className="object-contain"
            />
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-semibold text-white tracking-wide">
            {navLinks.map((item, index) => {
              const isHome = index === 0; // HOME destacado

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    transition-all 
                    md:p-2 
                    hover:rounded-2xl
                    ${
                      isHome
                        ? "bg-(--primary-color) text-black rounded-2xl px-4 py-2 hover:brightness-105"
                        : "hover:bg-(--primary-color)"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* BOTÃO DESKTOP */}
          <Link
            href="/contato"
            className="
              hidden md:inline-flex 
              px-6 py-2 rounded-full 
              font-semibold text-white text-sm
              bg-(--primary-color)
              hover:opacity-90 transition
            "
          >
            FALE CONOSCO
          </Link>

          {/* BOTÃO MOBILE */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* MENU MOBILE FULLSCREEN */}
      <div
        className={`
          fixed inset-x-0 top-0 z-40 
          bg-[#282828] text-[#fafafa]
          px-6 pt-6 pb-12
          rounded-b-3xl shadow-lg
          transform transition-transform duration-300
          ${open ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="flex items-center justify-between mb-10">
          <Image
            src="/imgs/logo.png"
            alt="Logo Lord Tec"
            width={64}
            height={64}
            className="object-contain"
          />

          <button
            className="
              w-10 h-10 rounded-full border border-[#fafafa]
              flex items-center justify-center text-2xl
            "
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col items-center gap-6 text-lg w-full">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label === "HOME"
                ? "Home"
                : item.label === "QUEM SOMOS"
                ? "Quem Somos"
                : item.label === "SERVIÇOS"
                ? "Serviços"
                : item.label === "CONTATO"
                ? "Contato"
                : item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
