"use client";

import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { socialLinks } from "@/app/data/socialLinks";

export default function YoutubeSection() {
  const youtube = socialLinks.find((s) => s.name === "youtube");

  return (
    <section className="relative bg-[#282828] text-white py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* TÍTULO */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl md:text-3xl font-light">
            Confira nosso Canal no <span>YouTube</span>
          </h2>

          <p className="mt-4 text-sm text-white/60">
            Conteúdos exclusivos, treinamentos, bastidores e dicas importantes
            para a segurança no trabalho.
          </p>
        </div>

        {/* GRID DE VÍDEOS */}
        <div className="grid gap-6 lg:grid-cols-[1fr_2fr_1fr] items-center">
          {/* COLUNA ESQUERDA */}
          <div className="grid gap-4">
            {["/imgs/youtube/yt-1.webp", "/imgs/youtube/yt-2.webp"].map(
              (img, i) => (
                <VideoThumb key={i} src={img} />
              )
            )}
          </div>

          {/* VÍDEO PRINCIPAL */}
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/imgs/youtube/yt-1.webp"
              alt="Vídeo em destaque"
              fill
              className="object-cover"
            />
          </div>

          {/* COLUNA DIREITA */}
          <div className="grid gap-4">
            {["/imgs/youtube/yt-3.webp", "/imgs/youtube/yt-4.webp"].map(
              (img, i) => (
                <VideoThumb key={i} src={img} />
              )
            )}
          </div>
        </div>

        {/* BOTÃO */}
        {youtube && (
          <div className="mt-12 flex justify-center">
            <a
              href={youtube.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-3
                px-6 py-3 rounded-xl
                bg-(--primary-color) text-black
                font-semibold text-sm
                hover:brightness-110 transition uppercase
              "
            >
              Inscreva-se
              <FaYoutube className="text-lg" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

/* ===================== */
/* Thumbnail reutilizável */
/* ===================== */
function VideoThumb({ src }: { src: string }) {
  return (
    <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/40">
      <Image src={src} alt="Vídeo" fill className="object-cover opacity-80" />

      <div className="absolute inset-0 flex items-center justify-center">
        <FaYoutube className="text-white/80 text-3xl" />
      </div>
    </div>
  );
}
