import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problematica from './components/Problematica';
import Solucion from './components/Solucion';
import Database from './components/Database';
import Arquitectura from './components/Arquitectura';
import Requisitos from './components/Requisitos';
import Valor from './components/Valor';
import Demo from './components/Demo';
import Documentacion from './components/Documentacion';
import Precios from './components/Precios';
import Equipo from './components/Equipo';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/site.json')
      .then(response => response.json())
      .then(jsonData => {
        setData(jsonData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading site data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-violet-50 flex items-center justify-center text-slate-900">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-slate-700 text-lg">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
        <p className="text-red-600 text-lg">Error al cargar los datos</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-violet-50 text-slate-900">
      <Header data={data.header} />
      <Hero data={data.hero} />
      <Problematica data={data.problematica} />
      <Solucion data={data.solucion} />
      <Database data={data.database} />
      <Arquitectura data={data.arquitectura} />
      <Requisitos data={data.requisitos} />
      <Valor data={data.valor} />
      <Demo data={data.demo} />
      <Documentacion data={data.documentacion} />
      <Precios data={data.precios} />
      <Equipo data={data.equipo} />
      <Contacto data={data.contacto} />
      <Footer data={data.footer} />
      <WhatsAppButton phoneNumber={data.contacto.whatsapp} />
    </div>
  );
}

export default App;
