
import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6287785667603"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with MONICAKES on WhatsApp"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[100] w-[68px] h-[68px] sm:w-[76px] sm:h-[76px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
    >
      <MessageCircle size={38} strokeWidth={2.2} />
    </a>
  );
}

export default WhatsAppButton;
