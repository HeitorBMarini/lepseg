"use client";

type Item = {
  n: string;
  title: string;
  desc: string;
};

 const ITEMS = [
  {
    n: "01",
    title: "NR–01 – Disposições Gerais e Gerenciamento de Riscos",
    desc:
      "A NR-01 estabelece as diretrizes para o Gerenciamento de Riscos Ocupacionais (GRO) e para o Programa de Gerenciamento de Riscos (PGR).",
  },
  {
    n: "02",
    title: "NR–05 – CIPA – Comissão Interna de Prevenção de Acidentes",
    desc:
      "Treinamento completo para membros da CIPA, abordando prevenção de acidentes, primeiros socorros, identificação de riscos e ações de melhoria.",
  },
  {
    n: "03",
    title: "NR–06 – Equipamentos de Proteção Individual (EPI)",
    desc:
      "Capacitação focada na correta seleção, uso, conservação e responsabilidade sobre EPIs.",
  },
  {
    n: "04",
    title: "NR–10 – Segurança em Instalações e Serviços em Eletricidade",
    desc:
      "Curso essencial para profissionais que trabalham direta ou indiretamente com eletricidade.",
  },
  {
    n: "05",
    title: "NR–11 – Transporte, Movimentação, Armazenagem e Manuseio de Materiais",
    desc:
      "(Empilhadeira, Guindauto, Pá Carregadeira e Outros Equipamentos) A NR-11 abrange todos os equipamentos e processos que envolvem movimentação de materiais.",
  },
  {
    n: "06",
    title: "NR–12 – Segurança no Trabalho em Máquinas e Equipamentos",
    desc:
      "Capacitação voltada para trabalhadores que atuam com máquinas industriais.",
  },
  {
    n: "07",
    title: "NR–13 – Caldeiras, Vasos de Pressão e Tubulações",
    desc:
      "Treinamento técnico para operação segura de caldeiras e vasos de pressão, incluindo noções de inspeção, requisitos legais, prevenção de falhas e procedimentos emergenciais",
  },
  {
    n: "08",
    title: "NR–18 – Segurança na Construção Civil",
    desc:
      "Voltado para trabalhadores e supervisores da construção, o curso abrange as melhores práticas de segurança em canteiros de obras, prevenindo quedas, choques, soterramentos e outros riscos comuns no setor.",
  },
  {
    n: "09",
    title: "NR–20 – Inflamáveis e Combustíveis",
    desc:
      "Treinamento obrigatório para quem lida com líquidos e gases inflamáveis.",
  },
  {
    n: "10",
    title: "NR–23 – Proteção Contra Incêndios",
    desc:
      "Curso focado em medidas preventivas e ações corretivas em caso de incêndio.",
  },
  {
    n: "11",
    title: "NR–33 – Segurança e Saúde em Espaços Confinados",
    desc:
      "Treinamento completo para Trabalhadores Autorizados, Vigias e Supervisores de Entrada.",
  },
  {
    n: "12",
    title: "NR–35 – Trabalho em Altura",
    desc:
      "A NR-35 é um dos nossos principais treinamentos. Capacitamos profissionais a executar atividades acima de 2 metros com total segurança, entendendo:",
  },
  {
    n: "13",
    title: "Treinamento avançado e complementar às NRs 33 e 35",
    desc:
      "Capacita equipes para executar operações de resgate seguro, utilizando técnicas específicas, equipamentos adequados e protocolos de salvamento em cenários críticos.",
  },
  {
    n: "14",
    title: "SIPAT – Semana Interna de Prevenção de Acidentes do Trabalho",
    desc:
      "Organizamos e realizamos SIPAT completas, com palestras, dinâmicas, atividades educativas e conscientização para equipes de todos os setores. O foco é promover saúde, segurança e integração no ambiente de trabalho.",
  },
];

export default function TreinamentosGrid() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <article
              key={item.n}
              className="
                rounded-[22px]
                border border-white/70
                bg-[#2d2d2d]/40
                p-6
                text-white
                transition
                hover:[background:linear-gradient(313.13deg,#262626_25.85%,#8C8C8C_255.33%)]
              "
            >
              <div className="text-2xl font-bold mb-2">
                {item.n}
              </div>

              <h3 className="font-semibold mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="text-sm text-white/70 leading-relaxed">
                {item.desc}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
