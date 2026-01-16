// app/components/GallerySection.tsx
"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type GalleryItem = {
  id: string;
  title: string;
  src: string;
  colSpan?: string; // tailwind: col-span-?
  rowSpan?: string; // tailwind: row-span-?
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function GallerySection() {
  const items: GalleryItem[] = [
    {
      id: "1",
      title: "Nome do Projeto",
      src: "/imgs/galeria/galeria-1.webp",
      colSpan: "col-span-2",
      rowSpan: "row-span-2",
    },
    {
      id: "2",
      title: "Nome do Projeto",
      src: "/imgs/galeria/galeria-2.webp",
      colSpan: "col-span-1",
      rowSpan: "row-span-2",
    },
    {
      id: "3",
      title: "Nome do Projeto",
      src: "/imgs/galeria/galeria-3.webp",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
    },
    {
      id: "4",
      title: "Nome do Projeto",
      src: "/imgs/galeria/galeria-4.webp",
      colSpan: "col-span-2",
      rowSpan: "row-span-1",
    },
    {
      id: "5",
      title: "Nome do Projeto",
      src: "/imgs/galeria/galeria-5.webp",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
    },
  ];

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const [offsetY, setOffsetY] = useState(0);

  const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    // rolar apenas o mosaico (não a página)
    e.preventDefault();

    const viewport = viewportRef.current;
    const content = contentRef.current;
    if (!viewport || !content) return;

    const maxScroll = Math.max(0, content.scrollHeight - viewport.clientHeight);

    // “velocidade” da rolagem
    const next = offsetY + e.deltaY * 0.9;

    setOffsetY(clamp(next, 0, maxScroll));
  };

  return (
    <section className="relative bg-[#282828] text-white py-16 md:py-22 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[360px_1fr] items-start">
          {/* COLUNA ESQUERDA */}
          <div className="pt-2">
            <div className="text-[11px] uppercase tracking-[0.32em] text-(--primary-color)">
              VEJA A
            </div>

            <h2 className="mt-2 text-3xl md:text-4xl font-light text-white/90">
              Nossa <span className="font-semibold text-white">Galeria</span>
            </h2>

            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Explore alguns momentos dos nossos treinamentos, turmas atendidas
              e bastidores da nossa atuação. Cada registro demonstra nosso
              compromisso em transformar ambientes de trabalho em lugares mais
              seguros.
            </p>

            <Link
              href="/galeria"
              className="
                mt-6 inline-flex items-center justify-center
                rounded-sm px-5 py-2.5
                bg-(--primary-color) text-white
                text-[11px] uppercase tracking-[0.22em]
                hover:brightness-110 transition
              "
            >
              VEJA TODAS AS OBRAS
            </Link>

           
          </div>

          {/* COLUNA DIREITA (MOSAICO COM SCROLL NO MOUSE) */}
          <div
            ref={viewportRef}
            onWheel={onWheel}
            className="
              relative
              h-80 sm:h-90 md:h-105
              overflow-hidden
              rounded-2xl
              bg-white/0
            "
            // permite preventDefault no wheel (componente client)
            style={{ overscrollBehavior: "contain" as any }}
          >
            {/* content “mais alto” que o viewport */}
            <div
              ref={contentRef}
              className="
                grid grid-cols-4 auto-rows-[92px] md:auto-rows-[110px]
                gap-4
                pr-2
                will-change-transform
              "
              style={{
                transform: `translate3d(0, ${-offsetY}px, 0)`,
                transition: "transform 40ms linear",
              }}
            >
              {items.map((it) => (
                <article
                  key={it.id}
                  className={`
                    relative overflow-hidden rounded-2xl
                    bg-white/5
                    ${it.colSpan ?? "col-span-2"}
                    ${it.rowSpan ?? "row-span-1"}
                  `}
                >
                  <Image
                    src={it.src}
                    alt={it.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 60vw, 520px"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-black/25" />

                  
                </article>
              ))}
            </div>

            {/* fade superior/inferior (pra ficar com cara do print) */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#282828] to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#282828] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
