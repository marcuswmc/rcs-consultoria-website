import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511915738295"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/95 px-4 py-2 text-sm font-semibold text-primary shadow-md backdrop-blur-sm transition hover:bg-white hover:shadow-lg"
    >
      <MessageCircle className="h-4 w-4" />
      WhatsApp
    </a>
  );
}
