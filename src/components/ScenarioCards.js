export default function ScenarioCards({ scenarios, title }) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            为不同行业量身打造的本土支付解决方案
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {scenarios.map((scenario, index) => (
            <div
              key={scenario.title}
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-primary-100 transition-all duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-primary-100 transition-colors">
                {scenario.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {scenario.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {scenario.description}
              </p>
              <div className="mt-6 flex items-center text-primary-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>了解更多</span>
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
