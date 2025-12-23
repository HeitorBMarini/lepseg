"use client";

import { UsersRound } from "lucide-react";
import Image from "next/image";

export default function SobreSection() {
  return (
    <section className="relative  text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* ===== ESQUERDA ===== */}
          <div>
            {/* badge */}
            <span
              className="
                inline-flex items-center gap-2
                rounded-xl border bg-white/10 border-white/755
                px-4 py-1
                text-[10px] uppercase tracking-[0.24em]
                text-white/70
              "
            >
              <UsersRound />
              Quem somos
            </span>

            {/* título */}
            <h2 className="mt-6 text-3xl md:text-3xl leading-tight font-extralight">
              Há Mais de 20 Anos no Mercado, a{" "}
              <span className="font-bold text-(--primary-color)">
                LEPSEG se Dedica a Proteger Vidas
              </span>
              <span>
                {" "}
                Através de Treinamentos de Segurança de Alta Qualidade
              </span>
            </h2>

            {/* texto */}
            <p className="mt-5 text-sm text-white/65 leading-relaxed max-w-xl">
              A LEPSEG Assessoria e Treinamentos nasceu com a missão de elevar o
              nível da segurança do trabalhador no Brasil, oferecendo cursos
              especializados, ministrados por profissionais qualificados e
              comprometidos com a excelência.
            </p>

            {/* cards menores */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: "/imgs/icons/inovacao.png",
                  title: "Inovação",
                  desc: "Treinamentos atualizados e alinhados às normas vigentes.",
                },
                {
                  icon: "/imgs/icons/escudo.png",
                  title: "Confiabilidade",
                  desc: "Transparência, segurança e compromisso em cada etapa.",
                },
                {
                  icon: "/imgs/icons/parceiro.png",
                  title: "Parceria",
                  desc: "Relacionamento próximo, respeitoso e duradouro com cada cliente.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
        rounded-xl
        bg-[#FFFFFF0D]
        px-5 py-4
        flex items-start gap-4
      "
                >
                  {/* ÍCONE */}
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={30}
                    height={30}
                    className="mt-1 shrink-0"
                  />

                  {/* TEXTO */}
                  <div>
                    <h4 className="text-sm font-semibold mb-1">{item.title}</h4>

                    <p className="text-[10px] text-white/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== DIREITA ===== */}
          <div
            className="
              rounded-2xl
              bg-[#ffffff02]
              px-8 py-30 border-white/15
              shadow-xl h-full
            "
          >
            <h3 className="text-2xl font-semibold text-(--primary-color)">
              O nome LEPSEG carrega nossa <br /> essência:
            </h3>

            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Lindonor, Eduardo e Pedro — fundadores que deram origem ao projeto
              — unidos ao SEG, de segurança, que representa nossa especialidade.
            </p>

            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Hoje, atendemos empresas de diversos portes e segmentos, com
              processos eficientes, certificação ágil, responsabilidade técnica
              e compromisso absoluto com a integridade do trabalhador.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
