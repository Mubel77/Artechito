import { Clock, ShieldCheck, Zap, TrendingUp, Smile } from 'lucide-react';

const iconMap = {
  'clock': Clock,
  'shield-check': ShieldCheck,
  'zap': Zap,
  'trending-up': TrendingUp,
  'smile': Smile
};

export default function Valor({ data }) {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {data.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.cards.map((card, index) => {
            const Icon = iconMap[card.icon];
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mb-4">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-700">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
