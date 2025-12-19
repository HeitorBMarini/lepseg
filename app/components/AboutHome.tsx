// app/components/AboutHome.tsx
"use client";

import { Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutHome() {
  return (
    <section
      className="
        relative 
        bg-[#202020] text-white
        px-4 md:px-0
        pt-16 md:pt-55 pb-16
        md:-mt-10 md:-top-33
      "
    >
      {/* Fundo com o predio (about.svg) */}
      <div
        className="
    pointer-events-none 
    absolute 
    h-full w-[26%]
    left-0 
    top-80  
  "
      >
        <Image
          src="/imgs/about.png"
          alt="Ilustração industrial"
          fill
          className="
      object-contain
      text-transparent
    "
        />
      </div>

      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center md:items-stretch gap-10">
        {/* ================== BLOCO ESQUERDO – IMAGEM QUEM ================== */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative max-w-md w-full">
            <Image
              src="/imgs/quem.webp"
              alt="Equipe em treinamento de segurança"
              width={520}
              height={420}
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* ================== BLOCO DIREITO – TEXTO + ÍCONES ================== */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* labelzinho “Sobre nós” */}
          <div className="flex items-center gap-2 text-md  tracking-[0.18em] text-white/70">
            {/* Ícone estilo engrenagem */}
            <Settings
              size={18}
              strokeWidth={2.2}
              className="text-(--primary-color)"
            />

            {/* Texto */}
            <span className="font-bold">Sobre Nós</span>
          </div>

          {/* Título principal */}
          <h2 className="text-2xl md:text-3xl leading-snug font-light">
            Há mais de <span>20 anos</span> no mercado, a{" "}
            <span className="font-bold">LEPSEG se Dedica a Proteger vidas</span>{" "}
            Através de treinamentos de segurança <br /> de alta qualidade.
          </h2>

          {/* Parágrafo de apoio */}
          <p className="text-sm md:text-[15px] leading-relaxed text-white/80">
            A LEPSEG Assessoria e Treinamentos nasceu com a missão de elevar o
            nível da segurança do trabalhador no Brasil, oferecendo cursos
            especializados, ministrados por profissionais qualificados e
            comprometidos com a excelência.
          </p>

          {/* ================== CARDS DE ÍCONES ================== */}
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {/* Inovação */}
            <div className="flex items-center gap-3 rounded-2xl bg-[#ECEDEC0D] px-2 py-2 border border-white/5">
              <Image
                src="/imgs/icons/inovacao.png"
                alt="Ícone de inovação"
                width={75}
                height={75}
                className="object-contain"
              />
              <div className="space-y-0.5">
                <p className="text-md font-semibold">Inovação</p>
                <p className="text-[12px] text-white/70">
                  Metodologias atualizadas e treinamentos práticos.
                </p>
              </div>
            </div>

            {/* Confiabilidade / Escudo */}
            <div className="flex items-center gap-3 rounded-2xl bg-[#ECEDEC0D] px-2 py-2 border border-white/5">
              <Image
                src="/imgs/icons/escudo.png"
                alt="Ícone de confiabilidade"
                width={75}
                height={75}
                className="object-contain"
              />
              <div className="space-y-0.5">
                <p className="text-md font-semibold">Confiabilidade</p>
                <p className="text-[12px] text-white/70">
                  Instrutores certificados e treinamentos alinhados às normas.
                </p>
              </div>
            </div>

            {/* Parceria */}
            <div className="flex items-center gap-3 rounded-2xl bg-[#ECEDEC0D] px-2 py-2 border border-white/5">
              <Image
                src="/imgs/icons/parceiro.png"
                alt="Ícone de parceria"
                width={75}
                height={75}
                className="object-contain"
              />
              <div className="space-y-0.5">
                <p className="text-md font-semibold">Parceria</p>
                <p className="text-[12px] text-white/70">
                  Relacionamento próximo e soluções sob medida.
                </p>
              </div>
            </div>
          </div>

          {/* BOTÃO SAIBA MAIS */}
          <Link
            href="/a-lepseg"
            className="
    mt-2 inline-flex items-center justify-center
    px-6 py-2.5
    rounded-full
    border border-(--primary-color)
    text-(--primary-color)
    bg-transparent
    tracking-[0.18em] uppercase
    text-md md:text-sm font-semibold
    hover:bg-(--primary-color)/10
    transition
  "
          >
            SAIBA MAIS
          </Link>
        </div>
      </div>
    </section>
  );
}
