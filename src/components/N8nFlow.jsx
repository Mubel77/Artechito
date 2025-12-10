import React, { useRef, useEffect, useState } from 'react';
import { Database, Cpu, Activity, FileText } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

export default function N8nFlow({ data }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Minimal text, layout similar to Database component: small cards + large diagram placeholder
  const steps = [
    { icon: Activity, title: 'Entrada', desc: 'Consulta en lenguaje natural' },
    { icon: Cpu, title: 'Procesamiento AI', desc: 'Gemini interpreta y genera SQL' },
    { icon: Database, title: 'Base de Datos', desc: 'Consulta Supabase' },
    { icon: FileText, title: 'Reportes', desc: 'Generación y envío / almacenamiento' }
  ];

  return (
    <section id="n8n-flow" ref={ref} className="py-16 bg-gradient-to-br from-blue-50 via-green-50 to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900">{data.title}</h3>
          {data.subtitle && <p className="text-gray-700 mt-2 max-w-2xl mx-auto">{data.subtitle}</p>}
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-10">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className={`bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-lg border-t-4 border-blue-600 hover:shadow-lg transition-shadow duration-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <Icon className="text-blue-600 mb-3" size={28} />
                <h4 className="text-lg font-bold text-gray-900">{s.title}</h4>
                <p className="text-gray-700 text-sm">{s.desc}</p>
              </div>
            );
          })}
        </div>

        <div className={`bg-gray-100 rounded-lg p-12 text-center ${visible ? 'opacity-100' : 'opacity-0'} transition-all duration-700`}>
          {data.image ? (
            <ImageLightbox src={data.image} alt={data.title} className="mx-auto max-w-full h-auto rounded" />
          ) : (
            <img src={data.image} alt={data.title} className="mx-auto max-w-full h-auto rounded" />
          )}
          <p className="text-gray-600 text-lg mt-4">Diagrama del flujo en n8n</p>
        </div>
      </div>
    </section>
  );
}
