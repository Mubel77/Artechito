import { Database as DatabaseIcon } from 'lucide-react';

export default function Database({ data }) {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-green-50 to-violet-50">
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
          {data.entities.map((entity, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border-t-4 border-blue-600 hover:shadow-lg transition-shadow duration-200"
            >
              <DatabaseIcon className="text-blue-600 mb-3" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{entity.name}</h3>
              <p className="text-gray-700">{entity.description}</p>
            </div>
          ))}
        </div>

        {data.diagramPlaceholder && (
          <div className="bg-gray-100 rounded-lg p-12 text-center">
            <DatabaseIcon className="mx-auto text-gray-400 mb-4" size={64} />
            <p className="text-gray-600 text-lg">Diagrama de Base de Datos</p>
          </div>
        )}
      </div>
    </section>
  );
}
