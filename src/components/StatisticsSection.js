import { getCountry } from '@/lib/utils';

export default function StatisticsSection({ stats, countryCode }) {
  const theme = getCountry(countryCode).theme;

  return (
    <section
      className="py-16 lg:py-20"
      style={{
        background: theme.gradient,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
                {stat.value}
              </div>
              <div
                className="text-sm sm:text-base font-medium"
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
