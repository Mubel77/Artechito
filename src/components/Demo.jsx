import { Play } from 'lucide-react';

export default function Demo({ data }) {
  // Link externo (Drive u otro)
  const redirectUrl =
    data?.externalVideoLink ||
    'https://drive.google.com/file/d/1XDvQ64DxD12RG33mflyUSAwulMoJsXn6/view?usp=drivesdk';

  // Redirección
  const redirectToVideo = () => {
    if (!redirectUrl) return;
    window.open(redirectUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="demo"
      className="py-16 bg-gradient-to-br from-blue-50 via-green-50 to-violet-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITULO */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {data?.title}
          </h2>
          <p className="text-xl text-gray-700">
            {data?.description}
          </p>
        </div>

        {/* VIDEO PLACEHOLDER */}
        <div className="max-w-4xl mx-auto mb-12">
          {data?.videoPlaceholder && (
            <div className="relative bg-gradient-to-br from-gray-100 to-white rounded-lg aspect-video flex items-center justify-center shadow-md">
              <button
                onClick={redirectToVideo}
                className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg hover:scale-105 transform transition"
                aria-label="Ver video"
              >
                <Play size={40} />
              </button>
            </div>
          )}
        </div>

        {/* BOTÓN "VER VIDEO" */}
        <div className="text-center mb-8">
          <button
            onClick={redirectToVideo}
            className="px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-center bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
          >
            Ver Video Completo
          </button>
        </div>

        {/* NOTA */}
        {data?.note && (
          <p className="text-center text-gray-600 italic">
            {data.note}
          </p>
        )}
      </div>
    </section>
  );
}
