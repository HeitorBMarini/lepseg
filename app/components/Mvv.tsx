"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Settings } from "lucide-react";
import { motion } from "framer-motion";

type Key = "missao" | "visao" | "valores";

type Tab = {
  key: Key;
  label: string;
  icon: string;
  image: string;
  text: string;
};

export default function MVVSection() {
  const tabs: Tab[] = useMemo(
    () => [
      {
        key: "missao",
        label: "Nossa Missão",
        icon: "/imgs/mvv/missao-icon.png",
        image: "/imgs/mvv/missao.webp",
        text: "Promover a segurança e o bem-estar dos trabalhadores através de treinamentos completos, atualizados e ministrados com excelência, garantindo que cada pessoa retorne para casa com segurança. Nossa missão é capacitar, prevenir riscos e fortalecer a cultura de segurança dentro das empresas.",
      },
      {
        key: "visao",
        label: "Nossa Visão",
        icon: "/imgs/mvv/visao-icon.png",
        image: "/imgs/mvv/visao.webp",
        text: "Ser referência no Brasil em treinamentos de segurança do trabalho, reconhecida pela qualidade técnica, confiabilidade, relacionamento próximo e pela capacidade de transformar ambientes por meio da educação e da prevenção.",
      },
      {
        key: "valores",
        label: "Nossos Valores",
        icon: "/imgs/mvv/valores-icon.png",
        image: "/imgs/mvv/valores.webp",
        text: "Segurança acima de tudo Compromisso com a qualidade Integridade e responsabilidade Cumprimento de normas e legislações Transparência em todos os processos Aperfeiçoamento técnico contínuo",
      },
    ],
    []
  );

  const [active, setActive] = useState<Key>("missao");
  const current = tabs.find((t) => t.key === active)!;

  return (
    <section className="relative overflow-hidden text-white -top-20">
      {/* BG caminhão */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/imgs/caminhao.webp"
          alt="Caminhão"
          fill
          priority
          className="object-contain object-top -top-10 hidden md:block"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:pt-16 pt-16 ">
        {/* TOPO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/70">
            <Settings className="text-(--primary-color)" size={16} />
            <span>nossos valores</span>
          </div>

          <div className="mt-3 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-extralight">
                Oque nos{" "}
                <span className="font-extrabold">Define e Inspira</span>
              </h2>
            </div>

            <p className="text-sm text-white/70 leading-relaxed md:pt-1">
              Nossos pilares fundamentais guiam cada decisão, cada treinamento e
              cada relacionamento construído ao longo da nossa jornada na
              segurança do trabalho.
            </p>
          </div>
        </motion.div>

        {/* CARD GRANDE */}
        <motion.div
          className="relative mt-10"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <div className="rounded-[28px] bg-[#2f2f2f]/95 overflow-hidden">
            {/* tabs */}
            <div className="grid grid-cols-3 border-b border-white">
              {tabs.map((t) => {
                const isActive = t.key === active;
                return (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => setActive(t.key)}
                    className={`
                  flex items-center justify-center gap-3
                  md:py-5 text-sm font-semibold md:p-4 p-6
                  transition
                  ${
                    isActive
                      ? "bg-(--primary-color) text-black"
                      : "text-white/80 hover:text-white"
                  }
                `}
                  >
                    <Image
                      src={t.icon}
                      alt={t.label}
                      width={22}
                      height={22}
                      className={`
                    transition
                    ${
                      t.key === "missao"
                        ? isActive
                          ? "brightness-0 invert-0"
                          : "invert opacity-80"
                        : isActive
                        ? "brightness-0"
                        : "opacity-80"
                    }
                  `}
                    />
                    {t.label}
                  </button>
                );
              })}
            </div>

            {/* conteúdo */}
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 p-10 md:p-12 items-center">
              <p className="text-sm text-white/65 leading-relaxed max-w-xl">
                {current.text}
              </p>

              <div className="relative w-full h-55 md:h-60 rounded-2xl overflow-hidden">
                <Image
                  src={current.image}
                  alt={current.label}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
