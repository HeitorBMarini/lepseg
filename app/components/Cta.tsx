"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { contactInfo } from "../data/contactInfo";
import { FaWhatsapp } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/imgs/cta/cta.png"
          alt="CTA"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        {/* TÍTULO */}
        <h2 className="text-2xl md:text-4xl font-extralight leading-tight">
          Pronto Para Transformar <br />
          <span className="font-semibold">A Imagem Da Sua Empresa?</span>
        </h2>

        <p className="mt-4 text-sm md:text-base text-white/90 max-w-2xl mx-auto">
          Não deixe sua marca passar despercebida. Vamos criar juntos uma
          comunicação visual que gera resultados e faz sua empresa se destacar.
        </p>

        {/* BOTÕES */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={contactInfo.phoneGroup.items[0].href}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/70 text-sm font-semibold hover:bg-(--primary-color) hover:text-black transition"
          >
            <Phone size={16} />
            Solicite um orçamento gratuito
          </a>

          <a
            href={contactInfo.phoneGroup.items[0].href}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#FDB414] text-white text-sm font-semibold hover:brightness-110 transition"
          >
            <FaWhatsapp size={16}  />
            Fale no WhatsApp
          </a>
        </div>

        {/* CARDS */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "/imgs/cta/atendimento.png",
              title: "Atendimento Rápido",
              desc: "Resposta em até 2 horas durante horário comercial",
            },
            {
              icon: "/imgs/cta/orcamento.png",
              title: "Orçamento Gratuito",
              desc: "Análise completa do seu projeto sem custo",
            },
            {
              icon: "/imgs/cta/consultoria.png",
              title: "Consultoria Especializada",
              desc: "Orientação profissional para melhores resultados",
            },
          ].map((item, i) => (
            <article
              key={i}
              className="rounded-sm bg-white/15 px-6 py-8 text-center "
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={50}
                height={50}
                className="mx-auto mb-4"
              />

              <h3 className="text-md font-semibold mb-2">{item.title}</h3>
              <p className="text-xl text-white/80">{item.desc}</p>
            </article>
          ))}
        </div>

        {/* RODAPÉ */}
        <div className="mt-14 border-t border-white pt-6 text-md text-white/80">
          <p>
            Horário de atendimento: Segunda a Sexta, 8h às 18h | Sábado, 8h às
            12h
          </p>
          <p className="mt-1">{contactInfo.location.text}</p>
          <p className="mt-1 flex justify-center items-center gap-2">
            
          </p>
        </div>
      </div>
    </section>
  );
}
