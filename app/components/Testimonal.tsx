"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Settings } from "lucide-react";

type Testimonial = {
  id: string;
  titleBadge?: string; 
  heading: {
    line1: string; 
    line2: string; 
    strong: string; 
  };
  quote: string;
  person: {
    name: string;
    role: string;
    avatar: string; 
  };
  heroImage: string; 
};

export default function DepoimentosSection() {
  const items: Testimonial[] = useMemo(
    () => [
      {
        id: "1",
        titleBadge: "O que nossos clientes dizem?",
        heading: {
          line1: "O que os nossos clientes",
          line2: "satisfeitos",
          strong: "estão dizendo",
        },
        quote:
          "“Reduzimos em 28% as falhas na linha de corte. O controle X7 trouxe estabilidade e previsibilidade.”",
        person: {
          name: "Rodrigo M",
          role: "Engenheiro de Produção",
          avatar: "/imgs/testimonal/rodrigo.png",
        },
        heroImage: "/imgs/testimonal/testimonal.webp",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const current = items[index];

  const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  return (
    <section className="relative text-white py-18 md:py-24 overflow-hidden bg-[#282828]">
      <div className="max-w-6xl mx-auto px-6">
        {/* GRID PRINCIPAL */}
        <div className="grid gap-10 lg:grid-cols-[420px_1fr] items-start">
          {/* IMAGEM GRANDE (ESQUERDA) */}
          <div className="relative w-full">
            <div className="relative aspect-square w-full overflow-hidden rounded-[26px]">
              <Image
                src={current.heroImage}
                alt="Cliente"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* CONTEÚDO (DIREITA) */}
          <div className="pt-2">
            {/* badge pequena (como no print) */}
            <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-white">
              <Settings
              size={18}
              strokeWidth={2.2}
              className="text-(--primary-color)"
            />
              <span>{current.titleBadge}</span>
            </div>

            {/* título grande */}
            <h2 className="mt-5 text-2xl leading-[1.05] md:text-4xl md:leading-[1.05] font-light text-white">
              {current.heading.line1}
              <br />
              {current.heading.line2}{" "}
              <span className="font-extrabold text-white">
                {current.heading.strong}
              </span>
            </h2>

            {/* quote */}
            <p className="mt-8 max-w-xl text-[15px] md:text-[16px] leading-relaxed text-white">
              {current.quote}
            </p>

            {/* rodapé: pessoa + setas */}
            <div className="mt-10 flex items-center justify-between gap-6">
              {/* pessoa */}
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white">
                  <Image
                    src={current.person.avatar}
                    alt={current.person.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="leading-tight">
                  <div className="text-sm font-semibold">
                    {current.person.name}
                  </div>
                  <div className="text-[11px] text-white/55">
                    {current.person.role}
                  </div>
                </div>
              </div>

              {/* setas */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Anterior"
                  className="
                    h-10 w-10 rounded-lg
                    bg-(--primary-color) text-black
                    flex items-center justify-center
                    hover:brightness-110 transition
                  "
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Próximo"
                  className="
                    h-10 w-10 rounded-lg
                    bg-(--primary-color) text-black
                    flex items-center justify-center
                    hover:brightness-110 transition
                  "
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* LINHA + LOGOS (embaixo) */}
        <div className="mt-12">
          <div className="h-px w-full bg-[#EBEBEB]" />

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-2 text-white/60"
              >
                <span className="h-6 w-6 rounded-full bg-(--primary-color)/80" />
                <span className="text-sm font-semibold">Logoipsum</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
