const TS  = "'Noto Serif Tamil', serif";
const TSS = "'Noto Sans Tamil', 'Inter', sans-serif";
const ENG = "'Inter', sans-serif";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6"
      style={{ background: '#0a1622', paddingTop: '100px', paddingBottom: '120px' }}
    >
      {/* Radial glow overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.15) 0%, transparent 70%), radial-gradient(ellipse 60% 60% at 80% 80%, rgba(27,108,168,0.12) 0%, transparent 60%)',
        }}
      />

      {/* Structured flex container to bypass Tailwind mb-* cache bugs */}
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          maxWidth: '800px',
          width: '100%',
          gap: '24px' // Master spacing between elements
        }}
        className="relative z-10"
      >
        
        {/* Emblem Image */}
        <div style={{ width: '140px', height: '140px', marginBottom: '8px' }}>
          <img 
            src="/law-book.png" 
            alt="Law Book Symbol"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'contain',
              filter: 'drop-shadow(0 8px 24px rgba(201,168,76,0.5))' 
            }} 
          />
        </div>

        {/* Top badge */}
        <p
          style={{ 
            fontFamily: TSS, fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', 
            fontSize: '13px', color: '#C9A84C', margin: 0 
          }}
        >
          இந்திய நாடாளுமன்ற சட்டம் &bull; 2016
        </p>

        {/* Main title */}
        <h1
          style={{ 
            fontFamily: TS, fontWeight: 700, color: '#f8fafc', lineHeight: 1.25, margin: 0,
            fontSize: 'clamp(36px, 6vw, 64px)' 
          }}
        >
          ஊனமுற்ற நபர்களுக்கான
          <span style={{ display: 'block', color: '#E8C97A', marginTop: '8px' }}>உரிமைகள் சட்டம்</span>
        </h1>

        {/* English subtitle */}
        <p
          style={{ 
            fontFamily: ENG, fontWeight: 500, fontSize: '18px', color: 'rgba(255,255,255,0.7)', 
            letterSpacing: '0.5px', margin: 0 
          }}
        >
          Rights of Persons with Disabilities Act
        </p>

        {/* Act number badge */}
        <div
          style={{
            fontFamily: ENG, fontWeight: 600, padding: '10px 24px', borderRadius: '8px',
            fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase',
            background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)',
            color: '#E8C97A', marginTop: '4px', margin: 0
          }}
        >
          சட்டம் எண். 49 / 2016
        </div>

        {/* Divider */}
        <div
          style={{ 
            width: '80px', height: '2px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', 
            margin: '16px 0' 
          }}
        />

        {/* Credits */}
        <p
          style={{ 
            fontFamily: TSS, fontSize: '14.5px', color: 'rgba(255,255,255,0.4)', 
            lineHeight: 1.8, maxWidth: '500px', margin: 0 
          }}
        >
          தமிழ் மொழிபெயர்ப்பு · முனைவர் க.சண்முகவேலாயுதம் &amp; திருமிகு. வனிதா புஷ்பம்
          <br />
          NCPEDP &amp; LRCCR வெளியீடு · பிப்ரவரி 2018
        </p>

      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 left-1/2"
        style={{ 
          transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          fontFamily: ENG, fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.3)'
        }}
      >
        Scroll
        <span style={{ fontSize: '18px', animation: 'bounce 2s infinite' }}>↓</span>
        <style>{`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-8px); }
            60% { transform: translateY(-4px); }
          }
        `}</style>
      </div>
    </section>
  );
}
