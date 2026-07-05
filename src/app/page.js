import { redirect } from 'next/navigation';
import { getDefaultCountryCode } from '@/lib/utils';

export default function RootPage() {
  const defaultCountry = getDefaultCountryCode();
  redirect(`/${defaultCountry}/`);
}
