"use client";

import { useEffect, useMemo } from "react";
import Image from "next/image";
import { Search, Play } from "lucide-react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

type GalleryItem = {
  id: string;
  src: string;
  title: string;
};

type VideoItem = {
  id: string;
  src: string;
  title: string;
};

export default function GaleriaSection() {
  const items: GalleryItem[] = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => ({
        id: String(i + 1),
        title: "Nome do Projeto",
        src: `/imgs/galeria/galeria-${i + 1}.webp`,
      })),
    [],
  );

  // 🔥 ajuste o length para a quantidade de vídeos que você tem (no seu print: 11)
  const videos: VideoItem[] = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: String(i + 1),
        title: `Vídeo ${i + 1}`,
        src: `/video-galeria/video-${i + 1}.mp4`,
      })),
    [],
  );

  useEffect(() => {
    NativeFancybox.bind("[data-fancybox='galeria']", {
      Carousel: { Thumbs: false },
    });

    // grupo separado pros vídeos
    NativeFancybox.bind("[data-fancybox='videos']", {
      Carousel: { Thumbs: false },
    });

    return () => {
      NativeFancybox.unbind("[data-fancybox='galeria']");
      NativeFancybox.unbind("[data-fancybox='videos']");
      NativeFancybox.close();
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden py-16 md:py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-2xl md:text-2xl font-semibold tracking-wide text-(--primary-color)">
          Nossos Últimos Projetos
        </h2>

        {/* GRID IMAGENS */}
        <div className="mt-10 grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((it) => (
            <ImageTile key={it.id} src={it.src} title={it.title} />
          ))}
        </div>

        {/* GRID VÍDEOS */}
       

        <div className="mt-8 grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {videos.map((v) => (
            <VideoTile key={v.id} src={v.src} title={v.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageTile({ src, title }: { src: string; title: string }) {
  return (
    <a
      href={src}
      data-fancybox="galeria"
      data-caption={title}
      title={title}
      className="group relative block overflow-hidden rounded-2xl bg-white/5 aspect-square"
    >
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover transition duration-300 group-hover:scale-[1.05]"
      />

      <span className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition" />

      <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
        <span className="h-14 w-14 rounded-full flex items-center justify-center bg-black/35">
          <Search className="text-white" size={28} />
        </span>
      </span>

      <span className="absolute bottom-3 left-3 right-3 text-center text-xs font-semibold text-white/95 drop-shadow opacity-0 group-hover:opacity-100 transition">
        {title}
      </span>
    </a>
  );
}

function VideoTile({ src, title }: { src: string; title: string }) {
  return (
    <a
      href={src}
      data-fancybox="videos"
      data-caption={title}
      title={title}
      className="group relative block overflow-hidden rounded-2xl bg-white/5 aspect-9/16"
    >
      {/* preview do vídeo */}
      <video
        src={src}
        className="h-full w-full object-cover"
        muted
        playsInline
        preload="metadata"
      />

      <span className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition" />

      <span className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-100 transition">
        <span className="h-14 w-14 rounded-full flex items-center justify-center bg-black/40">
          <Play className="text-white" size={26} />
        </span>
      </span>

      <span className="absolute bottom-3 left-3 right-3 text-center text-xs font-semibold text-white/95 drop-shadow opacity-0 group-hover:opacity-100 transition">
        {title}
      </span>
    </a>
  );
}
