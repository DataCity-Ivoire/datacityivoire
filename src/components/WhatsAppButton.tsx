import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/2250719811717"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand shadow-glow transition-transform duration-300 hover:scale-110"
    aria-label="Contactez-nous sur WhatsApp"
  >
    <MessageCircle className="h-7 w-7 text-accent-foreground" />
  </a>
);

export default WhatsAppButton;
