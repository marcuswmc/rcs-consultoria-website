import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "RCS Consultoria Contabil",
  description: "Contabilidade digital, planejamento tributario e consultoria empresarial 100% online para todo Brasil.",
  keywords: [
    "contabilidade",
    "contabilidade digital",
    "consultoria contabil",
    "planejamento tributario",
    "abertura de empresa",
    "gestao tributaria",
    "assessoria contabil",
    "consultoria empresarial",
    "contabilidade Sao Paulo",
    "contabilidade online Brasil",
  ],
  authors: [{ name: "RCS Consultoria Contabil" }],
  creator: "RCS Consultoria Contabil",
  publisher: "RCS Consultoria Contabil",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          {children}
          <Analytics />
          <WhatsAppFloat />
          <SpeedInsights/>
        </Providers>
      </body>
    </html>
  );
}
