import { AlertCircle } from 'lucide-react';

export default function Problematica({ data }) {
  return (
    <section id="nosotros" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {data.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-200"
            >
              <AlertCircle className="text-orange-500 mb-3" size={32} />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
