import { useState } from 'react';
import { IconMenu2, IconX } from '@tabler/icons-react';

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Download', href: '#download' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#FAFAF8]" style={{ borderBottom: '0.5px solid #E5E3DC' }}>
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-20 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: '22px', color: '#1A1A1A' }}>
          split<span style={{ color: '#2E7D5E' }}>es</span>
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500, color: '#555555' }}
              className="hover:text-[#1A1A1A] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          className="hidden md:block bg-[#1A1A1A] text-white hover:bg-[#333333] transition-colors"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500, padding: '10px 22px', borderRadius: '8px' }}
        >
          Get the app
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open
            ? <IconX size={22} color="#1A1A1A" />
            : <IconMenu2 size={22} color="#1A1A1A" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#FAFAF8]" style={{ borderTop: '0.5px solid #E5E3DC' }}>
          <div className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 500, color: '#333333' }}
              >
                {l.label}
              </a>
            ))}
            <button
              className="bg-[#1A1A1A] text-white mt-2 w-full"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, padding: '12px', borderRadius: '8px' }}
            >
              Get the app
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
