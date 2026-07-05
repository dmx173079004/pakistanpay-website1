import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getSeoMeta } from '@/data/content';

export async function generateMetadata({ params }) {
  const { country } = params;
  return getSeoMeta(country, 'home');
}

export default function CountryLayout({ children, params }) {
  const { country } = params;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar countryCode={country} />
      <main className="flex-grow pt-16 lg:pt-20">
        {children}
      </main>
      <Footer countryCode={country} />
    </div>
  );
}
