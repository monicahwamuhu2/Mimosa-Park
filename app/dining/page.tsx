import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DiningMenu from '@/components/dining/DiningMenu';

export default function DiningPage() {
  return (
    <>
      <Header />
      <main>
        <DiningMenu />
      </main>
      <Footer />
    </>
  );
}