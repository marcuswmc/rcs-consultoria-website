import { Resend } from "resend";
import { z } from "zod";


const contactSchema = z.object({
  userName: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email invalido"),
  phone: z.string().min(10, "Telefone invalido"),
  message: z.string().optional(),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse and validate the request body using contactSchema
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      // Return validation errors
      return Response.json({ error: result.error.flatten() }, { status: 400 });
    }

    // Extract validated data
    const { userName, email, phone, message } = result.data;

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['rcs@rcsconsulting.com.br'],
      subject: 'Novo contato recebido - RCS Consultoria',
      text: `Nome: ${userName}\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}