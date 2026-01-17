"use client";

import Image from "next/image";

export default function HeroBanner() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        h-[108vh] md:h-[118vh]
        pt-24 md:pt-0
      "
    >
      {/* ==== IMAGEM MOBILE ==== */}
      <Image
        src="/imgs/banner-mobile.webp"
        alt="Banner Mobile"
        fill
        priority
        className="md:object-cover object-top md:hidden"
      />

      {/* ==== IMAGEM DESKTOP ==== */}
      <Image
        src="/imgs/banner.webp"
        alt="Banner"
        fill
        priority
        className="object-cover object-center hidden md:block"
      />

      {/* ==== TEXTO (SÓ DESKTOP) ==== */}
      <div
        className="
          absolute top-[45%] right-[10%]
          -translate-y-1/2
          text-white
          max-w-185
          z-20
          hidden md:block
        "
      >
        <h2 className="text-4xl font-extrabold leading-tight">
          SEGURANÇA QUE <br /> TRANSFORMA AMBIENTES
        </h2>

        <p className="mt-4 text-2xl leading-relaxed text-white/90">
          Treinamentos profissionais para proteger vidas <br />
          e elevar o padrão de segurança da sua <br /> empresa.
        </p>
      </div>
    </section>
  );
}
