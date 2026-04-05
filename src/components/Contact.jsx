import { useState } from 'react';

const ENG = "'Inter', sans-serif";
const TSS = "'Noto Sans Tamil', 'Inter', sans-serif";
const TS  = "'Noto Serif Tamil', serif";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    problem: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the WhatsApp message dynamically (skipping empty optional fields)
    let message = `*புதிய தொடர்பு (RPWD Website)*\n\n*பெயர்:* ${formData.name}\n*கைபேசி எண்:* ${formData.mobile}`;
    
    if (formData.email.trim()) {
      message += `\n*மின்னஞ்சல்:* ${formData.email}`;
    }
    if (formData.problem.trim()) {
      message += `\n*பிரச்சனை / தேவை:* ${formData.problem}`;
    }
    
    message += `\n*முகவரி:* ${formData.address}`;
    
    // The target WhatsApp number with country code (91)
    const phone = '919150907492';
    
    // Create WhatsApp URL API link
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" style={{ paddingBottom: '120px' }}>
      
      <div className="text-center mb-12">
        <p style={{ fontFamily: ENG, fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', color: '#8B6914', marginBottom: '12px' }}>
          Get In Touch
        </p>
        <h2 style={{ fontFamily: TS, fontSize: 'clamp(30px, 5vw, 44px)', fontWeight: 700, color: '#0D1B2A', lineHeight: 1.35 }}>
          எங்களை தொடர்பு கொள்ள
        </h2>
        <div style={{ width: '64px', height: '4px', background: '#C9A84C', margin: '16px auto 0', borderRadius: '2px' }} />
      </div>

      <div 
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          background: '#fff',
          borderRadius: '24px',
          padding: 'clamp(32px, 5vw, 48px)',
          border: '1px solid #E5E7EB',
          boxShadow: '0 12px 32px rgba(0,0,0,0.03)',
        }}
      >
        <p style={{ fontFamily: TSS, fontSize: '16px', color: '#4B5563', lineHeight: 1.7, textAlign: 'center', marginBottom: '32px' }}>
          மேலும் தகவல்களுக்கு அல்லது சந்தேகங்களுக்கு கீழ்காணும் படிவத்தை பூர்த்தி செய்து வாட்ஸ்அப் வழியாக அனுப்பவும்.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="name" style={{ fontFamily: TSS, fontSize: '14.5px', fontWeight: 600, color: '#334155' }}>
              பெயர் (Name) <span style={{ color: '#E11D48' }}>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="உங்கள் பெயர்"
              style={{
                fontFamily: TSS, fontSize: '15px',
                padding: '14px 16px',
                borderRadius: '12px',
                border: '1px solid #CBD5E1',
                background: '#F8FAFC',
                color: '#0D1B2A',
                outline: 'none',
                transition: 'all 0.2s',
              }}
              onFocus={(e) => { e.target.style.borderColor = '#C9A84C'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.1)'; }}
              onBlur={(e) => { e.target.style.borderColor = '#CBD5E1'; e.target.style.background = '#F8FAFC'; e.target.style.boxShadow = 'none'; }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="mobile" style={{ fontFamily: TSS, fontSize: '14.5px', fontWeight: 600, color: '#334155' }}>
              கைபேசி எண் (Mobile Number) <span style={{ color: '#E11D48' }}>*</span>
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              required
              value={formData.mobile}
              onChange={handleChange}
              placeholder="உங்கள் கைபேசி எண்"
              style={{
                fontFamily: TSS, fontSize: '15px',
                padding: '14px 16px',
                borderRadius: '12px',
                border: '1px solid #CBD5E1',
                background: '#F8FAFC',
                color: '#0D1B2A',
                outline: 'none',
                transition: 'all 0.2s',
              }}
              onFocus={(e) => { e.target.style.borderColor = '#C9A84C'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.1)'; }}
              onBlur={(e) => { e.target.style.borderColor = '#CBD5E1'; e.target.style.background = '#F8FAFC'; e.target.style.boxShadow = 'none'; }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="email" style={{ fontFamily: TSS, fontSize: '14.5px', fontWeight: 600, color: '#334155' }}>
              மின்னஞ்சல் (Email ID) <span style={{ color: '#94A3B8', fontWeight: 400, marginLeft: '6px' }}>(விருப்பப்பட்டால் / Optional)</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              style={{
                fontFamily: TSS, fontSize: '15px',
                padding: '14px 16px',
                borderRadius: '12px',
                border: '1px solid #CBD5E1',
                background: '#F8FAFC',
                color: '#0D1B2A',
                outline: 'none',
                transition: 'all 0.2s',
              }}
              onFocus={(e) => { e.target.style.borderColor = '#C9A84C'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.1)'; }}
              onBlur={(e) => { e.target.style.borderColor = '#CBD5E1'; e.target.style.background = '#F8FAFC'; e.target.style.boxShadow = 'none'; }}
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="problem" style={{ fontFamily: TSS, fontSize: '14.5px', fontWeight: 600, color: '#334155' }}>
              பிரச்சனை / தேவை (Problem) <span style={{ color: '#94A3B8', fontWeight: 400, marginLeft: '6px' }}>(Optional)</span>
            </label>
            <textarea
              id="problem"
              name="problem"
              rows="2"
              value={formData.problem}
              onChange={handleChange}
              placeholder="உங்கள் பிரச்சனை அல்லது தேவையை சுருக்கமாக கூறவும்"
              style={{
                fontFamily: TSS, fontSize: '15px',
                padding: '14px 16px',
                borderRadius: '12px',
                border: '1px solid #CBD5E1',
                background: '#F8FAFC',
                color: '#0D1B2A',
                outline: 'none',
                resize: 'none',
                transition: 'all 0.2s',
              }}
              onFocus={(e) => { e.target.style.borderColor = '#C9A84C'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.1)'; }}
              onBlur={(e) => { e.target.style.borderColor = '#CBD5E1'; e.target.style.background = '#F8FAFC'; e.target.style.boxShadow = 'none'; }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="address" style={{ fontFamily: TSS, fontSize: '14.5px', fontWeight: 600, color: '#334155' }}>
              முகவரி (Address) <span style={{ color: '#E11D48' }}>*</span>
            </label>
            <textarea
              id="address"
              name="address"
              required
              rows="3"
              value={formData.address}
              onChange={handleChange}
              placeholder="உங்கள் முழு முகவரி"
              style={{
                fontFamily: TSS, fontSize: '15px',
                padding: '14px 16px',
                borderRadius: '12px',
                border: '1px solid #CBD5E1',
                background: '#F8FAFC',
                color: '#0D1B2A',
                outline: 'none',
                resize: 'none',
                transition: 'all 0.2s',
              }}
              onFocus={(e) => { e.target.style.borderColor = '#C9A84C'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.1)'; }}
              onBlur={(e) => { e.target.style.borderColor = '#CBD5E1'; e.target.style.background = '#F8FAFC'; e.target.style.boxShadow = 'none'; }}
            />
          </div>

          <button
            type="submit"
            style={{
              marginTop: '16px',
              background: '#22C55E', // WhatsApp Green
              color: '#fff',
              fontFamily: TSS, fontSize: '16px', fontWeight: 700,
              padding: '16px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              transition: 'all 0.3s',
              boxShadow: '0 4px 12px rgba(34,197,94,0.3)'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#16A34A'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(34,197,94,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#22C55E'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(34,197,94,0.3)'; e.currentTarget.style.transform = 'none'; }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            Send on WhatsApp
          </button>
        </form>

      </div>
    </section>
  );
}
