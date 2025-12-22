"use client";

import { useEffect, useMemo } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

type GalleryItem = {
  src: string;
  title: string;
};

export default function GaleriaSection() {
  const items: GalleryItem[] = useMemo(
    () => [
      { src: "/imgs/galeria/galeria-1.webp", title: "Projeto 01" },
      { src: "/imgs/galeria/galeria-2.webp", title: "Projeto 02" },
      { src: "/imgs/galeria/galeria-3.webp", title: "Projeto 03" },
      { src: "/imgs/galeria/galeria-4.webp", title: "Projeto 04" },
      { src: "/imgs/galeria/galeria-5.webp", title: "Projeto 05" },
    ],
    []
  );

  useEffect(() => {
    NativeFancybox.bind("[data-fancybox='galeria']", {
      Carousel: {
        Thumbs: false,
      },
    });

    return () => {
      NativeFancybox.unbind("[data-fancybox='galeria']");
      NativeFancybox.close();
    };
  }, []);

  const big = items[0];
  const thumbs = items.slice(1);

  return (
    <section className="relative py-16 md:py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-2xl md:text-2xl font-semibold tracking-wide text-(--primary-color)">
          Nossos Últimos Projetos
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_2fr]">
          {big && (
            <GalleryTile
              src={big.src}
              title={big.title}
              className="h-130 md:h-140 lg:h-130 rounded-2xl"
              imgClassName="object-cover"
            />
          )}

          <div className="grid gap-5 grid-cols-2 md:grid-cols-3 auto-rows-[165px] md:auto-rows-[170px]">
            {thumbs.map((it, idx) => (
              <GalleryTile
                key={it.src}
                src={it.src}
                title={it.title}
                className={`
                  rounded-2xl
                  ${idx === 0 ? "md:row-span-2 md:col-span-1" : ""}
                  ${idx === 1 ? "md:row-span-2 md:col-span-1" : ""}
                `}
                imgClassName="object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryTile({
  src,
  title,
  className = "",
  imgClassName = "",
}: {
  src: string;
  title: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <a
      href={src}
      data-fancybox="galeria"
      data-caption={title}
      className={`group relative block overflow-hidden bg-white/5 ${className}`}
      title={title}
    >
      <Image
        src={src}
        alt={title}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={`transition duration-300 group-hover:scale-[1.03] ${imgClassName}`}
      />

      <span className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition" />
      <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
        <span className="h-16 w-16 rounded-full flex items-center justify-center">
          <Search className="text-white" size={32} />
        </span>
      </span>

      <span className="absolute bottom-4 left-4 right-4 text-center text-sm font-semibold text-white/95 drop-shadow">
        {title}
      </span>
    </a>
  );
}
