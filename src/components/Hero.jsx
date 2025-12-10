export default function Hero({ data }) {
  return (
    <section id="home" className="relative pt-24 pb-16 bg-gradient-to-br from-blue-50 via-green-50 to-violet-50 min-h-screen flex items-center text-slate-900 overflow-hidden">
      {/* Decorative background layers (central panel + bubbles + circuit SVG) */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        {/* Central subtle panel */}
        <div className="w-11/12 md:w-3/4 lg:w-2/3 h-4/5 rounded-3xl bg-white/70 backdrop-blur-md border border-white/25 shadow-inner relative">
          {/* Circuit SVG as decorative element */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{opacity: 0.04}}>
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="50%" stopColor="#34D399" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            {/* simple circuit-like paths */}
            <g stroke="url(#g1)" strokeWidth="2.5" fill="none">
              <path d="M40 100h120v40h-40v80h60v-40h140" strokeLinecap="round" />
              <circle cx="200" cy="120" r="6" />
              <path d="M300 200h120v-40h80v120h-40" strokeLinecap="round" />
              <circle cx="420" cy="180" r="6" />
              <path d="M520 60v160h120" strokeLinecap="round" />
              <path d="M120 320h200v-30h-60v-40h80" strokeLinecap="round" />
              <path d="M450 350h120v-60h-40v-20h-80" strokeLinecap="round" />
            </g>
            {/* small brain icon made of circles to hint AI */}
            <g transform="translate(600,120) scale(0.8)" fill="#8B5CF6" style={{opacity:0.08}}>
              <path d="M20 10c6-8 26-8 32 0c6 8 6 22 0 30c-6 8-26 8-32 0c-6-8-6-22 0-30z" />
            </g>
          </svg>
        </div>
      </div>

      {/* Colored bubbles (static, low opacity) */}
      <div className="absolute -left-12 top-14 w-56 h-56 rounded-full bg-blue-300 opacity-15 filter blur-2xl pointer-events-none"></div>
      <div className="absolute right-8 top-36 w-44 h-44 rounded-full bg-violet-300 opacity-12 filter blur-xl pointer-events-none"></div>
      <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 w-72 h-72 rounded-full bg-blue-300 opacity-10 filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 z-20">
              {data.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8 z-20">
              {data.subtitle}
            </p>
            <div className="mb-8" />
          </div>

          <div className="flex justify-center items-center z-20">
            <div className="relative">
              <img
                src={data.heroImage}
                alt="Artechito Main"
                className="w-full max-w-lg rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 border-2 border-transparent"
              />

              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-xl flex flex-col items-center">
                <div className="relative">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(data.qrUrl || 'https://artechito.com')}`}
                    alt="QR Code"
                    className="w-44 h-44 rounded-md"
                  />
                  <img
                    src={data.heroImage}
                    alt="logo"
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-white bg-white object-contain"
                  />
                </div>
                <p className="text-xs text-center mt-2 text-slate-600">Escanea aquí</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
