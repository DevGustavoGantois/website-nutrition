import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <Link
      href=" https://wa.me/557196951555?text=Ol%C3%A1.%20Tudo%20bem%20Rafael?!%20Queria%20marcar%20uma%20consulta!%20Qual%20seria%20sua%20disponibilidade%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 lg:right-10 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
    >
      <MessageCircle size={28} />
    </Link>
  );
};
