import { IconLockSquareRounded, IconShieldCheck, IconGift } from '@tabler/icons-react';

export default function TrustSignals() {
  const signals = [
    {
      icon: IconLockSquareRounded,
      title: 'No bank details required',
      body: "Splites tracks who owes what. You settle however you like — bank transfer, cash, PayPal. We never touch your money.",
    },
    {
      icon: IconShieldCheck,
      title: 'Your data is private',
      body: "Expense data is encrypted end-to-end. We don't sell it, share it, or use it for ads. What happens in the group stays in the group.",
    },
    {
      icon: IconGift,
      title: 'Free, and genuinely free',
      body: 'No premium tier you need to unlock the useful bits. No per-transaction fee. Download Splites, use all of it, pay nothing.',
    },
  ];

  return (
    <section className="bg-[#FAFAF8] py-16" style={{ borderTop: '0.5px solid #E5E3DC', borderBottom: '0.5px solid #E5E3DC' }}>
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {signals.map((signal, i) => {
            const Icon = signal.icon;
            return (
              <div key={i} className="text-center">
                <div className="w-11 h-11 rounded-full bg-[#E8F5EF] flex items-center justify-center mx-auto mb-3.5">
                  <Icon size={20} color="#2E7D5E" />
                </div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 600, color: '#1A1A1A', marginBottom: '6px' }}>
                  {signal.title}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#555555', lineHeight: '1.65' }}>
                  {signal.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
