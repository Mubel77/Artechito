import { Github, Linkedin } from 'lucide-react';

const iconMap = {
  'github': Github,
  'linkedin': Linkedin
};

export default function Footer({ data }) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              SBI - Artechito
            </h3>
            <p className="text-gray-400">
              Sistema de Boletería Inteligente con IA
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              {data.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              {data.social.map((social, index) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>{data.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
