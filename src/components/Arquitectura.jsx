import { ArrowRight, ExternalLink } from 'lucide-react';

export default function Arquitectura({ data }) {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {data.title}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {data.technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
              <p className="text-gray-700 mb-4">{tech.description}</p>
              {tech.url && (
                <a
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Ver más <ExternalLink size={16} className="ml-1" />
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Flujo del Sistema</h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {data.flow.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-medium text-center min-w-[180px]">
                  {step}
                </div>
                {index < data.flow.length - 1 && (
                  <ArrowRight className="text-gray-400 mx-2" size={24} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
