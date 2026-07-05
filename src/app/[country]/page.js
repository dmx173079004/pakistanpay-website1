import { getAllCountryCodes, getDefaultCountryCode } from '@/lib/utils';
import { getHomeContent } from '@/data/content';
import HeroSection from '@/components/HeroSection';
import ScenarioCards from '@/components/ScenarioCards';
import StatisticsSection from '@/components/StatisticsSection';
import FeaturesSection from '@/components/FeaturesSection';
import PartnerLogos from '@/components/PartnerLogos';
import CtaSection from '@/components/CtaSection';

export async function generateStaticParams() {
  return getAllCountryCodes().map((code) => ({ country: code }));
}

export async function generateMetadata({ params }) {
  const { country } = params;
  const { getSeoMeta } = await import('@/data/content');
  return getSeoMeta(country, 'home');
}

export default function HomePage({ params }) {
  const { country } = params;
  const content = getHomeContent(country);

  return (
    <div>
      <HeroSection content={content} countryCode={country} />
      <ScenarioCards scenarios={content.scenarios} title={content.scenariosTitle} />
      <StatisticsSection stats={content.stats} countryCode={country} />
      <FeaturesSection features={content.features} title={content.featuresTitle} />
      <PartnerLogos title={content.partnersTitle} />
      <CtaSection content={content} countryCode={country} />
    </div>
  );
}
