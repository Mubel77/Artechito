import { Play, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Demo({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen]);

  async function tryLockLandscape() {
    if (typeof window !== 'undefined' && screen?.orientation?.lock) {
      try {
        await screen.orientation.lock('landscape');
      } catch (err) {}
    }
  }

  const openModal = () => {
    setIsOpen(true);
    setTimeout(() => tryLockLandscape(), 300);
  };

  const closeModal = () => {
    setIsOpen(false);
    if (screen?.orientation?.unlock) {
      try {
        screen.orientation.unlock();
      } catch (err) {}
    }
    if (videoRef.current?.pause) videoRef.current.pause();
  };

  const videoUrl = data.videoUrl || '';

  return (
    <section id="demo" className="py-16 bg-gradient-to-br from-blue-50 via-green-50 to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TITULO */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {data.title}
          </h2>
          <p className="text-xl text-gray-700">
            {data.description}
          </p>
        </div>

        {/* VIDEO PLACEHOLDER */}
        <div className="max-w-4xl mx-auto mb-12">
          {data.videoPlaceholder && (
            <div className="relative bg-gradient-to-br from-gray-100 to-white rounded-lg aspect-video flex items-center justify-center shadow-md">
              <button
                onClick={openModal}
                className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg hover:scale-105 transform transition"
                aria-label="Abrir demo"
              >
                <Play size={40} />
              </button>
            </div>
          )}
        </div>

        {/* BOTÓN "VER VIDEO" */}
        <div className="text-center mb-8">
          <a
            href={data.externalVideoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-center bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
          >
            Ver Video Completo
          </a>
        </div>

        {/* NOTA */}
        {data.note && (
          <p className="text-center text-gray-600 italic">
            {data.note}
          </p>
        )}
      </div>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={closeModal} />

          <div className="relative z-50 max-w-4xl w-full mx-4 md:mx-0">
            <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
              
              {/* BOTÓN CERRAR */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white"
              >
                <X />
              </button>

              {/* VIDEO */}
              <div className="w-full aspect-video bg-black flex items-center justify-center">
                {videoUrl ? (
                  videoUrl.includes('.mp4') ? (
                    <video ref={videoRef} src={videoUrl} controls autoPlay className="w-full h-full object-cover" />
                  ) : (
                    <iframe
                      title="Demo video"
                      src={videoUrl}
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      frameBorder="0"
                    />
                  )
                ) : (
                  <div className="text-white p-8">Video no disponible</div>
                )}
              </div>
            </div>

            {/* AVISO DE ROTAR */}
            {isPortrait && (
              <div className="mt-4 text-center text-sm text-gray-200">
                Por favor, girá tu dispositivo a horizontal para mejor visualización.
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
