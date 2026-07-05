export default function PartnerLogos({ title }) {
  const partners = [
    { name: 'Partner 1', color: 'bg-gray-200' },
    { name: 'Partner 2', color: 'bg-gray-200' },
    { name: 'Partner 3', color: 'bg-gray-200' },
    { name: 'Partner 4', color: 'bg-gray-200' },
    { name: 'Partner 5', color: 'bg-gray-200' },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-50">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className={`w-32 h-16 ${partner.color} rounded-lg flex items-center justify-center`}
            >
              <span className="text-gray-400 text-sm font-medium">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
