"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

type Item = {
  icon: string;
  title: string;
  desc: string;
};

const ITEMS: Item[] = [
  {
    icon: "/imgs/escolher/avaliacao.png",
    title: "20 anos de experiência",
    desc: "Duas décadas dedicadas à segurança do trabalhador.",
  },
  {
    icon: "/imgs/escolher/instrutor.png",
    title: "Instrutores especializados",
    desc: "Profissionais altamente qualificados e atualizados.",
  },
  {
    icon: "/imgs/escolher/certificacao.png",
    title: "Certificação reconhecida",
    desc: "Certificados entregues entre 3 a 5 dias úteis.",
  },
  {
    icon: "/imgs/escolher/atendimento.png",
    title: "Atendimento humanizado",
    desc: "Contato direto, rápido e objetivo via WhatsApp.",
  },
  {
    icon: "/imgs/escolher/caminhao.png",
    title: "Vamos até a sua empresa",
    desc: "Treinamentos realizados no local, com praticidade e economia.",
  },
  {
    icon: "/imgs/escolher/qualidade.png",
    title: "Qualidade comprovada",
    desc: "Clientes fiéis há mais de uma década.",
  },
  {
    icon: "/imgs/escolher/comprometimento.png",
    title: "Rapidez e comprometimento",
    desc: "Prazos cumpridos e suporte total durante todo o processo.",
  },
];

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

const card: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
};

function Card({ item }: { item: Item }) {
  return (
    <motion.article
      variants={card}
      className="
        rounded-2xl bg-[#FFFFFF0D]
        px-7 py-9
        text-center
        flex flex-col items-center justify-center
        min-h-47.5
        transition
        hover:bg-[#FFFFFF14]
      "
    >
      <Image
        src={item.icon}
        alt={item.title}
        width={46}
        height={46}
        className="mb-4"
      />

      <h3 className="text-sm font-semibold mb-2">{item.title}</h3>

      <p className="text-xs text-white/70 leading-relaxed max-w-60">
        {item.desc}
      </p>
    </motion.article>
  );
}

export default function EscolherSection() {
  const top = ITEMS.slice(0, 4);
  const bottom = ITEMS.slice(4);

  return (
    <section className="relative bg-[#282828] text-white py-20 overflow-hidden">
      {/* imagem “escolher.png” colada na esquerda */}
      <div
        className="
          pointer-events-none absolute inset-y-0
          top-40 left-0
          w-[90%] sm:w-[70%] md:w-[32%]
        "
      >
        <Image
          src="/imgs/escolher/escolher.png"
          alt=""
          fill
          className="object-contain object-left hidden md:block"
          priority
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* topo */}
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease }}
        >
          <span className="inline-flex items-center justify-center rounded-4xl bg-[#484848] px-4 py-2 text-[10px] tracking-[0.24em] text-(--primary-color)">
            Conheça Aqui
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl text-(--primary-color) font-extralight">
            Por quê nos{" "}
            <span className="text-(--primary-color) font-extrabold">
              escolher?
            </span>
          </h2>
        </motion.div>

        {/* linha 1 — 4 cards */}
        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {top.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </motion.div>

        {/* linha 2 — 3 cards CENTRALIZADOS */}
        <motion.div
          className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {bottom.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
