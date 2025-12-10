import React, { useEffect, useState } from 'react';
import { X, RotateCw } from 'lucide-react';

export default function ImageLightbox({ src, alt = '', className = '' }) {
  const [open, setOpen] = useState(false);
  const [showRotateTip, setShowRotateTip] = useState(false);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    // lock scroll when open
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    // detect portrait mobile to show rotate suggestion
    function update() {
      try {
        const mq = window.matchMedia('(orientation: portrait) and (max-width: 640px)');
        setShowRotateTip(mq.matches);
      } catch (e) {
        setShowRotateTip(false);
      }
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${className} cursor-pointer`}
        onClick={() => setOpen(true)}
      />

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-60 bg-white/90 rounded-full p-2 shadow"
              aria-label="Cerrar imagen"
            >
              <X size={18} />
            </button>

            <img
              src={src}
              alt={alt}
              className="block max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl transform transition-transform duration-300"
            />

            {showRotateTip && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 text-sm px-3 py-2 rounded-md shadow flex items-center gap-2">
                <RotateCw size={16} />
                <span>Gira tu celular para ver mejor</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
