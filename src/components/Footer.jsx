const ENG = "'Inter', sans-serif";
const TSS = "'Noto Sans Tamil', 'Inter', sans-serif";
const TS  = "'Noto Serif Tamil', serif";

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0a1622', // Slightly deeper than Hero for a solid anchor
        color: '#94A3B8',
        borderTop: '1px solid rgba(201,168,76,0.15)',
        padding: 'clamp(40px, 8vw, 64px) clamp(20px, 4vw, 40px) clamp(30px, 5vw, 40px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle top glow */}
      <div 
        style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '50%', height: '1px',
          background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
          opacity: 0.5
        }}
      />

      <div style={{ maxWidth: '800px', width: '100%' }}>
        {/* Emblem or Icon */}
        <div style={{ fontSize: '28px', marginBottom: '16px', opacity: 0.8 }}>
          ⚖️
        </div>

        {/* Title */}
        <h2 style={{ fontFamily: TS, fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 700, color: '#F0E8D8', lineHeight: 1.4, marginBottom: '8px' }}>
          ஊனமுற்ற நபர்களுக்கான உரிமைகள் சட்டம் 2016
        </h2>
        
        {/* Subtitle */}
        <p style={{ fontFamily: ENG, fontSize: '13.5px', color: '#C9A84C', letterSpacing: '1px', marginBottom: '24px' }}>
          Rights of Persons with Disabilities Act, 2016 (Act No. 49 of 2016)
        </p>

        {/* Credits Grid */}
        <div style={{ 
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', 
          marginBottom: '32px', fontFamily: TSS, fontSize: '14px', lineHeight: 1.8 
        }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px 24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <strong style={{ color: '#E2E8F0', fontWeight: 600 }}>தமிழ் மொழிபெயர்ப்பு</strong><br/>
            முனைவர் க.சண்முகவேலாயுதம் &amp; திருமிகு. வனிதா புஷ்பம்
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px 24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <strong style={{ color: '#E2E8F0', fontWeight: 600 }}>வெளியீடு</strong><br/>
            <a href="http://www.ncpedp.org" target="_blank" rel="noreferrer" style={{ color: '#C9A84C', textDecoration: 'none' }}>NCPEDP</a> &amp; LRCCR · பிப்ரவரி 2018
          </div>
        </div>

        {/* Disclaimer */}
        <p style={{ fontFamily: TSS, fontSize: '12.5px', color: '#64748B', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.6 }}>
          இந்த இணையதளம் பொதுவிழிப்புணர்வு நோக்கத்திற்காக மட்டுமே தயாரிக்கப்பட்டுள்ளது. அதிகாரப்பூர்வமான சட்ட ஆலோசனைகளுக்கு அல்ல.
        </p>

        {/* Divider */}
        <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '24px' }} />

        {/* Branding / Dev Link */}
        <div style={{ fontFamily: ENG, fontSize: '13px', color: '#94A3B8', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span>© {new Date().getFullYear()} RPWD Act Awareness.</span>
          <span style={{ opacity: 0.3 }}>|</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            Developed by 
            <a 
              href="https://arisewebx.com" 
              target="_blank" 
              rel="noreferrer"
              style={{ 
                color: '#38BDF8', 
                fontWeight: 600, 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'color 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#7DD3FC'}
              onMouseLeave={e => e.currentTarget.style.color = '#38BDF8'}
            >
              AriseWebX
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </span>
        </div>

      </div>
    </footer>
  );
}
