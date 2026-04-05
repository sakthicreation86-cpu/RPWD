const tags = [
  'சமத்துவம்', 'ஊனமுற்ற பெண்கள் பாதுகாப்பு', 'சமுதாய வாழ்க்கை',
  'கொடுமையில் இருந்து பாதுகாப்பு', 'வீடு மற்றும் குடும்பம்',
  'இனபெருக்க உரிமை', 'வாக்களிப்பு அணுகல்', 'நீதி அணுகல்',
  'சட்டரீதியான தகுதி', 'காப்பு நிலை ஏற்பாடு',
];

export default function RightsBanner() {
  return (
    <div
      id="rights"
      className="relative rounded-2xl overflow-hidden text-center px-6 sm:px-10 py-12 mb-16"
      style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #243B55 100%)' }}
    >
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none" style={{ background: 'rgba(201,168,76,0.07)' }} />
      <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full pointer-events-none" style={{ background: 'rgba(27,108,168,0.09)' }} />

      <h2 className="relative z-10 font-bold text-white mb-2 leading-snug"
        style={{ fontFamily: "'Noto Serif Tamil', serif", fontSize: 'clamp(18px, 3.5vw, 30px)' }}>
        அத்தியாயம் 2 — உரிமைகள் மற்றும் உரிமைத்தகுதிகள்
      </h2>
      <p className="relative z-10 mb-8 text-sm" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: "'Inter', sans-serif" }}>
        Chapter II: Rights and Entitlements
      </p>

      <div className="relative z-10 flex flex-wrap gap-2.5 justify-center">
        {tags.map(t => (
          <span key={t}
            style={{
              fontFamily: "'Noto Sans Tamil', 'Inter', sans-serif",
              fontSize: '13px', padding: '7px 16px', borderRadius: '20px',
              background: 'rgba(201,168,76,0.13)',
              border: '1px solid rgba(201,168,76,0.32)',
              color: '#E8C97A',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
