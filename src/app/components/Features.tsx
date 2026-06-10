import {
  IconArrowDown,
  IconBuildingCommunity,
  IconPlaneDeparture,
  IconToolsKitchen2,
  IconBell,
  IconCircleCheck,
} from '@tabler/icons-react';

export default function Features() {
  return (
    <section id="features" className="bg-[#FAFAF8] py-20">
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-20">
        {/* Header */}
        <div className="text-center mb-14">
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: '#888888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
            FEATURES
          </div>
          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(28px, 3vw, 36px)', color: '#1A1A1A', letterSpacing: '-1px' }}>
            Built for real groups, not just couples
          </h2>
        </div>

        {/* Feature Row 1 — text left, visual right */}
        <div className="flex flex-col md:flex-row items-center gap-12 py-12" style={{ borderBottom: '0.5px solid #E5E3DC' }}>
          <div className="flex-1 min-w-0">
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, color: '#2E7D5E', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '14px' }}>
              SMART SPLITTING
            </div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '22px', fontWeight: 600, color: '#1A1A1A', letterSpacing: '-0.5px', marginBottom: '12px' }}>
              Debt simplified automatically
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#555555', lineHeight: '1.75', maxWidth: '420px' }}>
              In a group of six, you don't need six people sending money to six others. Splites analyses all balances and finds the minimum number of payments to settle everyone. One trip, one transfer each.
            </p>
          </div>

          <div className="w-full md:flex-1 md:max-w-sm bg-[#F3F2EE] p-6" style={{ borderRadius: '12px', border: '0.5px solid #E5E3DC' }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 500, color: '#888888', marginBottom: '10px' }}>
              Before · 6 payments
            </div>
            <div className="space-y-2 mb-3.5">
              {[
                { from: 'Sara → Adnan', amount: '£40' },
                { from: 'Malik → Sara', amount: '£22' },
                { from: 'Jamil → Adnan', amount: '£58' },
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center py-1.5" style={{ borderBottom: '0.5px solid #E5E3DC' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#555555' }}>{row.from}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#C0392B' }}>{row.amount}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center my-3.5">
              <div className="w-7 h-7 rounded-full bg-[#E8F5EF] flex items-center justify-center">
                <IconArrowDown size={16} color="#2E7D5E" />
              </div>
            </div>

            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: '#1A5C42', marginBottom: '10px' }}>
              After · 2 payments
            </div>
            <div className="space-y-1.5">
              {[
                { from: 'Malik → Adnan', amount: '£62' },
                { from: 'Jamil → Adnan', amount: '£58' },
              ].map((row, i) => (
                <div key={i} className="bg-[#E8F5EF] px-2.5 py-1.5 flex justify-between items-center" style={{ borderRadius: '6px' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500, color: '#1A5C42' }}>{row.from}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, color: '#1A5C42' }}>{row.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Row 2 — visual left, text right */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 py-12" style={{ borderBottom: '0.5px solid #E5E3DC' }}>
          <div className="flex-1 min-w-0">
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, color: '#2E7D5E', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '14px' }}>
              GROUPS & TRIPS
            </div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '22px', fontWeight: 600, color: '#1A1A1A', letterSpacing: '-0.5px', marginBottom: '12px' }}>
              One group for every occasion
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#555555', lineHeight: '1.75', maxWidth: '420px' }}>
              Rent with flatmates. Road trip with university friends. Wedding weekend with family. Each group keeps its own history, its own members, its own running tab — completely separate.
            </p>
          </div>

          <div className="w-full md:flex-1 md:max-w-sm bg-[#F3F2EE] p-5" style={{ borderRadius: '12px', border: '0.5px solid #E5E3DC' }}>
            {[
              { icon: IconBuildingCommunity, iconColor: '#1565C0', iconBg: '#E8F0FE', name: 'Flat — October', sub: '4 members · £1,200 rent', status: 'Settled', statusBg: '#E8F5EF', statusColor: '#1A5C42' },
              { icon: IconPlaneDeparture, iconColor: '#92600A', iconBg: '#FDF3E3', name: 'Bali trip', sub: '6 members · £3,840 total', status: '2 left', statusBg: '#FDF3E3', statusColor: '#92600A' },
              { icon: IconToolsKitchen2, iconColor: '#C0392B', iconBg: '#FEF0EF', name: 'Friday dinners', sub: '3 members · ongoing', status: 'You owe', statusBg: '#FEF0EF', statusColor: '#C0392B' },
            ].map((group, i) => {
              const Icon = group.icon;
              return (
                <div key={i} className="bg-white p-3 mb-2 last:mb-0 flex items-center gap-3" style={{ borderRadius: '8px', border: '0.5px solid #E5E3DC' }}>
                  <div className="w-9 h-9 flex items-center justify-center flex-shrink-0" style={{ borderRadius: '8px', backgroundColor: group.iconBg }}>
                    <Icon size={18} color={group.iconColor} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#1A1A1A' }}>{group.name}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#888888' }}>{group.sub}</div>
                  </div>
                  <div className="px-2 py-1 flex-shrink-0" style={{ borderRadius: '20px', backgroundColor: group.statusBg }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, color: group.statusColor }}>{group.status}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Feature Row 3 — text left, visual right */}
        <div className="flex flex-col md:flex-row items-center gap-12 py-12">
          <div className="flex-1 min-w-0">
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, color: '#2E7D5E', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '14px' }}>
              SETTLE UP
            </div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '22px', fontWeight: 600, color: '#1A1A1A', letterSpacing: '-0.5px', marginBottom: '12px' }}>
              Remind without the guilt
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#555555', lineHeight: '1.75', maxWidth: '420px' }}>
              A single tap sends a polite nudge through the app. No need to write the message yourself, no need to guess if they saw it. They get a notification. You stay friends.
            </p>
          </div>

          <div className="w-full md:flex-1 md:max-w-sm bg-[#F3F2EE] p-5" style={{ borderRadius: '12px', border: '0.5px solid #E5E3DC' }}>
            <div className="bg-white p-3.5 mb-2.5" style={{ borderRadius: '8px', border: '0.5px solid #E5E3DC' }}>
              <div className="flex items-center gap-1.5 mb-2">
                <IconBell size={14} color="#888888" />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#888888' }}>Notification preview</span>
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#1A1A1A', marginBottom: '4px' }}>
                Sara reminded you
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#555555', lineHeight: '1.55' }}>
                "Hey — just a nudge about the Bali trip. £28.67 when you get a chance 😊"
              </p>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-[#2E7D5E] text-white flex items-center justify-center gap-1.5" style={{ borderRadius: '8px', padding: '11px', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600 }}>
                <IconCircleCheck size={14} />
                Mark as settled
              </button>
              <button className="bg-[#F3F2EE]" style={{ borderRadius: '8px', padding: '11px 16px', border: '0.5px solid #E5E3DC', fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#555555' }}>
                Snooze
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
