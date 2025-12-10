import { User, Linkedin } from 'lucide-react';

export default function Equipo({ data }) {
  return (
    <section id="equipo" className="py-16 bg-gradient-to-br from-blue-50 via-green-50 to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título y descripción */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {data.title}
          </h2>
          <p className="text-xl text-gray-700">
            {data.description}
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {data.members.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 text-center"
            >
              
              {/* Imagen o icono por defecto */}
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-blue-200 shadow-sm"
                />
              ) : (
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mb-4">
                  <User className="text-white" size={40} />
                </div>
              )}

              {/* Nombre */}
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {member.name}
              </h3>

              {/* Rol */}
              <p className="text-gray-600 mb-3">
                {member.role}
              </p>

              {/* LinkedIn si existe */}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
