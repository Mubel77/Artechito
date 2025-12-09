import { CheckCircle, Lightbulb } from 'lucide-react';

export default function Solucion({ data }) {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-green-50 to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {data.title}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Lightbulb className="text-violet-500 mr-3" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">Alternativas Evaluadas</h3>
            </div>
            <ul className="space-y-3">
              {data.alternatives.map((alt, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span className="text-gray-700">{alt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <CheckCircle className="text-green-500 mr-3" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">Beneficios IA</h3>
            </div>
            <ul className="space-y-3">
              {data.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
