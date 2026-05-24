'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/programs', label: 'Programs' },
  { href: '/impact', label: 'Impact' },
  { href: '/get-involved', label: 'Get involved' },
  { href: '/kit-shop', label: 'Kit shop' },
  { href: '/blog', label: 'Blog' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white/92 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-9 h-9 bg-brand rounded-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="16" height="16" rx="2"/>
              <rect x="9" y="9" width="6" height="6"/>
              <path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2"/>
            </svg>
          </div>
          <span className="font-bold text-gray-900 text-sm tracking-tight">Wonder to Build</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors no-underline ${
                pathname === href || pathname.startsWith(href + '/')
                  ? 'text-brand font-bold'
                  : 'text-gray-500 hover:text-brand'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link href="/donate" className="bg-brand text-white px-5 py-2 rounded-full text-xs font-bold tracking-wide hover:bg-teal-600 transition-colors no-underline">
            Donate
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12"/> : <><path d="M4 8h16"/><path d="M4 16h16"/></>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="block text-sm font-medium text-gray-600 hover:text-brand no-underline py-1">
              {label}
            </Link>
          ))}
          <Link href="/donate" onClick={() => setOpen(false)}
            className="block bg-brand text-white text-center px-5 py-2.5 rounded-full text-sm font-bold mt-3 no-underline">
            Donate
          </Link>
        </div>
      )}
    </nav>
  );
}
