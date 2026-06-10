import { IconMessages, IconAlertTriangle, IconTableOff } from '@tabler/icons-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: IconMessages,
      iconColor: '#2E7D5E',
      bgColor: '#E8F5EF',
      title: 'The group chat math',
      body: 'Scrolling back through 300 messages trying to figure out who paid for the airport taxi. Nobody remembers. Everyone guesses.',
    },
    {
      icon: IconAlertTriangle,
      iconColor: '#92600A',
      bgColor: '#FDF3E3',
      title: 'The awkward reminder',
      body: "Asking a friend for £40 they owe you should be simple. Instead you've drafted the message six times and still haven't sent it.",
    },
    {
      icon: IconTableOff,
      iconColor: '#C0392B',
      bgColor: '#FEF0EF',
      title: 'The spreadsheet nobody uses',
      body: "Someone makes a sheet on day one. It gets updated twice. By the end of the trip it's three months out of date and still wrong.",
    },
  ];

  return (
    <section className="bg-[#FAFAF8] py-20">
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-20 text-center">
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: '#888888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
          SOUND FAMILIAR?
        </div>

        <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(28px, 3vw, 36px)', color: '#1A1A1A', letterSpacing: '-1px', marginBottom: '16px' }}>
          Splitting bills is surprisingly hard
        </h2>

        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#555555', lineHeight: '1.75', maxWidth: '520px', margin: '0 auto 48px' }}>
          You paid for the Airbnb. Someone else covered flights. A third person said 'I'll get you back' four months ago. It adds up — in money and in tension.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <div key={i} className="bg-white p-6" style={{ borderRadius: '12px', border: '0.5px solid #E5E3DC' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 flex-shrink-0" style={{ backgroundColor: problem.bgColor }}>
                  <Icon size={20} color={problem.iconColor} />
                </div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 600, color: '#1A1A1A', marginBottom: '8px' }}>
                  {problem.title}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#555555', lineHeight: '1.65' }}>
                  {problem.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
