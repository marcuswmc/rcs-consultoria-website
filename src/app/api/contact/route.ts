import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email invalido"),
  phone: z.string().min(10, "Telefone invalido"),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = contactSchema.parse(body);

    // Placeholder for integrations (email/CRM). Keep response stable for UI flow.
    console.info("Novo contato recebido", {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      hasMessage: Boolean(payload.message),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: error.issues[0]?.message ?? "Dados invalidos" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { message: "Erro interno ao processar contato" },
      { status: 500 },
    );
  }
}
