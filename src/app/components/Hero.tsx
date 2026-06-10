export default function Hero() {
  return (
    <section className="bg-[#FAFAF8] flex flex-col" style={{ minHeight: '92vh' }}>
      {/* Main two-column body */}
      <div className="flex flex-col md:flex-row flex-1">

        {/* ── Left column ── */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-20 py-16 md:py-24">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 bg-[#E8F5EF] self-start mb-8"
            style={{ borderRadius: '20px', padding: '6px 14px' }}
          >
            <div className="w-[6px] h-[6px] rounded-full bg-[#2E7D5E]" />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: '#1A5C42' }}>
              Free on iOS & Android
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: 'clamp(36px, 4vw, 60px)',
              letterSpacing: '-1.5px',
              lineHeight: '1.05',
              color: '#1A1A1A',
              marginBottom: '24px',
            }}
          >
            Split bills.
            <br />
            Not{' '}
            <span
              style={{
                fontStyle: 'italic',
                color: '#2E7D5E',
                display: 'inline-block',
                background: '#E8F5EF',
                padding: '0 10px 2px 8px',
                borderRadius: '6px',
              }}
            >
              friendships
            </span>
            .
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              color: '#555555',
              lineHeight: '1.75',
              maxWidth: '440px',
              marginBottom: '40px',
            }}
          >
            Add an expense, choose who's in, and Splites handles the rest. No spreadsheets, no awkward reminders — just everyone settled up.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                padding: '14px 32px',
                borderRadius: '8px',
                background: '#1A1A1A',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              Download free
            </button>
            <button
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                color: '#555555',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                whiteSpace: 'nowrap',
              }}
            >
              See how it works →
            </button>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-3">
            <div className="flex">
              {[
                { bg: '#2E7D5E', initials: 'AK' },
                { bg: '#1565C0', initials: 'SR' },
                { bg: '#6A1B9A', initials: 'MN' },
                { bg: '#BF360C', initials: 'JL' },
              ].map((avatar, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full flex items-center justify-center border-2 border-white"
                  style={{
                    backgroundColor: avatar.bg,
                    marginLeft: i > 0 ? '-8px' : '0',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: 'white',
                  }}
                >
                  {avatar.initials}
                </div>
              ))}
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#888888' }}>
              Trusted by <span style={{ fontWeight: 600, color: '#1A1A1A' }}>14,000+</span> friend groups
            </p>
          </div>
        </div>

        {/* ── Right column — geometric composition ── */}
        <div
          className="hidden md:flex flex-1 items-center justify-center relative overflow-hidden py-12"
          style={{ background: '#F3F2EE', borderLeft: '0.5px solid #E5E3DC' }}
        >
          {/* Dot grid background */}
          <svg
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.35 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1.5" fill="#BBBBAA" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>

          {/* Block composition — scales with the column */}
          <div
            className="relative"
            style={{
              width: 'min(420px, 80%)',
              aspectRatio: '1 / 1',
            }}
          >
            {/* top-left large sage */}
            <Block top="0%" left="9.5%" w="28.5%" h="28.5%" bg="#2E7D5E" />
            {/* top-left sage extension below */}
            <Block top="30.5%" left="9.5%" w="28.5%" h="13.3%" bg="#2E7D5E" />
            {/* small bordered square — top center */}
            <Block top="0%" left="40%" w="13.3%" h="13.3%" bg="#E8F5EF" border="0.5px solid #2E7D5E" />
            {/* wide off-white — top right */}
            <Block top="0%" left="55.2%" w="28.5%" h="13.3%" bg="#FAFAF8" border="0.5px solid #E5E3DC" />
            {/* tall off-white — center */}
            <Block top="15.2%" left="40%" w="13.3%" h="28.5%" bg="#FAFAF8" border="0.5px solid #E5E3DC" />
            {/* large off-white — center-right */}
            <Block top="15.2%" left="55.2%" w="28.5%" h="28.5%" bg="#FAFAF8" border="0.5px solid #E5E3DC" />
            {/* small sage — center row */}
            <Block top="45.7%" left="40%" w="13.3%" h="13.3%" bg="#2E7D5E" />
            {/* light green — right of sage */}
            <Block top="45.7%" left="55.2%" w="13.3%" h="13.3%" bg="#E8F5EF" border="0.5px solid #2E7D5E" />
            {/* card block — bottom left */}
            <div
              style={{
                position: 'absolute',
                top: '61%',
                left: '9.5%',
                width: '43.8%',
                height: '28.5%',
                background: '#FAFAF8',
                border: '0.5px solid #E5E3DC',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                padding: '14px 16px',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
              }}
            >
              <div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#888888', marginBottom: '4px' }}>
                  Bali trip · 6 people
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', fontWeight: 600, color: '#1A1A1A', letterSpacing: '-0.5px' }}>
                  £ 3,840
                </div>
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 500, color: '#2E7D5E' }}>
                Settle up →
              </div>
            </div>
            {/* sage strip — bottom right top */}
            <Block top="61%" left="55.2%" w="28.5%" h="13.3%" bg="#2E7D5E" />
            {/* light green chip — bottom right bottom */}
            <div
              style={{
                position: 'absolute',
                top: '76.2%',
                left: '55.2%',
                width: '28.5%',
                height: '13.3%',
                background: '#E8F5EF',
                border: '0.5px solid #2E7D5E',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
              }}
            >
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#2E7D5E', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, color: '#2E7D5E', whiteSpace: 'nowrap' }}>
                +£ 620
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom stats strip ── */}
      <div style={{ borderTop: '0.5px solid #E5E3DC' }}>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {[
            {
              icon: '⊞',
              label: 'A WORLD OF SIMPLICITY',
              desc: 'Add expenses in seconds, split any way you like, settle with one tap.',
            },
            {
              icon: '◎',
              label: 'FAIRNESS YOU CAN TRUST',
              desc: 'Smart split logic — equal, by percentage, or custom amounts per person.',
            },
            {
              icon: '⚡',
              label: 'GET SETTLED FASTER',
              desc: 'Instant notifications and one-tap payments mean no more chasing.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 py-6 px-6 sm:px-10 md:px-12 border-b sm:border-b-0 sm:border-r border-[#E5E3DC] last:border-0"
              style={{ borderWidth: '0.5px' }}
            >
              <span style={{ fontSize: '18px', marginTop: '2px', color: '#2E7D5E', flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#1A1A1A',
                    marginBottom: '4px',
                  }}
                >
                  {item.label} →
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#888888', lineHeight: '1.5' }}>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Block({
  top, left, w, h, bg, border, radius = '10px',
}: {
  top: string; left: string; w: string; h: string; bg: string; border?: string; radius?: string;
}) {
  return (
    <div
      style={{
        position: 'absolute',
        top,
        left,
        width: w,
        height: h,
        background: bg,
        border: border ?? 'none',
        borderRadius: radius,
        boxSizing: 'border-box',
      }}
    />
  );
}
