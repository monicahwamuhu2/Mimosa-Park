import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DrinksMenu from '@/components/drinks/DrinksMenu';

export default function DrinksPage() {
  return (
    <>
      <Header />
      <main>
        <DrinksMenu />
      </main>
      <Footer />
    </>
  );
}