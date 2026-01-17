"use client";

import { useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

type GalleryItem = {
  id: string;
  title: string;
  src: string;
};

export default function GallerySection() {
  const items: GalleryItem[] = useMemo(
    () => [
      { id: "1", title: "Nome do Projeto", src: "/imgs/galeria/galeria-1.webp" },
      { id: "2", title: "Nome do Projeto", src: "/imgs/galeria/galeria-2.webp" },
      { id: "3", title: "Nome do Projeto", src: "/imgs/galeria/galeria-3.webp" },
      { id: "4", title: "Nome do Projeto", src: "/imgs/galeria/galeria-4.webp" },
      { id: "5", title: "Nome do Projeto", src: "/imgs/galeria/galeria-5.webp" },
    ],
    []
  );

  const big = items[0];
  const thumbs = items.slice(1);

  useEffect(() => {
    NativeFancybox.bind("[data-fancybox='galeria']", {
      Carousel: { Thumbs: false },
    });

    return () => {
      NativeFancybox.unbind("[data-fancybox='galeria']");
      NativeFancybox.close();
    };
  }, []);

  return (
    <section className="relative bg-[#282828] text-white py-16 md:py-22 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[300px_1fr] items-start">
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

          {/* COLUNA DIREITA (GRID IGUAL AO OUTRO EXEMPLO) */}
          <div className="relative">
            <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_2fr]">
              {/* IMAGEM GRANDE */}
              {big && (
                <a
                  href={big.src}
                  data-fancybox="galeria"
                  data-caption={big.title}
                  className="group relative block h-130 md:h-140 lg:h-130 rounded-2xl overflow-hidden bg-white/5"
                  title={big.title}
                >
                  <Image
                    src={big.src}
                    alt={big.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  <span className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition" />

                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <span className="h-16 w-16 rounded-full flex items-center justify-center bg-black/35">
                      <Search className="text-white" size={32} />
                    </span>
                  </span>
                </a>
              )}

              {/* GRID DE THUMBS */}
              <div className="grid gap-5 grid-cols-2 md:grid-cols-3 auto-rows-[165px] md:auto-rows-[170px] h-100">
                {thumbs.map((it, idx) => (
                  <a
                    key={it.id}
                    href={it.src}
                    data-fancybox="galeria"
                    data-caption={it.title}
                    className={`
                      group relative overflow-hidden rounded-2xl bg-white/5
                      ${idx === 0 ? "md:row-span-2 md:col-span-1" : ""}
                      ${idx === 1 ? "md:row-span-2 md:col-span-1" : ""}
                    `}
                    title={it.title}
                  >
                    <Image
                      src={it.src}
                      alt={it.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />

                    <span className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition" />

                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <span className="h-12 w-12 rounded-full flex items-center justify-center bg-black/35">
                        <Search className="text-white" size={24} />
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* /COLUNA DIREITA */}
        </div>
      </div>
    </section>
  );
}
