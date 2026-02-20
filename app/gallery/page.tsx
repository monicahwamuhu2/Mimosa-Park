import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GalleryGrid from '@/components/gallery/GalleryGrid';

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <GalleryGrid />
      </main>
      <Footer />
    </>
  );
}