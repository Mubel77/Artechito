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
    if (typeof window !== 'undefined' && 'screen' in window && screen.orientation && screen.orientation.lock) {
      try {
        await screen.orientation.lock('landscape');
      } catch (err) {
        // ignore errors (may not be allowed)
      }
    }
  }

  const openModal = async () => {
    setIsOpen(true);
    // small delay then try lock
    setTimeout(() => tryLockLandscape(), 300);
  };

  const closeModal = () => {
    setIsOpen(false);
    // try unlock
    if (typeof window !== 'undefined' && 'screen' in window && screen.orientation && screen.orientation.unlock) {
      try {
        screen.orientation.unlock();
      } catch (err) {}
    }
    // pause video if using a <video>
    if (videoRef.current && typeof videoRef.current.pause === 'function') {
      videoRef.current.pause();
    }
  };

  // choose video embed: prefer data.videoUrl (YouTube or direct), fallback to placeholder state
  const videoUrl = data.videoUrl || '';

  return (
    <section id="demo" className="py-16 bg-gradient-to-br from-blue-50 via-green-50 to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {data.title}
          </h2>
          <p className="text-xl text-gray-700">
            {data.description}
          </p>
        </div>

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

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          {data.buttons.map((button, index) => (
            <a
              key={index}
              href={button.href || '#contacto'}
              onClick={(e) => {
                // if primary and has a videoUrl, open modal instead of navigating
                if (button.variant === 'primary' && videoUrl) {
                  e.preventDefault();
                  openModal();
                }
              }}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-center ${
                button.variant === 'primary'
                  ? 'bg-gradient-to-r from-blue-600 to-violet-500 text-white hover:shadow-lg transform hover:-translate-y-1'
                  : button.variant === 'secondary'
                  ? 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
                  : 'bg-gradient-to-r from-violet-500 to-blue-600 text-white hover:shadow-lg transform hover:-translate-y-1'
              }`}
            >
              {button.text}
            </a>
          ))}
        </div>

        <p className="text-center text-gray-600 italic">
          {data.note}
        </p>
      </div>

      {/* Modal overlay */}
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
                {videoUrl ? (
                  // if youtube link, embed iframe; else if direct video (.mp4) use <video>
                  (videoUrl.includes('youtube') || videoUrl.includes('youtu.be')) ? (
                    <iframe
                      title="Demo video"
                      src={videoUrl.includes('embed') ? videoUrl : `https://www.youtube.com/embed/${extractYouTubeId(videoUrl)}?autoplay=1`}
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      frameBorder="0"
                    />
                  ) : (
                   <video ref={videoRef} src={videoUrl} controls autoPlay className="w-full h-full object-cover" />
                  )
                ) : (
                  <div className="text-white p-8">Video no disponible</div>
                )}
              </div>
            </div>

            {/* Mobile rotate hint */}
            {isPortrait && (
              <div className="mt-4 text-center text-sm text-gray-200">Por favor, girá tu dispositivo a horizontal para mejor visualización.</div>
            )}
          </div>
        </div>
      )}
    </section>
  );

  function extractYouTubeId(url) {
    try {
      const u = new URL(url);
      if (u.hostname === 'youtu.be') return u.pathname.slice(1);
      if (u.searchParams.has('v')) return u.searchParams.get('v');
      // fallback: try to parse last part
      const parts = u.pathname.split('/');
      return parts[parts.length - 1];
    } catch (e) {
      return url;
    }
  }
}