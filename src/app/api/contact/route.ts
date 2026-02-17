import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email invalido"),
  phone: z.string().min(10, "Telefone invalido"),
  message: z.string().optional(),
});

function parseSmtpPort(value: string | undefined): number {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : 587;
}

function parseSmtpSecure(value: string | undefined, port: number): boolean {
  if (value === undefined) {
    return port === 465;
  }
  return value.toLowerCase() === "true";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = contactSchema.parse(body);

    const smtpHost = process.env.SMTP_HOST ?? "smtp.titan.email";
    const smtpPort = parseSmtpPort(process.env.SMTP_PORT);
    const smtpSecure = parseSmtpSecure(process.env.SMTP_SECURE, smtpPort);
    const emailFrom = process.env.EMAIL_FROM;
    const emailTo = process.env.EMAIL_TO;
    // Prefer EMAIL_PASSWORD, but keep EMAIL_PASS for backward compatibility.
    const emailPass = process.env.EMAIL_PASSWORD ?? process.env.EMAIL_PASS;

    const missingConfig: string[] = [];
    if (!emailFrom) missingConfig.push("EMAIL_FROM");
    if (!emailTo) missingConfig.push("EMAIL_TO");
    if (!emailPass) missingConfig.push("EMAIL_PASSWORD|EMAIL_PASS");

    if (missingConfig.length > 0) {
      console.error("[contact-api] Missing SMTP configuration", {
        missing: missingConfig,
      });
      return NextResponse.json(
        { message: "Email service not configured" },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: emailFrom,
        pass: emailPass,
      },
    });

    await transporter.verify();

    const mailInfo = {
      from: emailFrom,
      to: emailTo,
      replyTo: payload.email,
      subject: "Novo contato recebido - RCS Consultoria",
      text: `Nome: ${payload.name}\nEmail: ${payload.email}\nTelefone: ${payload.phone}\nMensagem: ${payload.message}`,
    };

    await transporter.sendMail(mailInfo);

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: error.issues[0]?.message ?? "Dados invalidos" },
        { status: 400 },
      );
    }

    console.error("[contact-api] Failed to send message", error);

    return NextResponse.json(
      { message: "Erro interno ao processar contato" },
      { status: 500 },
    );
  }
}
