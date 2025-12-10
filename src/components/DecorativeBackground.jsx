export default function DecorativeBackground() {
  return (
    <>
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
    </>
  );
}
