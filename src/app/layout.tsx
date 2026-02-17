import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export const metadata: Metadata = {
  title: "RCS Consultoria Contabil",
  description: "Contabilidade digital, planejamento tributario e consultoria empresarial 100% online para todo Brasil.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          {children}
          <WhatsAppFloat />
        </Providers>
      </body>
    </html>
  );
}
