import { BookOpen, Download, Code, Workflow, Database as DatabaseIcon, FileText } from 'lucide-react';

const iconMap = {
  'book-open': BookOpen,
  'download': Download,
  'code': Code,
  'workflow': Workflow,
  'database': DatabaseIcon,
  'file-text': FileText
};

export default function Documentacion({ data }) {
  return (
    <section id="documentacion" className="py-16 bg-gradient-to-br from-blue-50 via-green-50 to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {data.title}
          </h2>
          <p className="text-xl text-gray-700">
            {data.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.docs.map((doc, index) => {
            const Icon = iconMap[doc.icon];
            return (
              <a
                key={index}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 group"
              >
                <Icon className="text-blue-600 mb-3 group-hover:text-cyan-500 transition-colors" size={32} />
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {doc.title}
                </h3>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
