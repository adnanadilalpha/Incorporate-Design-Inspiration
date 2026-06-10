import { IconBrandApple, IconBrandGooglePlay } from '@tabler/icons-react';

export default function FinalCTA() {
  return (
    <section id="download" className="bg-[#1A1A1A] py-24 px-6 sm:px-10 text-center">
      <div className="w-full max-w-xl mx-auto">
        <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(32px, 4vw, 42px)', color: '#FFFFFF', letterSpacing: '-1px', lineHeight: '1.2', marginBottom: '16px' }}>
          Your next trip deserves a better ending.
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.75', marginBottom: '40px' }}>
          Join 14,000+ groups who stopped arguing about money and started enjoying the things they split it for.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6">
          <button className="bg-white text-[#1A1A1A] flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors w-full sm:w-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, padding: '14px 28px', borderRadius: '8px' }}>
            <IconBrandApple size={16} />
            Download for iOS
          </button>
          <button className="bg-white text-[#1A1A1A] flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors w-full sm:w-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, padding: '14px 28px', borderRadius: '8px' }}>
            <IconBrandGooglePlay size={16} />
            Download for Android
          </button>
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>
          Free to download · No account required to browse · Works offline
        </p>
      </div>
    </section>
  );
}
