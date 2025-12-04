import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton({ phoneNumber }) {
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-200 transform hover:scale-110 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chateá con nosotros
      </span>
    </a>
  );
}
