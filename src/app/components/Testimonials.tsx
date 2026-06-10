import { IconStarFilled, IconBrandApple, IconBrandGooglePlay } from '@tabler/icons-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'We did a 10-day Japan trip with seven people. Splites tracked every meal, every train, every snack. By the end we each got one number and one transfer. Unbelievable.',
      avatar: { bg: '#2E7D5E', initials: 'RL' },
      name: 'Rania L.',
      role: 'Settled a £4,200 group trip',
    },
    {
      quote: "My flatmates and I split rent and bills every month. Before Splites it was a whole thing. Now it takes 30 seconds and nobody argues about who forgot the broadband.",
      avatar: { bg: '#1565C0', initials: 'TM' },
      name: 'Tom M.',
      role: 'Uses Splites with 3 flatmates',
    },
    {
      quote: "The debt simplification is genuinely clever. Instead of everyone paying everyone else, Splites figured out we only needed two transfers total. I don't know how but it works.",
      avatar: { bg: '#6A1B9A', initials: 'AH' },
      name: 'Aisha H.',
      role: 'Stag weekend organiser',
    },
  ];

  return (
    <section className="bg-[#F3F2EE] py-20" style={{ borderTop: '0.5px solid #E5E3DC' }}>
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: '#888888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
            REAL PEOPLE. REAL TRIPS.
          </div>
          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(28px, 3vw, 36px)', color: '#1A1A1A', letterSpacing: '-1px' }}>
            What they said after the holiday
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 flex flex-col" style={{ borderRadius: '12px', border: '0.5px solid #E5E3DC' }}>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <IconStarFilled key={j} size={14} color="#F59E0B" />
                ))}
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontStyle: 'italic', color: '#1A1A1A', lineHeight: '1.7', marginBottom: '18px', flex: 1 }}>
                {t.quote}
              </p>
              <div className="flex items-center gap-2.5">
                <div
                  className="w-[34px] h-[34px] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: t.avatar.bg, fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, color: 'white' }}
                >
                  {t.avatar.initials}
                </div>
                <div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#1A1A1A' }}>{t.name}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#888888' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Store badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="bg-white px-6 py-4 flex items-center gap-3 w-full sm:w-auto" style={{ borderRadius: '10px', border: '0.5px solid #E5E3DC' }}>
            <IconBrandApple size={24} color="#1A1A1A" />
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#888888' }}>Download on the</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 600, color: '#1A1A1A' }}>App Store</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 500, color: '#2E7D5E' }}>4.9 · 2,800 ratings</div>
            </div>
          </div>
          <div className="bg-white px-6 py-4 flex items-center gap-3 w-full sm:w-auto" style={{ borderRadius: '10px', border: '0.5px solid #E5E3DC' }}>
            <IconBrandGooglePlay size={24} color="#1A1A1A" />
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#888888' }}>Get it on</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 600, color: '#1A1A1A' }}>Google Play</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 500, color: '#2E7D5E' }}>4.8 · 1,600 ratings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
