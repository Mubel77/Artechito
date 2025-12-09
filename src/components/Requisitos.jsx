import { CheckCircle } from 'lucide-react';

export default function Requisitos({ data }) {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-green-50 to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {data.title}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-gradient-to-br from-green-50 to-cyan-50 p-8 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-4">
            {data.items.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white p-4 rounded-lg"
              >
                <CheckCircle
                  className={item.completed ? 'text-green-500' : 'text-gray-300'}
                  size={24}
                />
                <span className="ml-3 text-gray-700 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
