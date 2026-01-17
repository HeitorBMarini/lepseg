"use client";

import { UsersRound } from "lucide-react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
};

export default function SobreSection() {
  return (
    <section className="relative text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* ===== ESQUERDA ===== */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease }}
          >
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
              <span> Através de Treinamentos de Segurança de Alta Qualidade</span>
            </h2>

            {/* texto */}
            <p className="mt-5 text-sm text-white/65 leading-relaxed max-w-xl">
              A LEPSEG Assessoria e Treinamentos nasceu com a missão de elevar o
              nível da segurança do trabalhador no Brasil, oferecendo cursos
              especializados, ministrados por profissionais qualificados e
              comprometidos com a excelência.
            </p>

            {/* cards menores (stagger) */}
            <motion.div
              className="mt-8 grid gap-4 sm:grid-cols-3"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
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
              ].map((c, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="
                    rounded-xl
                    bg-[#FFFFFF0D]
                    px-5 py-4
                    flex items-start gap-4
                  "
                >
                  <Image
                    src={c.icon}
                    alt={c.title}
                    width={30}
                    height={30}
                    className="mt-1 shrink-0"
                  />

                  <div>
                    <h4 className="text-sm font-semibold mb-1">{c.title}</h4>
                    <p className="text-[10px] text-white/60 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ===== DIREITA ===== */}
          <motion.div
            className="
              rounded-2xl
              bg-[#ffffff02]
              px-8 py-30 border-white/15
              shadow-xl h-full
            "
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease, delay: 0.08 }}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
