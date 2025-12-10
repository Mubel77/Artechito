import React, { useRef, useEffect, useState } from 'react';

export default function Partners({ data }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="socios" ref={ref} className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{data.title}</h2>
          <p className="mt-3 text-lg text-slate-700">{data.description}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {data.logos.map((logo, i) => (
            <div key={i} className={`w-40 h-20 flex items-center justify-center bg-white rounded-lg shadow-md p-3 transition-transform duration-500 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <img src={logo.src} alt={logo.name} className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
