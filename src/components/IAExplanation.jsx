import { Play, X, RotateCw } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function IAExplanation({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsPortrait(window.innerHeight > window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
    if (isOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen]);

  async function tryLockLandscape() {
    if (typeof window !== 'undefined' && 'screen' in window && screen.orientation && screen.orientation.lock) {
      try { await screen.orientation.lock('landscape'); } catch (err) { }
    }
  }

  const openModal = async () => {
    setIsOpen(true);
    setTimeout(() => tryLockLandscape(), 300);
  };

  const closeModal = () => {
    setIsOpen(false);
    if (typeof window !== 'undefined' && 'screen' in window && screen.orientation && screen.orientation.unlock) {
      try { screen.orientation.unlock(); } catch (err) { }
    }
    if (videoRef.current && typeof videoRef.current.pause === 'function') videoRef.current.pause();
  };

  const url = data?.url || '';

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-green-50 to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900">{data?.title}</h3>
          {data?.subtitle && <p className="text-gray-700 mt-3 max-w-2xl mx-auto text-lg">{data.subtitle}</p>}
        </div>

        <div className="max-w-4xl mx-auto mb-6">
          <div className="relative bg-gradient-to-br from-gray-100 to-white rounded-lg aspect-video flex items-center justify-center shadow-md">
            <button
              onClick={openModal}
              className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg hover:scale-105 transform transition"
              aria-label="Abrir explicación IA"
            >
              <Play size={40} />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={closeModal} />

          <div className="relative z-50 max-w-4xl w-full mx-4 md:mx-0">
            <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 z-60 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white"
                aria-label="Cerrar"
              >
                <X />
              </button>

              <div className="w-full aspect-video bg-black flex items-center justify-center">
                {url ? (
                  <iframe
                    title={data?.title || 'Video explicación'}
                    src={url}
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    frameBorder="0"
                  />
                ) : (
                  <div className="text-white p-8">Video no disponible</div>
                )}
              </div>
            </div>

            {isPortrait && (
              <div className="mt-4 text-center text-sm text-gray-200 flex items-center justify-center gap-2">
                <RotateCw size={16} />
                <span>Por favor, girá tu dispositivo a horizontal para mejor visualización.</span>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
