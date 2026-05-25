import Link from 'next/link';

const footerLinks = {
  Programs: [
    { href: '/programs#spark', label: 'Spark Workshop' },
    { href: '/programs#makercore', label: 'MakerCore Course' },
    { href: '/programs#fellowship', label: 'Innovation Fellowship' },
    { href: '/programs#kit', label: 'Maker Kit' },
    { href: '/programs#educator', label: 'Educator Certification' },
    { href: '/programs#bootcamp', label: 'Summer Bootcamp' },
  ],
  Organization: [
    { href: '/our-story', label: 'Our Story' },
    { href: '/impact', label: 'Impact' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ],
  'Get Involved': [
    { href: '/donate', label: 'Donate' },
    { href: '/get-involved#sponsor', label: 'Sponsor a Student' },
    { href: '/get-involved#partner', label: 'Partner With Us' },
    { href: '/get-involved#mentor', label: 'Become a Mentor' },
    { href: '/kit-shop', label: 'Kit Shop' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>
                  <path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2"/>
                </svg>
              </div>
              <span className="font-bold text-sm text-gray-900">Wonder to Build</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Equipping students with the tools, mindset, and creative confidence to build genuine innovations.
            </p>
            {/* Social links */}
            <div className="flex gap-4 mt-5">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-brand transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.5 15.6V8.4L16 12l-6.5 3.6z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-brand transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.3A1.8 1.8 0 1 1 8.3 6.5 1.8 1.8 0 0 1 6.5 8.3zM20 19h-3v-4.4c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V19h-3v-9h2.9v1.2h0a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.7z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-brand transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-xs font-bold tracking-wider uppercase text-gray-900 mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {items.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-gray-500 hover:text-brand transition-colors no-underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-400">
            © 2026 Wonder to Build. A registered 501(c)(3) nonprofit. All donations are tax-deductible.
          </p>
          <div className="flex gap-5">
            <Link href="/contact" className="text-xs text-gray-400 hover:text-brand transition-colors no-underline">Contact</Link>
            <span className="text-xs text-gray-300">·</span>
            <Link href="/our-story" className="text-xs text-gray-400 hover:text-brand transition-colors no-underline">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
