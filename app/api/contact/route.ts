import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function sanitize(input: string) {
  return String(input || "").trim();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = sanitize(body?.name);
    const email = sanitize(body?.email);
    const phone = sanitize(body?.phone);
    const how = sanitize(body?.how);
    const message = sanitize(body?.message);

    if (!name || !email || !phone || !how) {
      return NextResponse.json(
        { error: "Preencha os campos obrigatórios." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!to || !from) {
      return NextResponse.json(
        { error: "E-mails de envio não configurados no servidor." },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Novo contato - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5">
          <h2>Novo contato pelo site</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>Como conheceu:</strong> ${how}</p>
          <p><strong>Mensagem:</strong><br/>${(message || "(sem mensagem)").replaceAll("\n", "<br/>")}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Erro inesperado ao enviar." },
      { status: 500 }
    );
  }
}
