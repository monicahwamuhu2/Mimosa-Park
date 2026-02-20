import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-[#2d2520] text-gray-300 overflow-hidden">
      {/* Large Watermark Text */}
      <div className="absolute inset-0 flex items-end justify-start pointer-events-none">
        <h2
          className="font-serif text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold text-white/5 leading-none tracking-tight select-none"
          style={{ transform: 'translateY(20%)' }}
        >
          Karibu Mimosa
        </h2>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column - Logo & CTA */}
          <div className="lg:col-span-5">
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/images/logo.jpeg"
                alt="Mimosa Park"
                width={180}
                height={70}
                className="h-16 w-auto brightness-0 invert"
              />
            </div>

            <h3 className="font-serif text-3xl lg:text-4xl font-normal text-white mb-8 leading-tight">
              Your luxurious getaway awaits
            </h3>

            <Link
              href="#footer"
              className="inline-block rounded-full border-2 border-mimosa-400 px-10 py-3.5 text-base font-medium text-mimosa-400 hover:bg-mimosa-400 hover:text-gray-900 transition-all duration-300"
            >
              Book your stay now
            </Link>

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
                { name: 'Dining', href: '/dining' },
                { name: 'Accommodation', href: '/accommodation' },
                { name: 'Experiences', href: '/experiences' },
                { name: 'Events', href: '/events' },
                { name: 'Offers', href: '/offers' },
                { name: 'Gallery', href: '/gallery' },
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
            {/* Contact Info */}
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
                  href="mailto:info@mimosa.com"
                  className="block text-base text-gray-300 hover:text-mimosa-400 transition-colors"
                >
                  info@mimosa.com
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
              <div className="flex items-center gap-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-mimosa-400 transition-colors text-base font-light"
                >
                  Instagram
                </a>

                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-mimosa-400 transition-colors text-base font-light"
                >
                  TikTok
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-mimosa-400 transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}