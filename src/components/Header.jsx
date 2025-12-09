import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ data }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-sm text-slate-900 shadow-sm z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src={data.logo}
              alt={data.logoAlt}
              className="h-14 w-14 object-contain rounded-md"
            />
            <span className="ml-3 text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
              Artechito
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {data.menu.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            {data.menu.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block py-2 text-slate-700 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
