import React from 'react';

const TS  = "'Noto Serif Tamil', serif";
const TSS = "'Noto Sans Tamil', 'Inter', sans-serif";
const ENG = "'Inter', sans-serif";

const stats = [
  { num: '21+', label: 'குறிப்பிடப்பட்ட ஊன வகைகள்' },
  { num: '9',   label: 'சட்டத்தின் அத்தியாயங்கள்' },
  { num: '4%',  label: 'அரசு வேலைவாய்ப்பு ஒதுக்கீடு' },
  { num: '40%', label: 'வரையறுக்கப்பட்ட ஊன வரம்பு' },
  { num: '2016',label: 'சட்டம் நிறைவேற்றப்பட்ட ஆண்டு' },
];

export default function StatsRow() {
  return (
    <div
      id="stats-row"
      className="relative z-20 mx-auto w-full"
      style={{ marginTop: '-4.5rem', marginBottom: '80px', padding: '0 16px' }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: '1200px',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '32px',
          padding: 'clamp(24px, 4vw, 40px)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.6)',
          border: '1px solid rgba(201,168,76,0.2)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          gap: '16px'
        }}
      >
        {stats.map((s, i) => (
          <React.Fragment key={s.label}>
            <div 
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                padding: '12px',
                flex: '1 1 140px', // Allow them to grow/shrink equally but stay small enough for a single row
                transition: 'transform 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}
            >
              <span
                style={{
                  fontFamily: ENG,
                  fontSize: 'clamp(36px, 5vw, 48px)',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #B47F24 0%, #C9A84C 50%, #D4AF37 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1.1,
                  marginBottom: '12px',
                  letterSpacing: '-1px',
                  filter: 'drop-shadow(0 4px 8px rgba(201,168,76,0.15))'
                }}
              >
                {s.num}
              </span>
              <p
                style={{
                  fontFamily: TSS,
                  fontSize: '14.5px',
                  color: '#334155',
                  fontWeight: 600,
                  lineHeight: 1.6,
                  maxWidth: '160px',
                  margin: 0
                }}
              >
                {s.label}
              </p>
            </div>
            
            {/* Divider lines between elements (Hidden on wrapping mobile rows) */}
            {i !== stats.length - 1 && (
              <div 
                className="hidden lg:block"
                style={{
                   width: '1px', 
                   height: '60px', 
                   background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.2), transparent)',
                   margin: '0 auto'
                }} 
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
