import { Check, X } from 'lucide-react';

export default function Precios({ data }) {
  return (
    <section id="precios" className="py-16 bg-gradient-to-br from-blue-50 via-green-50 to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {data.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {data.plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-2xl transform scale-105'
                  : 'bg-gray-50 border-2 border-gray-200'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-lg ml-2 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                  / {plan.duration}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    {feature.included ? (
                      <Check className={plan.highlighted ? 'text-white' : 'text-green-500'} size={20} />
                    ) : (
                      <X className={plan.highlighted ? 'text-blue-200' : 'text-gray-400'} size={20} />
                    )}
                    <span className={`ml-3 ${plan.highlighted ? 'text-white' : 'text-gray-700'} ${!feature.included && 'opacity-50'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`block w-full py-3 rounded-lg font-semibold text-center transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
