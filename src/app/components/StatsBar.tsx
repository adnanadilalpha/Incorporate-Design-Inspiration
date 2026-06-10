import { IconStarFilled } from '@tabler/icons-react';

export default function StatsBar() {
  const stats = [
    { number: '£ 18M', label: 'settled between friends' },
    { number: '2.4M', label: 'expenses tracked' },
    { number: '4.9', label: 'average App Store rating', hasStar: true },
  ];

  return (
    <section className="bg-[#F3F2EE]" style={{ borderTop: '0.5px solid #E5E3DC', borderBottom: '0.5px solid #E5E3DC' }}>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="py-7 px-8 sm:px-10 md:px-14 border-b sm:border-b-0 sm:border-r border-[#E5E3DC] last:border-0"
            style={{ borderWidth: '0.5px' }}
          >
            <div className="flex items-baseline gap-1.5">
              <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: '32px', color: '#1A1A1A', letterSpacing: '-1px' }}>
                {stat.number}
              </div>
              {stat.hasStar && <IconStarFilled size={22} color="#F59E0B" />}
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#888888', marginTop: '4px' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
