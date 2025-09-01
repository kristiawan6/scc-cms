import { Metadata } from 'next';
import KomunitasPage from '../pages/komunitas';

export const metadata: Metadata = {
  title: 'Komunitas - SCC',
  description: 'Bergabunglah dengan komunitas COOL dan program mentoring Growth In Christ di SCC',
};

export default function Komunitas() {
  return <KomunitasPage />;
}