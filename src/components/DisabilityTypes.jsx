const ENG = "'Inter', sans-serif";
const TSS = "'Noto Sans Tamil', 'Inter', sans-serif";
const TS  = "'Noto Serif Tamil', serif";

const disabilities = [
  { emoji: '👁️',  label: 'குருட்டுத்தன்மை' },
  { emoji: '👓',  label: 'குறைந்த பார்வை' },
  { emoji: '🧩',  label: 'குஷ்ட நோய் குணமடைந்தோர்' },
  { emoji: '👂',  label: 'செவியிழப்பு' },
  { emoji: '🦻',  label: 'பேச்சு & மொழி குறைபாடு' },
  { emoji: '🚶',  label: 'இயக்கக் குறைபாடு' },
  { emoji: '🧠',  label: 'அறிவுத் திறன் வளர்ச்சி குறைபாடு' },
  { emoji: '🧬',  label: 'மனநோய்' },
  { emoji: '🏃',  label: 'பல ஊனங்கள்' },
  { emoji: '🌀',  label: 'ஆட்டிசம் நோய்த்தொகை' },
  { emoji: '🧸',  label: 'ஊனமுற்ற குழந்தை மூளை வளர்ச்சி' },
  { emoji: '💪',  label: 'நாள்பட்ட நரம்பியக்க நோய்' },
  { emoji: '🩸',  label: 'குறிப்பிட்ட கற்றல் குறைபாடு' },
  { emoji: '🔁',  label: 'மன கோளாறு' },
  { emoji: '🦌',  label: 'பார்க்கின்சன் நோய்' },
  { emoji: '💊',  label: 'தாலசீமியா' },
  { emoji: '🩺',  label: 'இரத்தம் உறையும் நோய்' },
  { emoji: '❤️', label: 'அரிவாள் செல் நோய்' },
  { emoji: '👃',  label: 'அமிலத்தாக்கம் பாதிப்பு' },
  { emoji: '🤝',  label: 'ஸ்கிளரோசிஸ் நோய்' },
  { emoji: '♿',  label: 'தசை வடிவியல் நோய்' },
];

export default function DisabilityTypes() {
  return (
    <section id="disabilities" style={{ paddingBottom: '120px' }}>
      <div className="text-center mb-16">
        <p style={{ fontFamily: ENG, fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', color: '#8B6914', marginBottom: '12px' }}>
          Additional Details
        </p>
        <h2 style={{ fontFamily: TS, fontSize: 'clamp(30px, 5vw, 44px)', fontWeight: 700, color: '#0D1B2A', lineHeight: 1.35 }}>
          21 ஊன வகைகள்
        </h2>
        <p style={{ fontFamily: TSS, fontSize: '16px', color: '#6B7280', marginTop: '12px' }}>
          இந்திய நாடாளுமன்றச் சட்டம் 2016-ல் அங்கீகரிக்கப்பட்டவை
        </p>
        <div style={{ width: '64px', height: '4px', background: '#C9A84C', margin: '20px auto 0', borderRadius: '2px' }} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
        {disabilities.map((d, i) => {
          // Slight rotating tint colors for aesthetic variety
          const colors = [
            { bg: '#FFF8F1', border: '#FFEDD5', text: '#9A3412', shadow: 'rgba(234,88,12,0.1)' },
            { bg: '#F0FDF4', border: '#DCFCE7', text: '#166534', shadow: 'rgba(34,197,94,0.1)' },
            { bg: '#EFF6FF', border: '#DBEAFE', text: '#1E40AF', shadow: 'rgba(59,130,246,0.1)' },
            { bg: '#FAF5FF', border: '#F3E8FF', text: '#6B21A8', shadow: 'rgba(168,85,247,0.1)' },
            { bg: '#FFF1F2', border: '#FFE4E6', text: '#9F1239', shadow: 'rgba(225,29,72,0.1)' },
          ];
          const t = colors[i % colors.length];

          return (
            <div
              key={d.label}
              className="text-center rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ 
                background: '#fff',
                border: `1px solid #E5E7EB`, 
                boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                padding: '24px 12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'default'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = t.border;
                e.currentTarget.style.backgroundColor = t.bg;
                e.currentTarget.style.boxShadow = `0 12px 24px ${t.shadow}`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.02)';
              }}
            >
              <div style={{
                width: '48px', height: '48px', 
                background: '#F8FAFC', borderRadius: '14px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '24px', marginBottom: '16px',
                border: '1px solid #F1F5F9'
              }}>
                {d.emoji}
              </div>
              <p style={{ fontFamily: TSS, fontSize: '13.5px', fontWeight: 600, color: '#334155', lineHeight: 1.4 }}>
                {d.label}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  );
}
