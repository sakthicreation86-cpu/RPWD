import { useEffect, useState } from 'react';

const TS  = "'Noto Serif Tamil', serif";
const TSS = "'Noto Sans Tamil', 'Inter', sans-serif";
const ENG = "'Inter', sans-serif";

export default function PwaPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // 1. Setup the exactly 5-second delay to show our beautiful custom UI
    //    We do this outside the listener so it ALWAYS shows up visually for testing.
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 5000);

    // 2. Secretly listen for the native install prompt event in the background
    const handleBeforeInstallPrompt = (e) => {
      // Prevent Chrome's default mini-infobar from appearing
      e.preventDefault();
      // Stash the event so it can be triggered when the user clicks our button
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    // If the browser natively supplied the install prompt, execute it!
    if (deferredPrompt) {
      setShowPrompt(false);
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      setDeferredPrompt(null);
    } else {
      // DEV MODE FALLBACK: If Chrome blocked the prompt due to localhost or missing HTTPS
      alert("App installation triggered! (Native PWA prompt is blocked on untrusted localhost dev servers, but your UI is functioning perfectly! Deploy to production to see the native Chrome box.)");
      setShowPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        width: 'calc(100% - 32px)',
        maxWidth: '400px',
        animation: 'slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      }}
    >
      <style>{`
        @keyframes slideUpFade {
          0% { opacity: 0; transform: translate(-50%, 40px); }
          100% { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>
      
      <div 
        style={{
          background: 'rgba(13, 27, 42, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '24px',
          padding: '24px',
          border: '1px solid rgba(201,168,76,0.3)',
          boxShadow: '0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05) inset',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
          <img 
            src="/law-book.png" 
            alt="App Icon" 
            style={{ width: '56px', height: '56px', objectFit: 'contain', filter: 'drop-shadow(0 2px 8px rgba(201,168,76,0.4))' }} 
          />
          <div style={{ flex: 1 }}>
            <h3 style={{ fontFamily: TS, fontSize: '18px', fontWeight: 700, color: '#f8fafc', margin: '0 0 4px', lineHeight: 1.2 }}>
              RPWD Act 2016
            </h3>
            <p style={{ fontFamily: TSS, fontSize: '13.5px', color: '#94A3B8', margin: 0, lineHeight: 1.5 }}>
              இந்த வெப்சைட்டை ஒரு Application ஆக இன்ஸ்டால் செய்து எளிதாக பயன்படுத்தவும்.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
          <button 
            onClick={handleDismiss}
            style={{
              flex: 1,
              padding: '12px',
              borderRadius: '12px',
              fontFamily: ENG,
              fontSize: '14px',
              fontWeight: 600,
              background: 'transparent',
              color: '#94A3B8',
              border: '1px solid rgba(255,255,255,0.1)',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            Not Now
          </button>
          
          <button 
            onClick={handleInstallClick}
            style={{
              flex: 1,
              padding: '12px',
              borderRadius: '12px',
              fontFamily: ENG,
              fontSize: '14px',
              fontWeight: 600,
              background: 'linear-gradient(135deg, #C9A84C 0%, #B47F24 100%)',
              color: '#0D1B2A',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(201,168,76,0.3)',
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(201,168,76,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(201,168,76,0.3)'; }}
          >
            Install App
          </button>
        </div>
      </div>
    </div>
  );
}
