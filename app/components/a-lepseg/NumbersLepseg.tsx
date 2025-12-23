"use client";

import Image from "next/image";
import { AnimatedNumber } from "../AnimatedNumber";

const stats = [
  {
    icon: "/imgs/icons/mercado.png",
    value: 20,
    suffix: "+",
    label: "Anos de mercado",
  },
  {
    icon: "/imgs/icons/clientes.png",
    value: 20,
    suffix: "+",
    label: "Clientes Atendidos",
  },
  {
    icon: "/imgs/icons/turmas.png",
    value: 120,
    suffix: "+",
    label: "Turmas treinadas por ano",
  },
  {
    icon: "/imgs/icons/satisfacao.png",
    value: 99,
    suffix: "%",
    label: "Satisfação",
  },
];

export default function NumbersLepseg() {
  return (
    <section
      className="
        mt-10
      "
    >
      <div className="mx-auto max-w-5xl px-4">
        <div
          className="
            flex flex-col md:flex-row
            divide-y md:divide-y-0 md:divide-x divide-white/20
            py-6 md:py-8
          "
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="
                flex-1
                flex flex-col items-center justify-center
                text-center
                px-6 py-4
                text-white
                gap-2
              "
            >
              {/* ÍCONE */}
              <Image
                src={item.icon}
                alt={item.label}
                width={50}
                height={50}
                className="object-contain mb-1"
              />

              {/* BIG NUMBER */}
              <AnimatedNumber
                value={item.value}
                suffix={item.suffix}
              />

              {/* LABEL */}
              <span className="text-[11px] md:text-xs font-medium opacity-90">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
