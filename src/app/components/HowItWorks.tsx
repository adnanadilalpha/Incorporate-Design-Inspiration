import { IconSparkles, IconSquareRoundedCheck } from '@tabler/icons-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#F3F2EE] py-20" style={{ borderTop: '0.5px solid #E5E3DC', borderBottom: '0.5px solid #E5E3DC' }}>
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: '#888888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
            HOW IT WORKS
          </div>
          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(28px, 3vw, 36px)', color: '#1A1A1A', letterSpacing: '-1px' }}>
            Three steps. Zero awkwardness.
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-white p-6" style={{ borderRadius: '12px', border: '0.5px solid #E5E3DC' }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 700, color: '#2E7D5E', letterSpacing: '0.07em', marginBottom: '16px' }}>
              STEP 01
            </div>
            <div className="bg-[#F3F2EE] p-3.5 mb-4" style={{ borderRadius: '8px', border: '0.5px solid #E5E3DC' }}>
              {[
                { label: "Expense name", value: "Dinner at Momo's" },
                { label: 'Total amount', value: '£ 86.00' },
                { label: 'Paid by', value: 'You' },
              ].map((row, i) => (
                <div key={i} className="bg-white px-2.5 py-2 mb-1.5 last:mb-0 flex justify-between items-center" style={{ borderRadius: '6px', border: '0.5px solid #E5E3DC' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#888888' }}>{row.label}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 500, color: '#1A1A1A' }}>{row.value}</span>
                </div>
              ))}
            </div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 600, color: '#1A1A1A', marginBottom: '6px' }}>
              Add the expense
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#555555', lineHeight: '1.65' }}>
              Log what you spent in seconds. Name it, enter the amount, pick who paid. Done.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6" style={{ borderRadius: '12px', border: '0.5px solid #E5E3DC' }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 700, color: '#2E7D5E', letterSpacing: '0.07em', marginBottom: '16px' }}>
              STEP 02
            </div>
            <div className="bg-[#F3F2EE] p-3.5 mb-4" style={{ borderRadius: '8px', border: '0.5px solid #E5E3DC' }}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#888888', marginBottom: '8px' }}>
                Split equally between
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {['You · £28.67', 'Sara · £28.67', 'Malik · £28.66'].map((chip, i) => (
                  <div key={i} className="bg-[#E8F5EF] px-2.5 py-1" style={{ borderRadius: '6px' }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, color: '#1A5C42' }}>{chip}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <IconSparkles size={12} color="#2E7D5E" />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 500, color: '#2E7D5E' }}>
                  Debt simplified automatically
                </span>
              </div>
            </div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 600, color: '#1A1A1A', marginBottom: '6px' }}>
              Splites divides it
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#555555', lineHeight: '1.65' }}>
              Equal split or custom amounts — Splites calculates every balance and finds the minimum payments to settle everyone.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 sm:col-span-2 lg:col-span-1" style={{ borderRadius: '12px', border: '0.5px solid #E5E3DC' }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 700, color: '#2E7D5E', letterSpacing: '0.07em', marginBottom: '16px' }}>
              STEP 03
            </div>
            <div className="bg-[#F3F2EE] p-3.5 mb-4" style={{ borderRadius: '8px', border: '0.5px solid #E5E3DC' }}>
              {[
                { name: 'Sara owes you', amount: '£ 28.67' },
                { name: 'Malik owes you', amount: '£ 140.00' },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between py-1.5 border-b border-[#F3F2EE]" style={{ borderBottomWidth: '0.5px' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#555555' }}>{row.name}</span>
                  <div className="flex items-center gap-2">
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: '#1A1A1A' }}>{row.amount}</span>
                    <button className="bg-[#2E7D5E] text-white px-2.5 py-1" style={{ borderRadius: '4px', fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600 }}>
                      Remind
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-1.5 mt-2">
                <IconSquareRoundedCheck size={12} color="#2E7D5E" />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#888888' }}>1 tap to mark as settled</span>
              </div>
            </div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 600, color: '#1A1A1A', marginBottom: '6px' }}>
              Everyone settles up
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#555555', lineHeight: '1.65' }}>
              Send a nudge, mark it settled, and move on. No more chasing. No more guessing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
