import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RoomsSection from '@/components/accommodation/RoomsSection';

export default function AccommodationPage() {
  return (
    <>
      <Header />
      <main>
        <RoomsSection />
      </main>
      <Footer />
    </>
  );
}