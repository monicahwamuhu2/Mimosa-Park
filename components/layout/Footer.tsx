import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-[#2d2520] text-gray-300 overflow-hidden">

      {/* Karibu Mimosa — full footer background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2
          className="font-serif font-bold text-white/5 leading-none tracking-tight select-none text-center px-4"
          style={{ fontSize: 'clamp(3.5rem, 18vw, 18rem)', lineHeight: 1 }}
        >
          Karibu<br />Mimosa
        </h2>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">

          {/* Left Column - Logo & CTA */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <Image
                src="/images/logo.jpeg"
                alt="Mimosa Park"
                width={180}
                height={70}
                className="h-16 w-auto rounded-lg"
              />
            </div>

            <h3 className="font-serif text-3xl lg:text-4xl font-normal text-white mb-8 leading-tight">
              Your luxurious getaway awaits
            </h3>

            <a
              href="tel:+254741662514"
              className="inline-block rounded-full border-2 border-mimosa-400 px-10 py-3.5 text-base font-medium text-mimosa-400 hover:bg-mimosa-400 hover:text-gray-900 transition-all duration-300"
            >
              Book your stay now
            </a>

            <p className="mt-12 text-sm text-gray-500">
              Designed by <span className="text-mimosa-400">Solari Studio</span>. {new Date().getFullYear()}
            </p>
          </div>

          {/* Middle Column - Pages */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              Pages
            </h3>
            <nav className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'Accommodation', href: '/accommodation' },
                { name: 'Experiences', href: '/experiences' },
                { name: 'Dining', href: '/dining' },
                { name: 'Drinks', href: '/drinks' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Getting Here', href: '/getting-here' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base font-light text-gray-300 hover:text-mimosa-400 transition-colors block"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          {/* Right Column - Contact & Social */}
          <div className="lg:col-span-4 space-y-10">
            <div>
              <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
                Contact Info
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+254741662514"
                  className="block text-base text-gray-300 hover:text-mimosa-400 transition-colors"
                >
                  +254-741-662-514
                </a>

                <a
                  href="mailto:mimosapark125@gmail.com"
                  className="block text-base text-gray-300 hover:text-mimosa-400 transition-colors"
                >
                  mimosapark125@gmail.com
                </a>

                <address className="not-italic text-base text-gray-400 leading-relaxed pt-2">
                  Mimosa Park and Island<br />
                  Along Sagana,<br />
                  Makutano, Kenya
                </address>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
                Follow us on
              </h3>
              <div className="flex items-center gap-5">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/_mimosapark/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center gap-2 text-gray-300 hover:text-mimosa-400 transition-colors group"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-base font-light">Instagram</span>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@_mimosapark?_r=1&_t=ZS-948Bmm1DYxD"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex items-center gap-2 text-gray-300 hover:text-mimosa-400 transition-colors group"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                  </svg>
                  <span className="text-base font-light">TikTok</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}