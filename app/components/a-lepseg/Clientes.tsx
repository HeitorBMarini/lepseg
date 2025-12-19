"use client";

import Image from "next/image";

function Marquee({ src }: { src: string }) {
  // repete o mesmo logo várias vezes para preencher a linha
  const items = Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    src,
  }));

  // duplica para ficar "infinito"
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div className="flex w-max items-center gap-12 animate-marquee">
        {doubled.map((item, i) => (
          <div
            key={`${item.id}-${i}`}
            className="h-10 w-40 flex items-center justify-center opacity-90"
          >
            <Image
              src={item.src}
              alt="Parceiro"
              width={160}
              height={40}
              className="h-10 w-auto object-contain"
              priority={i < 6}
            />
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 16s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default function ParceirosSection() {
  return (
    <section className="  py-16 md:py-20">
      <div className=" mx-auto px-6">
        {/* topo */}
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center justify-center rounded-sm bg-white/15 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-(--primary-color)">
            Clientes
          </span>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-(--primary-color) ">
            Nossos{" "}
            <span className="text-(--primary-color) font-extrabold">
              Parceiros
            </span>
          </h2>
        </div>

        {/* carrossel */}
        <div className="mt-10">
          <Marquee src="/imgs/clientes/logo.png" />
        </div>
      </div>
    </section>
  );
}
