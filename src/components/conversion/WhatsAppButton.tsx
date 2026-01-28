import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "911145678900"; // Replace with actual WhatsApp number
  const message = encodeURIComponent("Hi! I'm interested in your event management services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden lg:flex fixed bottom-28 right-8 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 animate-pulse-glow"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
};
