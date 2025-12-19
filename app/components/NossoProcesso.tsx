"use client";

import Image from "next/image";

type Step = {
  n: string;
  title: string;
  desc: string;
  arrow?: "down" | "up";
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "Primeiro Contato",
    desc: "O cliente envia uma mensagem pelo WhatsApp informando o treinamento desejado e o número de participantes.",
    arrow: "up",
  },
  {
    n: "02",
    title: "Proposta Comercial",
    desc: "Preparamos e enviamos uma proposta personalizada via WhatsApp ou e-mail.",
    arrow: "down",
  },
  {
    n: "03",
    title: "Agendamento",
    desc: "Com a aprovação da proposta, definimos juntos a data e o local do treinamento.",
    arrow: "up",
  },
  {
    n: "04",
    title: "Realização do Treinamento",
    desc: "O instrutor comparece na empresa do cliente para ministrar o curso de forma prática, clara e objetiva.",
    arrow: "down",
  },
  {
    n: "05",
    title: "Emissão do Certificado",
    desc: "Após o treinamento, emitimos o certificado oficial e a nota fiscal.\nPrazo de entrega: 3 a 5 dias úteis (garantindo segurança operacional).",
    arrow: "up",
  },
  {
    n: "06",
    title: "Conclusão do Processo",
    desc: "Com a entrega da documentação, encerramos o processo e deixamos a empresa apta às exigências legais.",
  },
];

function ArrowAfter({ type }: { type?: "down" | "up" }) {
  if (!type) return null;

  const src =
    type === "down"
      ? "/imgs/processo/arrow-down.png"
      : "/imgs/processo/arrow-up.png";

  return (
    <span
      className={`
        pointer-events-none absolute right-20 hidden lg:block
        ${type === "down" ? "top-6" : "-top-2"}
      `}
    >
      <Image src={src} alt="" width={110} height={36} />
    </span>
  );
}

export default function ProcessoSection() {
  return (
    <section className=" text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* TOPO */}
        <div className="flex flex-col items-center text-center">
          <span
            className="
              mb-3 inline-flex items-center justify-center
              rounded-full
              bg-[#FDB41433]
              px-4 py-2
              text-[12px]  tracking-[0.24em]
              text-(--primary-color)
            "
          >
            Passo a Passo
          </span>

          <h2 className="text-3xl text-(--primary-color) md:text-4xl font-extralight">
            Nosso{" "}
            <span className="text-(--primary-color) font-extrabold">
              Processo
            </span>
          </h2>
        </div>

        {/* GRID */}
        <div className="mt-16 space-y-16">
     
          <div className="grid gap-y-14 gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.slice(0, 4).map((s) => (
              <article key={s.n} className="relative">
                <ArrowAfter type={s.arrow} />

                <div className="text-(--primary-color) text-4xl font-extrabold">
                  {s.n}
                </div>

                <h3 className="mt-3 text-sm font-semibold">{s.title}</h3>

                <p className="mt-3 text-xs leading-relaxed text-white/70 max-w-65 whitespace-pre-line">
                  {s.desc}
                </p>
              </article>
            ))}
          </div>

          {/* LINHA 2 — 05 e 06 CENTRALIZADOS */}
          <div className="grid gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-2 justify-center lg:max-w-4xl mx-auto md:px-45">
            {STEPS.slice(4).map((s) => (
              <article key={s.n} className="relative">
                {/* seta do 05 (se tiver) */}
                <ArrowAfter type={s.arrow} />

                <div className="text-(--primary-color) text-4xl font-extrabold">
                  {s.n}
                </div>

                <h3 className="mt-3 text-sm font-semibold">{s.title}</h3>

                <p className="mt-3 text-xs leading-relaxed text-white/70 max-w-65 whitespace-pre-line">
                  {s.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
