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
        className="object-cover object-center "
      />


      {/* ==== CONTEÚDO DO TEXTO PRINCIPAL ==== */}
      <div
        className="
          absolute top-[40%] md:top-[45%] right-[10%]
          -translate-y-1/2
          text-white 
          max-w-185
          z-20
        "
      >
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
          SEGURANÇA QUE <br /> TRANSFORMA AMBIENTES
        </h2>

        <p className="mt-4 text-xl md:text-2xl leading-relaxed text-white/90">
          Treinamentos profissionais para proteger vidas <br />
          e elevar o padrão de segurança da sua <br /> empresa.
        </p>
      </div>

      
    </section>
  );
}
