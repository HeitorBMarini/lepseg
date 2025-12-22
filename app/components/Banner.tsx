"use client";

import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-screen md:h-[118vh] overflow-hidden">
      {/* ==== IMAGEM DE FUNDO ==== */}
      <Image
        src="/imgs/banner.webp"
        alt="Banner"
        fill
        priority
        className="object-cover object-center"
      />

      {/* ==== OVERLAY GRADIENT (MOBILE) ==== */}
      <div
        className="
          absolute inset-0 z-10
          bg-linear-to-t
          from-black/80 via-black/50 to-black/10
          md:bg-none
        "
      />

      {/* ==== CONTEÚDO DO TEXTO ==== */}
      <div
        className="
          absolute inset-0 z-20
          flex flex-col items-center justify-center
          text-center
          px-6
          
          md:inset-auto
          md:top-[45%]
          md:right-[10%]
          md:-translate-y-1/2
          md:text-left
          md:block
          md:px-0
          md:max-w-185
        "
      >
        <h2 className="text-2xl md:text-4xl text-white font-extrabold leading-tight">
          SEGURANÇA QUE <br /> TRANSFORMA AMBIENTES
        </h2>

        <p className="mt-4 text-base md:text-2xl leading-relaxed text-white/90">
          Treinamentos profissionais para proteger vidas <br className="hidden md:block" />
          e elevar o padrão de segurança da sua <br className="hidden md:block" />
          empresa.
        </p>
      </div>
    </section>
  );
}
