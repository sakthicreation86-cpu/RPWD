const TS  = "'Noto Serif Tamil', serif";
const TSS = "'Noto Sans Tamil', 'Inter', sans-serif";
const ENG = "'Inter', sans-serif";

/* ── Reusable provision card — ultra clean, readable ── */
function ProvisionCard({ section, heading, text, accent = '#C9A84C', bg = '#fff' }) {
  return (
    <div
      className="rounded-2xl transition-all duration-300"
      style={{
        padding: 'clamp(24px, 4vw, 36px)',
        paddingLeft: 'clamp(32px, 5vw, 42px)', /* Extra left padding to avoid the accent bar */
        background: bg,
        border: '1px solid #E5E7EB',
        boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)';
        e.currentTarget.style.borderColor = accent;
        e.currentTarget.querySelector('.prov-accent').style.height = '100%';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.03)';
        e.currentTarget.style.borderColor = '#E5E7EB';
        e.currentTarget.querySelector('.prov-accent').style.height = '56px';
      }}
    >
      {/* Left accent line */}
      <div
        className="prov-accent absolute left-0 top-0 w-1.5 transition-all duration-300"
        style={{ height: '56px', background: accent, borderBottomRightRadius: '6px' }}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px', flexWrap: 'wrap' }}>
        <span style={{
          fontFamily: ENG, fontSize: '13px', fontWeight: 700,
          padding: '6px 12px', borderRadius: '8px',
          background: `${accent}18`, 
          color: accent, letterSpacing: '0.5px'
        }}>
          {section}
        </span>
        <h3 style={{ fontFamily: TS, fontSize: '19px', fontWeight: 700, color: '#0D1B2A', lineHeight: 1.4, margin: 0 }}>
          {heading}
        </h3>
      </div>
      <p style={{ fontFamily: TSS, fontSize: '15.5px', lineHeight: 1.95, color: '#4B5563', margin: 0 }}>
        {text}
      </p>
    </div>
  );
}

/* ── Chapter Headers ── */
function ChapterHeader({ chapNum, title, subtitle, color }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '48px', paddingLeft: '8px' }}>
      <div style={{
        fontFamily: ENG, fontWeight: 900, fontSize: '24px',
        width: '64px', height: '64px', borderRadius: '16px',
        background: `${color}15`, color: color,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: `1px solid ${color}30`, flexShrink: 0
      }}>
        {chapNum}
      </div>
      <div>
        <h3 style={{ fontFamily: TS, fontSize: 'clamp(24px,4vw,34px)', fontWeight: 700, color: '#0D1B2A', lineHeight: 1.2, margin: 0, marginBottom: '6px' }}>
          {title}
        </h3>
        <p style={{ fontFamily: ENG, fontSize: '13px', color: '#6B7280', letterSpacing: '2.5px', textTransform: 'uppercase', margin: 0 }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}

const chaptersData = [
  {
    id: 'definitions', chapNum: 'I', title: 'வரையறைகள்', subtitle: 'Chapter I · Definitions', color: '#B45309', // Amber-700
    provisions: [
      { section: 'பிரிவு 2(s)', heading: 'ஊனமுற்ற நபர்', text: 'நீண்ட காலமாக உடல், மனம், அறிவு அல்லது புலன் உணர்வில் குறைபாடுகளுடன், சமுதாயத்திலுள்ள தடைகளோடு செயல்படும்பொழுது, பிறருக்கு சமமாக பங்கேற்பதற்கு முடியாமல் உள்ளவர்.' },
      { section: 'பிரிவு 2(r)', heading: 'வரையறுக்கப்பட்ட ஊனம்', text: 'குறிப்பிட்ட ஊனத்தினை நாற்பது (40%) விழுக்காடு அளவிற்கும் குறையாத அளவில் கொண்டவர். சான்றளிக்கும் அதிகார அமைப்பினால் சான்றளிக்கப்படுபவர்.' },
      { section: 'பிரிவு 2(y)', heading: 'நியாயமான தகவமைப்பு', text: 'ஊனமுற்ற நபர்கள் மற்றவர்களுக்கு சமமாக உரிமைகளை அனுபவிக்கும் வகையில் சுமை ஏற்படாதவாறு தேவையான ஒத்திசைவுகள் மற்றும் தகவமைப்புகள்.' },
      { section: 'பிரிவு 2(m)', heading: 'உள்ளடக்கிய கல்வி', text: 'ஊனமுற்ற மற்றும் ஊனமற்ற மாணவர்கள் ஒன்றாக சேர்ந்து கற்கும் கல்வியமைப்பு. பல்வகை ஊனமுற்ற மாணவர்களுக்கு மாற்றுக் கற்றல் முறைகள் வழங்கல்.' },
      { section: 'பிரிவு 2(c)', heading: 'தடை (Barrier)', text: 'தொடர்பு, பண்பாடு, பொருளாதாரம், சுற்றுப்புறச்சூழல், நிறுவன, அரசியல், சமூக அல்லது மனப்பான்மை காரணிகளால் ஊனமுற்ற நபர்களின் பங்கேற்பை தடுப்பவை.' },
      { section: 'பிரிவு 2(ze)', heading: 'அனைவருக்குமான வடிவமைப்பு', text: 'அனைத்து மக்களாலும் மாற்றி அமைக்க வேண்டிய தேவையின்றி அதிக அளவில் உபயோகப்படுத்தக்கூடிய தயாரிப்புகள் மற்றும் சேவைகளை வடிவமைத்தல்.' },
    ]
  },
  {
    id: 'rights', chapNum: 'II', title: 'உரிமைகள்', subtitle: 'Chapter II · Rights and Entitlements', color: '#4338CA', // Indigo-700
    singleCard: {
      tags: ['சமத்துவம்', 'ஊனமுற்ற பெண்கள் பாதுகாப்பு', 'சமுதாய வாழ்க்கை', 'கொடுமையில் இருந்து பாதுகாப்பு', 'வீடு மற்றும் குடும்பம்', 'இனபெருக்க உரிமை', 'வாக்களிப்பு அணுகல்', 'நீதி அணுகல்', 'சட்டரீதியான தகுதி', 'காப்பு நிலை ஏற்பாடு'],
      desc: 'ஊனமுற்ற நபர்கள் மற்றவர்களுக்கு இணையாக கண்ணியத்துடன் வாழ்வதையும், சமூகத்தில் முழுமையாக பங்கெடுப்பதையும் இந்த அத்தியாயம் உறுதி செய்கிறது.',
    }
  },
  {
    id: 'education', chapNum: 'III', title: 'கல்வி', subtitle: 'Chapter III · Education', color: '#0369A1', // Sky-700
    provisions: [
      { section: 'பிரிவு 16', heading: 'நிறுவனங்களின் கடமை', text: 'உரிய அரசு அல்லது உள்ளாட்சி அமைப்புகளால் நிதியுதவி/அங்கீகாரம் பெறப்பட்டுள்ள அனைத்து கல்வி நிறுவனங்களும் ஊனமுற்ற குழந்தைகளுக்காக உள்ளடக்கிய கல்வியை அளிக்க வேண்டும்.' },
      { section: 'பிரிவு 16', heading: 'பாகுபாடற்ற சேர்க்கை', text: 'பாகுபாடு இன்றி பள்ளி சேர்க்கை மற்றும் பிறருக்கு சமமாக கல்வி வழங்குதல். விளையாட்டு மற்றும் பொழுதுபோக்கு செயல்பாடுகளுக்கு வாய்ப்பு அளித்தல்.' },
      { section: 'பிரிவு 17(g)', heading: 'இலவச புத்தகங்கள்', text: 'வரையறுக்கப்பட்ட அளவு ஊனமுடைய மாணவர்களுக்கு புத்தகங்கள் மற்றும் கற்றல் உபகரணங்களை 18 வயது வரை இலவசமாக வழங்குதல்.' },
      { section: 'பிரிவு 31', heading: 'இலவச கல்வி உரிமை', text: 'வரையறுக்கப்பட்ட அளவு ஊனமுடைய குழந்தைகளுக்கு 6 முதல் 18 வயது வரை இலவச கல்வி வழங்குவதை அரசுகள் உறுதி செய்தல்.' },
    ]
  },
  {
    id: 'employment', chapNum: 'IV', title: 'வேலைவாய்ப்பு', subtitle: 'Chapter IV · Employment', color: '#15803D', // Green-700
    provisions: [
      { section: 'பிரிவு 20', heading: 'பாகுபாட்டை தடுத்தல்', text: 'வேலைவாய்ப்பு தொடர்பாக எந்த அம்சத்திலும் எந்த ஒரு அரசு நிறுவனமும் ஊனமுற்ற நபரை பாகுபடுத்தல் கூடாது.' },
      { section: 'பிரிவு 20(3)', heading: 'பதவி உயர்வு', text: 'ஊனத்தை மட்டுமே காரணம் காட்டி எந்த ஒரு நபருக்கும் பதவி உயர்வு மறுத்தலாகாது.' },
      { section: 'பிரிவு 20(4)', heading: 'பணியில் ஊனம் ஏற்படல்', text: 'பணிகாலத்தில் ஊனமுற்றால் பணியை விட்டு நீக்குவதோ படிநிலை குறைத்தலோ கூடாது. நிகரான மாற்றுப் பணி வழங்க வேண்டும்.' },
      { section: 'பிரிவு 34', heading: '4% இட ஒதுக்கீடு', text: 'அரசு பணியில் வரையறுக்கப்பட்ட அளவு ஊனமுடைய நபர்களுக்கு குறைந்தது நான்கு சதவீதம் (4%) இட ஒதுக்கீடு வழங்குதல்.' },
    ]
  },
  {
    id: 'welfare', chapNum: 'V', title: 'சமூகப் பாதுகாப்பு', subtitle: 'Chapter V · Social Security', color: '#BE185D', // Pink-700
    provisions: [
      { section: 'பிரிவு 24(1)', heading: 'கூடுதல் உதவி', text: 'அரசு திட்டங்களில் ஊனமுற்ற நபர்களுக்கு மற்றவர்களுக்கு வழங்கப்படுவதை விட 25% கூடுதல் உதவி வழங்குதல்.' },
      { section: 'பிரிவு 24(4)(g)', heading: 'ஓய்வூதியம்', text: 'அறிவிக்கப்பட்ட வருமான உச்சவரம்பிற்குட்பட்ட ஊனமுற்ற நபர்களுக்கு அரசு முதியோர் ஓய்வூதியம் போல் ஊனமுற்றோர் ஓய்வூதியம் வழங்குதல்.' },
      { section: 'பிரிவு 25', heading: 'நலவாழ்வு சேவை', text: 'அருகாமையிலேயே இலவச நலவாழ்வு சேவை, அனைத்து மருத்துவமனைகளிலும் தடைகளற்ற வசதிகள் மற்றும் கவனிப்பதில் முன்னுரிமை.' },
      { section: 'பிரிவு 29', heading: 'பண்பாடு & பொழுதுபோக்கு', text: 'ஊனமுற்ற கலைஞர்களை ஊக்குவித்தல், அருங்காட்சியகம், பூங்காக்கள் மற்றும் பொழுதுபோக்கு மையங்களை தடைகளின்றி அணுகுவதை உறுதி செய்தல்.' },
    ]
  }
];

export default function Chapters() {
  return (
    <section id="chapters" style={{ paddingTop: '80px', paddingBottom: '120px' }}>

      {/* Main Master Header */}
      <div className="text-center mb-20">
        <p style={{ fontFamily: ENG, fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', color: '#8B6914', marginBottom: '12px' }}>
          Act Sections
        </p>
        <h2 style={{ fontFamily: TS, fontSize: 'clamp(30px, 5vw, 44px)', fontWeight: 700, color: '#0D1B2A', lineHeight: 1.3 }}>
          சட்டத்தின் அத்தியாயங்கள்
        </h2>
        <div style={{ width: '64px', height: '4px', background: '#C9A84C', margin: '20px auto 0', borderRadius: '2px' }} />
      </div>

      <div className="flex flex-col gap-24">
        {chaptersData.map((chap) => (
          <div key={chap.id} id={chap.id} className="scroll-mt-28">
            
            <ChapterHeader 
              chapNum={chap.chapNum} 
              title={chap.title} 
              subtitle={chap.subtitle} 
              color={chap.color} 
            />

            {/* Chapter 2 has single card with tags, others have grid */}
            {chap.singleCard ? (
              <div 
                className="rounded-3xl transition-all duration-300 hover:shadow-lg"
                style={{ 
                  padding: 'clamp(32px, 5vw, 48px)',
                  background: '#F8FAFC', 
                  border: `1px solid ${chap.color}25` 
                }}
              >
                <p style={{ fontFamily: TSS, fontSize: '17px', lineHeight: 1.9, color: '#334155', marginBottom: '32px' }}>
                  {chap.singleCard.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                  {chap.singleCard.tags.map(tag => (
                    <span key={tag} style={{ 
                      fontFamily: TSS, fontSize: '14.5px', fontWeight: 600,
                      padding: '10px 20px', borderRadius: '40px', 
                      background: '#fff', border: `1px solid ${chap.color}40`, color: chap.color,
                      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                {chap.provisions.map((p, i) => (
                  <ProvisionCard key={i} {...p} accent={chap.color} />
                ))}
              </div>
            )}
            
          </div>
        ))}
      </div>

    </section>
  );
}
