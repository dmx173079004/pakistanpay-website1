import { getAllCountryCodes, getCountry } from '@/lib/utils';
import { getAboutContent } from '@/data/content';

export async function generateStaticParams() {
  return getAllCountryCodes().map((code) => ({ country: code }));
}

export async function generateMetadata({ params }) {
  const { getSeoMeta } = await import('@/data/content');
  return getSeoMeta(params.country, 'about');
}

export default function AboutPage({ params }) {
  const { country } = params;
  const content = getAboutContent(country);
  const theme = getCountry(country).theme;

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            {content.title}
          </h1>
          <p className="text-xl text-primary-600 font-semibold">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            {content.description.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {content.highlights.map((item) => (
              <div
                key={item.text}
                className="flex items-center space-x-3 bg-gray-50 rounded-xl p-4"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-gray-700 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section
        className="py-16"
        style={{ background: theme.gradient }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {content.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-extrabold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {content.teamTitle}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {content.teamDescription}
          </p>
        </div>
      </section>
    </div>
  );
}
