// app/components/GallerySection.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

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
  const items: GalleryItem[] = useMemo(
    () => [
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
        colSpan: "col-span-",
        rowSpan: "row-span-2",
      },
      {
        id: "4",
        title: "Nome do Projeto",
        src: "/imgs/galeria/galeria-4.webp",
        colSpan: "col-span-2",
        rowSpan: "row-span-2",
      },
      {
        id: "5",
        title: "Nome do Projeto",
        src: "/imgs/galeria/galeria-5.webp",
        colSpan: "col-span-1",
        rowSpan: "row-span-2",
      },
    ],
    []
  );

  useEffect(() => {
    NativeFancybox.bind("[data-fancybox='galeria']", {
      Carousel: { Thumbs: false },
    });

    return () => {
      NativeFancybox.unbind("[data-fancybox='galeria']");
      NativeFancybox.close();
    };
  }, []);

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [offsetY, setOffsetY] = useState(0);

  const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();

    const viewport = viewportRef.current;
    const content = contentRef.current;
    if (!viewport || !content) return;

    const maxScroll = Math.max(0, content.scrollHeight - viewport.clientHeight);
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

          {/* COLUNA DIREITA (MOSAICO COM SCROLL NO MOUSE + FANCYBOX) */}
          <div
            ref={viewportRef}
            onWheel={onWheel}
            className="
              relative
              h-80 sm:h-110 md:h-105
              overflow-hidden
              rounded-2xl
              bg-white/0
            "
            style={{ overscrollBehavior: "contain" as any }}
          >
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
                <a
                  key={it.id}
                  href={it.src}
                  data-fancybox="galeria"
                  data-caption={it.title}
                  className={`
                    group relative overflow-hidden rounded-2xl bg-white/5
                    ${it.colSpan ?? "col-span-2"}
                    ${it.rowSpan ?? "row-span-1"}
                  `}
                  title={it.title}
                >
                  <Image
                    src={it.src}
                    alt={it.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.01]"
                    sizes="(max-width: 1024px) 60vw, 520px"
                  />

                  {/* overlay */}
                  <span className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition" />

                  {/* ícone */}
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <span className="h-14 w-14 rounded-full flex items-center justify-center bg-black/35">
                      <Search className="text-white" size={28} />
                    </span>
                  </span>

                  {/* título */}
                  <span className="absolute bottom-3 left-3 right-3 text-center text-[12px] font-semibold text-white/95 drop-shadow opacity-0 group-hover:opacity-100 transition">
                    {it.title}
                  </span>
                </a>
              ))}
            </div>

          
          </div>
        </div>
      </div>
    </section>
  );
}
