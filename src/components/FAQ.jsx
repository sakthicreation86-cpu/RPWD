import { useState } from 'react';

const ENG = "'Inter', sans-serif";
const TSS = "'Noto Sans Tamil', 'Inter', sans-serif";
const TS  = "'Noto Serif Tamil', serif";

const faqs = [
  { q: 'RPWD சட்டம் 2016 என்றால் என்ன?', a: 'RPWD சட்டம் 2016 என்பது இந்திய நாடாளுமன்றத்தால் நிறைவேற்றப்பட்ட ஒரு சட்டம் ஆகும். இது 2007-ம் ஆண்டு ஐ.நா.வின் ஊனமுற்றோர் உரிமைகள் கூட்டிணைவைப் பின்பற்றி உருவாக்கப்பட்டது. இது முன்னாள் ஊனமுற்றோர் சட்டம் (1995) ஐ மாற்றி 21 வகையான ஊனப் பாதிப்புகளை அங்கீகரிக்கிறது.' },
  { q: '4% இட ஒதுக்கீடு யாருக்கு?', a: 'அரசு நிறுவனங்களில் வேலைவாய்ப்பில் குறைந்தபட்சம் 40% ஊனப் பாதிப்பு உள்ள நபர்களுக்கு 4% இட ஒதுக்கீடு (பேந்ச்மார்க் ஊனமுற்றவர்) வழங்கப்படுகிறது.' },
  { q: 'பள்ளிகள் என்ன வழங்க வேண்டும்?', a: 'அரசு மற்றும் அரசு உதவி பெறும் பள்ளிகள் ஊனமுற்ற குழந்தைகளுக்கு இலவச கல்வி, அணுகக்கூடிய வகுப்பறைகள், கற்றல் உபகரணங்கள், தேர்வு வசதிகள் மற்றும் தனிப்பட்ட ஆதரவு வழங்க வேண்டும்.' },
  { q: 'சான்றிதழ் பெறுவது எப்படி?', a: 'ஊன சான்றிதழ் பெற மாவட்ட அரசு மருத்துவமனையில் உள்ள சான்றளிக்கும் மருத்துவர் அல்லது அதிகாரிகளிடம் நேரடியாக விண்ணப்பிக்கலாம். ஆவண சான்றிதழ்கள் மற்றும் உடல் சோதனையுடன் ஊன சான்றிதழ் வழங்கப்படும்.' },
  { q: 'RPWD சட்டத்தின் கீழ் யாரிடம் புகார் செய்வது?', a: 'ஊனமுற்றோர் ஆணையர் அலுவலகத்தில் புகார் தாக்கல் செய்யலாம். ஒவ்வொரு மாவட்டத்திலும் சேவைகள் மறுக்கப்பட்டால் அல்லது பாகுபாட்டை அனுபவித்தால் "குறைதீர் அதிகாரி" நியமிக்கப்பட்டுள்ளார். இலவச சட்ட வழிகாட்டுதலும் கிடைக்கும்.' },
  { q: 'சட்டம் சுய திட்டத்தை எப்படி ஆதரிக்கிறது?', a: 'RPWD சட்டம் ஊனமுற்ற நபர்கள் தங்கள் வாழ்க்கையில் தாங்களே முடிவெடுக்கும் உரிமையை அங்கீகரிக்கிறது. சுய திட்டம் வழங்குவதற்கான ஏற்பாடு, தனியாக வாழ்வதற்கான ஆதரவு மற்றும் சமூக வாழ்க்கையில் பங்கேற்பதற்கான வாய்ப்பை உறுதி செய்கிறது.' },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section id="faq" style={{ paddingBottom: '120px' }}>
      <div className="text-center mb-16">
        <p style={{ fontFamily: ENG, fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', color: '#8B6914', marginBottom: '12px' }}>
          Frequently Asked
        </p>
        <h2 style={{ fontFamily: TS, fontSize: 'clamp(30px, 5vw, 44px)', fontWeight: 700, color: '#0D1B2A', lineHeight: 1.35 }}>
          அடிக்கடி கேட்கப்படும் கேள்விகள்
        </h2>
        <div style={{ width: '64px', height: '4px', background: '#C9A84C', margin: '20px auto 0', borderRadius: '2px' }} />
      </div>

      <div 
        className="flex flex-col gap-4" 
        style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}
      >
        {faqs.map((faq, i) => {
          const isOpen = active === i;
          return (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                border: isOpen ? '1px solid #C9A84C' : '1px solid #E5E7EB',
                boxShadow: isOpen ? '0 12px 32px rgba(201,168,76,0.1)' : '0 2px 8px rgba(0,0,0,0.02)',
              }}
            >
              <button
                className="w-full text-left flex items-start justify-between gap-6"
                style={{ padding: 'clamp(20px, 4vw, 28px)' }}
                onClick={() => setActive(isOpen ? null : i)}
              >
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ 
                    fontFamily: ENG, fontWeight: 700, fontSize: '14px', 
                    color: isOpen ? '#fff' : '#C9A84C',
                    background: isOpen ? '#C9A84C' : '#FFF9EB',
                    width: '36px', height: '36px', borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, transition: 'all 0.3s'
                  }}>
                    Q
                  </div>
                  <span style={{ fontFamily: TSS, fontSize: '16.5px', fontWeight: 600, color: isOpen ? '#0D1B2A' : '#334155', lineHeight: 1.5, transition: 'color 0.3s' }}>
                    {faq.q}
                  </span>
                </div>
                
                <div style={{ 
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: isOpen ? '#F0E8D8' : '#F8FAFC',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, transition: 'all 0.3s'
                }}>
                  <svg
                    width="14" height="14" viewBox="0 0 18 18" fill="none"
                    style={{ color: isOpen ? '#8B6914' : '#94A3B8', transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)', transform: isOpen ? 'rotate(180deg)' : '' }}
                  >
                    <path d="M3 6l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>

              <div style={{
                maxHeight: isOpen ? '400px' : '0',
                opacity: isOpen ? 1 : 0,
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}>
                <div style={{ padding: '0 clamp(20px, 4vw, 28px) clamp(24px, 4vw, 32px)', paddingLeft: 'clamp(72px, 8vw, 80px)' }}>
                  <p style={{ fontFamily: TSS, fontSize: '15.5px', lineHeight: 1.9, color: '#4B5563', margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
