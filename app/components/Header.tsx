// app/components/Header.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const phone = contactInfo.phoneGroup.items[0];
  const email = contactInfo.emailGroup.items[0];
  const EmailIcon = email.icon;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-30 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between py-0">
            <Link href="/" className="flex items-center mt-4">
              <Image
                src="/imgs/logo.png"
                alt="Logo"
                width={110}
                height={110}
                className="object-contain"
              />
            </Link>

            <div className="hidden md:flex items-center gap-4 text-xs lg:text-sm">
              {phone && (
                <a
                  href={phone.href}
                  className="flex items-center gap-2 hover:text-(--primary-color) transition-colors"
                >
                  {(() => {
                    const Icon = phone.icon as any;
                    return <Icon size={16} />;
                  })()}
                  <span>{phone.label}</span>
                </a>
              )}

              <span className="h-4 w-px bg-white/40" />

              <a
                href={email.href}
                className="flex items-center gap-2 hover:text-(--primary-color) transition-colors"
              >
                {(() => {
                  const Icon = email.icon as any;
                  return <Icon size={16} />;
                })()}
                <span>{email.label}</span>
              </a>
            </div>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-full border border-white/40 p-2"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          <div className="hidden md:block">
            <div className="flex justify-end">
              <div className="w-full max-w-135 border-t-2 border-white/70 relative bottom-6.5" />
            </div>

            <nav className="flex justify-end items-center gap-6 text-xs lg:text-sm font-semibold tracking-wide">
              {navLinks.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={
                      active
                        ? `
                          inline-flex items-center justify-center
                          px-5 py-1.5
                          bg-(--primary-color)
                          text-black
                          rounded-full
                          shadow-md
                          hover:brightness-105
                          transition
                        `
                        : `
                          uppercase
                          hover:bg-(--primary-color) hover:text-black
                          p-1.5 rounded-full
                          transition-colors
                        `
                    }
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* MENU MOBILE */}
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
            className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center text-2xl"
            onClick={() => setMobileOpen(false)}
          >
            ×
          </button>
        </div>

        <div className="max-w-6xl mx-auto px-2 space-y-8">
          <div className="space-y-3 text-sm text-center">
            {phone && (
              <a
                href={phone.href}
                className="inline-flex items-center gap-2 hover:text-(--primary-color) transition-colors"
              >
                {(() => {
                  const Icon = phone.icon as any;
                  return <Icon size={18} />;
                })()}
                <span>{phone.label}</span>
              </a>
            )}

            <div>
              <a
                href={email.href}
                className="inline-flex items-center gap-2 hover:text-(--primary-color) transition-colors mt-1"
              >
                {(() => {
                  const Icon = email.icon as any;
                  return <Icon size={18} />;
                })()}
                <span>{email.label}</span>
              </a>
            </div>
          </div>

          <nav className="flex flex-col items-center gap-6 text-lg w-full">
            {navLinks.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    uppercase transition-colors
                    ${active ? "text-(--primary-color)" : "text-white"}
                    hover:text-(--primary-color)
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
