import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919676623494"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-success text-success-foreground shadow-lg hover:scale-110 transition-smooth animate-float"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inset-0 rounded-full bg-success animate-ping opacity-20" />
    </a>
  );
};

export default WhatsAppButton;
