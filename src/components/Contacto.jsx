import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function Contacto({ data }) {
  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {data.title}
          </h2>
          <p className="text-xl text-gray-700">
            {data.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <a
            href={`mailto:${data.email}`}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-200 group"
          >
            <Mail className="mx-auto text-blue-600 group-hover:text-cyan-500 transition-colors mb-4" size={48} />
            <h3 className="font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-700">{data.email}</p>
          </a>

          <a
            href={`tel:${data.phone}`}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-200 group"
          >
            <Phone className="mx-auto text-blue-600 group-hover:text-cyan-500 transition-colors mb-4" size={48} />
            <h3 className="font-bold text-gray-900 mb-2">Teléfono</h3>
            <p className="text-gray-700">{data.phone}</p>
          </a>

          <a
            href={`https://wa.me/${data.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-200 group"
          >
            <MessageCircle className="mx-auto text-green-600 group-hover:text-green-500 transition-colors mb-4" size={48} />
            <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-700">Enviar mensaje</p>
          </a>
        </div>
      </div>
    </section>
  );
}
