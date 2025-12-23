"use client";

import Image from "next/image";

export default function EssenciaSection() {
  return (
    <section className="relative py-20 text-white">
      <div className="relative z-10 max-w-6xl mx-auto py-14 px-6 bg-[#323232] rounded-md border-white/10 border">
        {/* TOPO */}
        <div className="text-center max-w-3xl mx-auto ">
          <span
            className="
              inline-flex items-center gap-2
              rounded-md
              bg-white/10 border-white/75 border
              px-4 py-2
              text-[11px] uppercase tracking-[0.25em]
              text-white/70
            "
          >
            <Image
              src="/imgs/essencia/mao.png"
              alt="Nossa essência"
              width={14}
              height={14}
            />
            Nossa Essência
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
            O que nos{" "}
            <span className="text-(--primary-color) font-extrabold">
              Define e Inspira
            </span>
          </h2>

          <p className="mt-4 text-sm text-white/65 leading-relaxed">
            Nossos pilares fundamentais guiam cada decisão, cada treinamento e
            cada relacionamento construído ao longo da nossa jornada na
            segurança do trabalho.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {/* MISSÃO */}
          <div
            className="
    relative
    rounded-2xl
    bg-[#363636]
    px-6 py-10
    text-center
    transition
    hover:bg-[#FFFFFF14]
overflow-hidden
    before:content-['']
    before:absolute
    before:top-0
    before:left-0
    before:w-full
    before:h-1.5
    before:bg-(--primary-color)
    before:rounded-t-2xl
  "
          >
            <Image
              src="/imgs/essencia/missao.png"
              alt="Missão"
              width={40}
              height={40}
              className="mx-auto mb-4"
            />

            <h3 className="text-lg font-semibold mb-3 text-white">Missão</h3>

            <p className="text-sm text-white/65 leading-relaxed">
              Promover a segurança e o bem-estar dos trabalhadores através de
              treinamentos completos, atualizados e ministrados com excelência,
              garantindo que cada pessoa retorne para casa com segurança.
            </p>
          </div>

          {/* VISÃO */}
          <div
             className="
    relative
    rounded-2xl
    bg-[#363636]
    px-6 py-10
    text-center
    transition
    hover:bg-[#FFFFFF14]
overflow-hidden
    before:content-['']
    before:absolute
    before:top-0
    before:left-0
    before:w-full
    before:h-1.5
    before:bg-(--primary-color)
    before:rounded-t-2xl
  "
          >
            <span className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-(--primary-color)" />

            <Image
              src="/imgs/essencia/visao.png"
              alt="Visão"
              width={40}
              height={40}
              className="mx-auto mb-4"
            />

            <h3 className="text-lg font-semibold mb-3 text-white">Visão</h3>

            <p className="text-sm text-white/65 leading-relaxed">
              Ser referência no Brasil em treinamentos de segurança do trabalho,
              reconhecida pela qualidade técnica, confiabilidade, relacionamento
              próximo e pela capacidade de transformar ambientes por meio da
              educação e da prevenção.
            </p>
          </div>

          {/* VALORES */}
          <div
             className="
    relative
    rounded-2xl
    bg-[#363636]
    px-6 py-10
    text-center
    transition
    hover:bg-[#FFFFFF14]
overflow-hidden
    before:content-['']
    before:absolute
    before:top-0
    before:left-0
    before:w-full
    before:h-1.5
    before:bg-(--primary-color)
    before:rounded-t-2xl
  "
          >
            <span className="absolute top-0 left-0 w-full h-1 rounded-r-2xl bg-(--primary-color)" />

            <Image
              src="/imgs/essencia/valores.png"
              alt="Valores"
              width={40}
              height={40}
              className="mx-auto mb-4"
            />

            <h3 className="text-lg font-semibold mb-3 text-white">Valores</h3>

            <p className="text-sm text-white/65 leading-relaxed">
              Compromisso
              <br />
              Transparência
              <br />
              Excelência
              <br />
              Humanização
              <br />
              Agilidade
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
