const TS  = "'Noto Serif Tamil', serif";
const TSS = "'Noto Sans Tamil', 'Inter', sans-serif";
const ENG = "'Inter', sans-serif";

const cards = [
  {
    num: '01',
    icon: '⚖️',
    title: 'சமத்துவம்',
    subtitle: 'Equality & Non-discrimination',
    desc: 'ஊனமுற்ற நபர்கள் பிறருக்கு சமமான உரிமைகள், கண்ணியம் மற்றும் நேர்மையான மரியாதை பெறுவதை உறுதி செய்கிறது.',
    theme: { bg: '#FEF9EC', border: '#FDE68A', text: '#92400E', shadow: 'rgba(245,158,11,0.1)' }
  },
  {
    num: '02',
    icon: '🏫',
    title: 'உள்ளடக்கிய கல்வி',
    subtitle: 'Inclusive Education',
    desc: '18 வயது வரை இலவச கல்வி, புத்தகங்கள், உதவி கருவிகள் மற்றும் தனிப்பட்ட ஆதரவு உறுதி செய்யப்படுகிறது.',
    theme: { bg: '#EFF6FF', border: '#BFDBFE', text: '#1E40AF', shadow: 'rgba(59,130,246,0.1)' }
  },
  {
    num: '03',
    icon: '💼',
    title: 'வேலைவாய்ப்பு',
    subtitle: 'Employment Rights',
    desc: 'அரசு பணிகளில் 4% இட ஒதுக்கீடு, பாகுபாட்டை தடுத்தல், நியாயமான தகவமைப்பு வழங்குதல்.',
    theme: { bg: '#FFF7ED', border: '#FED7AA', text: '#9A3412', shadow: 'rgba(249,115,22,0.1)' }
  },
  {
    num: '04',
    icon: '🏠',
    title: 'சமூக வாழ்க்கை',
    subtitle: 'Community Living',
    desc: 'சமுதாயத்தில் வாழும் உரிமை. குறிப்பிட்ட இடத்தில் வாழக் கட்டாயப்படுத்தக் கூடாது என்ற பாதுகாப்பு.',
    theme: { bg: '#F0FDF4', border: '#BBF7D0', text: '#166534', shadow: 'rgba(34,197,94,0.1)' }
  },
  {
    num: '05',
    icon: '🛡️',
    title: 'பாதுகாப்பு',
    subtitle: 'Protection from Abuse',
    desc: 'சித்திரவதை, வன்முறை, சுரண்டல் ஆகியவற்றிலிருந்து பாதுகாப்பு மற்றும் சட்ட உதவி உரிமை.',
    theme: { bg: '#FAF5FF', border: '#E9D5FF', text: '#6B21A8', shadow: 'rgba(168,85,247,0.1)' }
  },
  {
    num: '06',
    icon: '🏛️',
    title: 'நீதி அணுகல்',
    subtitle: 'Access to Justice',
    desc: 'நீதிமன்றங்கள், தீர்ப்பாயங்கள் மற்றும் அதிகார அமைப்புகளை அணுகும் உரிமை; இலவச சட்ட உதவி.',
    theme: { bg: '#F0FDFA', border: '#99F6E4', text: '#115E59', shadow: 'rgba(20,184,166,0.1)' }
  },
];

export default function OverviewCards() {
  return (
    <section id="overview-cards" style={{ paddingBottom: '80px' }}>

      {/* Section header */}
      <div className="text-center mb-14">
        <p style={{ fontFamily: ENG, fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#8B6914', marginBottom: '10px' }}>
          சட்டத்தின் சாராம்சம்
        </p>
        <h2 style={{ fontFamily: TS, fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 700, color: '#0D1B2A', lineHeight: 1.3 }}>
          சட்டம் உறுதி செய்வது என்ன?
        </h2>
        <div style={{ width: '56px', height: '3px', background: '#C9A84C', margin: '14px auto 0', borderRadius: '2px' }} />
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        {cards.map((card) => (
          <div
            key={card.num}
            style={{
              background: card.theme.bg,
              border: `1px solid ${card.theme.border}`,
              borderRadius: '20px',
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: `0 4px 20px ${card.theme.shadow}`,
              cursor: 'default',
            }}
            className="hover:-translate-y-2"
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = `0 12px 30px ${card.theme.shadow}`;
              e.currentTarget.style.borderColor = card.theme.text;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = `0 4px 20px ${card.theme.shadow}`;
              e.currentTarget.style.borderColor = card.theme.border;
            }}
          >
            {/* Number watermark in background */}
            <div
              style={{
                position: 'absolute',
                top: '10px',
                right: '20px',
                fontFamily: ENG,
                fontSize: '60px',
                fontWeight: 900,
                color: card.theme.text,
                opacity: 0.05,
                pointerEvents: 'none',
              }}
            >
              {card.num}
            </div>

            {/* Icon circle */}
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                marginBottom: '20px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                border: `1px solid ${card.theme.border}`
              }}
            >
              {card.icon}
            </div>

            {/* Content */}
            <h3 style={{ fontFamily: TS, fontSize: '20px', fontWeight: 700, color: card.theme.text, lineHeight: 1.3, marginBottom: '4px' }}>
              {card.title}
            </h3>
            <p style={{ fontFamily: ENG, fontSize: '11px', fontWeight: 600, color: card.theme.text, opacity: 0.7, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
              {card.subtitle}
            </p>
            <p style={{ fontFamily: TSS, fontSize: '14.5px', lineHeight: 1.8, color: '#4B5563', margin: 0 }}>
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
