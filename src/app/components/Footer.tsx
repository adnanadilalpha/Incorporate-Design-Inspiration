import { IconBrandX, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';

export default function Footer() {
  const footerLinks = {
    product: ['How it works', 'Features', 'Pricing', 'Download', 'Changelog'],
    company: ['About', 'Blog', 'Careers', 'Press kit', 'Contact us'],
    legal: ['Privacy policy', 'Terms of service', 'Cookie policy', 'Security'],
  };

  return (
    <footer className="bg-[#111111] py-14 px-6 sm:px-10 md:px-14 lg:px-20" style={{ borderTop: '0.5px solid rgba(255,255,255,0.07)' }}>
      <div className="w-full">
        {/* Top grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="mb-2.5">
              <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: '20px', color: '#FFFFFF' }}>
                split<span style={{ color: '#2E7D5E' }}>es</span>
              </span>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.38)', lineHeight: '1.65', maxWidth: '220px' }}>
              The simplest way to split bills and keep friendships intact. Free on iOS and Android.
            </p>
          </div>

          {/* Product */}
          <div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>
              PRODUCT
            </div>
            <div className="flex flex-col gap-2.5">
              {footerLinks.product.map((link, i) => (
                <a key={i} href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.45)' }} className="hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>
              COMPANY
            </div>
            <div className="flex flex-col gap-2.5">
              {footerLinks.company.map((link, i) => (
                <a key={i} href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.45)' }} className="hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>
              LEGAL
            </div>
            <div className="flex flex-col gap-2.5">
              {footerLinks.legal.map((link, i) => (
                <a key={i} href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.45)' }} className="hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: '0.5px solid rgba(255,255,255,0.07)' }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.22)' }}>
            © 2025 Splites. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            {[
              { icon: IconBrandX, label: 'Twitter' },
              { icon: IconBrandInstagram, label: 'Instagram' },
              { icon: IconBrandLinkedin, label: 'LinkedIn' },
            ].map(({ icon: Icon, label }, i) => (
              <a key={i} href="#" className="flex items-center gap-1.5 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>
                <Icon size={14} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
