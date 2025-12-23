"use client";

import { useMemo, useState } from "react";
import { MapPin, Send } from "lucide-react";
import { contactInfo } from "../data/contactInfo";
import { socialLinks } from "../data/socialLinks";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";

type FormState = {
  name: string;
  email: string;
  phone: string;
  how: string;
  message: string;
};

export default function ContatoPage() {
  const howOptions = useMemo(
    () => ["Google", "Instagram", "Indicação", "Anúncio", "Outro"],
    []
  );

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    how: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<null | {
    type: "ok" | "err";
    msg: string;
  }>(null);

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFeedback(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          data?.error || "Não foi possível enviar. Tente novamente."
        );
      }

      setFeedback({
        type: "ok",
        msg: "Mensagem enviada! Em breve retornaremos.",
      });
      setForm({ name: "", email: "", phone: "", how: "", message: "" });
    } catch (err: any) {
      setFeedback({ type: "err", msg: err?.message || "Erro ao enviar." });
    } finally {
      setLoading(false);
    }
  }

  const EmailIcon = contactInfo.email.icon;

  return (
    <>
      <Header />
      <PageHeader
        title="Contato"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contato" }]}
      />

      <main className="min-h-[calc(100vh-0px)] bg-[#2b2b2b] text-white">
        <section className="px-6 py-14 md:py-20">
          <div className="mx-auto max-w-6xl">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center text-[#404A3D] justify-center rounded-full bg-white px-4 py-2 text-xs font-semibold tracking-wide">
                FALE CONOSCO
              </span>

              <h2 className="mt-3 text-3xl md:text-4xl text-white font-bold leading-tight">
                Solicite seu <br />
                <span className="text-(--primary-color)">
                  Orçamento Gratuito
                </span>
              </h2>

              <p className="mt-4 text-sm md:text-base text-white/70">
                Preencha o formulário abaixo ou entre em contato direto pelos
                nossos canais. <br /> Responderemos em até 2 horas com uma proposta
                personalizada.
              </p>
            </div>

            {/* Content */}
            <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.9fr] items-start">
              {/* Form card */}
              <div className="rounded-2xl bg-white p-6 md:p-8 text-[#1b1b1b] shadow-xl">
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Nome*" required>
                      <input
                        value={form.name}
                        onChange={(e) => onChange("name", e.target.value)}
                        placeholder="Seu nome"
                        className="input"
                        required
                      />
                    </Field>

                    <Field label="E-mail*" required>
                      <input
                        value={form.email}
                        onChange={(e) => onChange("email", e.target.value)}
                        placeholder="exemplo@exemplo.com.br"
                        className="input"
                        type="email"
                        required
                      />
                    </Field>

                    <Field label="Telefone*" required>
                      <input
                        value={form.phone}
                        onChange={(e) => onChange("phone", e.target.value)}
                        placeholder="(11) 99999-9999"
                        className="input"
                        required
                      />
                    </Field>

                    <Field label="Como Nos Conheceu*" required>
                      <select
                        value={form.how}
                        onChange={(e) => onChange("how", e.target.value)}
                        className="input"
                        required
                      >
                        <option value="">Selecione</option>
                        {howOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="Mensagem">
                    <textarea
                      value={form.message}
                      onChange={(e) => onChange("message", e.target.value)}
                      placeholder="Escreva aqui..."
                      className="input min-h-35 resize-none py-3"
                    />
                  </Field>

                  <div className="flex items-end justify-end gap-3">
                    <p className="text-xs text-[#7a7a7a]">
                      Os campos com * são obrigatórios
                    </p>

                    {feedback && (
                      <p
                        className={`text-xs font-semibold ${
                          feedback.type === "ok"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {feedback.msg}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 w-full rounded-full bg-[#1f1f1f] px-6 py-2 text-sm font-bold tracking-wider text-(--primary-color) hover:opacity-90 disabled:opacity-60"
                  >
                    <span className="inline-flex items-center justify-center gap-2">
                      {loading ? "ENVIANDO..." : "ENVIAR MENSAGEM"}
                    </span>
                  </button>
                </form>

                <style jsx>{`
                  .input {
                    width: 100%;
                    border-radius: 12px;
                    border: 1px solid #e7e7e7;
                    padding: 12px 14px;
                    font-size: 14px;
                    outline: none;
                    transition: 0.2s;
                    background: #fff;
                  }
                  .input:focus {
                    border-color: rgba(246, 178, 26, 0.9);
                    box-shadow: 0 0 0 4px rgba(246, 178, 26, 0.18);
                  }
                `}</style>
              </div>


              <aside
                className="rounded-2xl mt-8 p-7 md:p-8 text-[#1b1b1b] shadow-xl"
                style={{ backgroundColor: "var(--primary-color)" }} 
              >
                <h2 className="text-2xl font-bold">
                  Informações de Contato
                </h2>

                {/* Localização */}
                <div className="flex items-start gap-4 pt-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1f1f1f] text-(--primary-color)">
                    <MapPin size={24} />
                  </span>

                  <div>
                    <p className="font-extrabold">
                      {contactInfo.location.title}
                    </p>
                    <p className="whitespace-pre-line text-sm opacity-80">
                      {contactInfo.location.text}
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-6">
                  {/* Telefones / WhatsApp */}
                  <div>
                    <div className="space-y-3">
                      {contactInfo.phoneGroup.items.map((item, idx) => {
                        const Icon = item.icon as any;
                        return (
                          <a
                            key={idx}
                            href={item.href}
                            target="_blank"
                            rel="nofollow noreferrer"
                            className="flex items-center gap-4 hover:opacity-80 transition"
                          >
                            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1f1f1f] text-(--primary-color)">
                              <Icon size={24} />
                            </span>
                            <span className="font-medium">{item.label}</span>
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  {/* Email */}
                  <a
                    href={contactInfo.email.href}
                    className="flex items-center gap-4 hover:opacity-80 transition"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1f1f1f] text-(--primary-color)">
                      <EmailIcon size={24} />
                    </span>
                    <span className="font-medium">
                      {contactInfo.email.label}
                    </span>
                  </a>
                </div>

                {/* Redes sociais */}
                <div className="mt-8 flex items-center gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon as any;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="nofollow noreferrer"
                        aria-label={social.name}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1f1f1f]/30 hover:bg-white/30 transition"
                      >
                        <Icon className="h-4.5 w-4.5" />
                      </a>
                    );
                  })}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-[#6e6e6e]">
        {label}
      </span>
      {children}
    </label>
  );
}
