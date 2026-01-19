"use client";

import { FaYoutube } from "react-icons/fa";
import { contactInfo } from "../data/contactInfo";

export default function YoutubeSection() {
  const youtube = contactInfo.socialGroup.items.find(
    (item) => item.label === "YouTube",
  );

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

        {/* 2 COLUNAS */}
        <div className="grid gap-3 lg:grid-cols-[2fr_2fr] items-start">
          {/* COLUNA ESQUERDA (apenas 1 vídeo) */}
          <div className="relative aspect-15/16 rounded-2xl overflow-hidden bg-black/40">
            <iframe
              src="https://www.youtube.com/embed/TpeTacifJgQ"
              title="YouTube Short"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* COLUNA DIREITA (vídeo principal) */}
          <div className="relative aspect-15/16 rounded-2xl overflow-hidden bg-black/40">
            <video
              className="w-full h-full"
              src="/videos/video-2.mp4"
              controls
              preload="metadata"
            />{" "}
            
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
