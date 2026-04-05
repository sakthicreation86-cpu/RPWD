import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';

const ITEMS = [
  {
    label: 'தகவல்',
    bg: '#1A2D42',
    links: [
      { label: 'கண்ணோட்டம்',  href: '#overview' },
      { label: 'வரையறைகள்',   href: '#definitions' },
      { label: 'உரிமைகள்',    href: '#rights' },
    ],
  },
  {
    label: 'கல்வி & வேலை',
    bg: '#0e2236',
    links: [
      { label: 'கல்வி',         href: '#education' },
      { label: 'வேலைவாய்ப்பு', href: '#employment' },
      { label: 'நலன்',          href: '#welfare' },
    ],
  },
  {
    label: 'மேலும்',
    bg: 'rgba(201,168,76,0.18)',
    links: [
      { label: 'ஊன வகைகள்', href: '#disabilities' },
      { label: 'FAQ',         href: '#faq' },
    ],
  },
];

const CLOSED_H = 60;
const DESKTOP_OPEN_H = 210; // 3 cards side-by-side

export default function CardNav({ ease = 'power3.out' }) {
  const [open,     setOpen]     = useState(false);
  const [sticky,   setSticky]   = useState(false);
  const [desktop,  setDesktop]  = useState(() => window.innerWidth >= 768);

  const navRef   = useRef(null);
  const cardsRef = useRef([]);
  const tlRef    = useRef(null);

  /* ── sticky on scroll ── */
  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > window.innerHeight * 0.75);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── track desktop breakpoint ── */
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const fn = e => setDesktop(e.matches);
    mq.addEventListener('change', fn);
    return () => mq.removeEventListener('change', fn);
  }, []);

  /* ── calc mobile height from DOM ── */
  const mobileHeight = () => {
    const nav = navRef.current;
    if (!nav) return 380;
    const content = nav.querySelector('.cnav-body');
    if (!content) return 380;
    // temporarily reveal to measure
    const old = { vis: content.style.visibility, pos: content.style.position, h: content.style.height };
    Object.assign(content.style, { visibility: 'visible', position: 'static', height: 'auto' });
    void content.offsetHeight;
    const measured = CLOSED_H + content.scrollHeight + 8;
    Object.assign(content.style, { visibility: old.vis, position: old.pos, height: old.h });
    return measured;
  };

  /* ── build GSAP timeline ── */
  const buildTl = () => {
    const nav = navRef.current;
    if (!nav) return null;
    const cards = cardsRef.current.filter(Boolean);
    const targetH = desktop ? DESKTOP_OPEN_H : mobileHeight();

    gsap.set(nav, { height: CLOSED_H, overflow: 'hidden' });
    gsap.set(cards, { y: 32, opacity: 0, scale: 0.96 });

    const tl = gsap.timeline({
      paused: true,
      onComplete: () => gsap.set(nav, { overflow: 'visible' }),   // ← CRITICAL: restore overflow after open
      onReverseComplete: () => gsap.set(nav, { overflow: 'hidden' }),
    });

    tl.to(nav, { height: targetH, duration: 0.4, ease });
    tl.to(cards, { y: 0, opacity: 1, scale: 1, duration: 0.35, ease, stagger: 0.06 }, '-=0.18');
    return tl;
  };

  useLayoutEffect(() => {
    const tl = buildTl();
    tlRef.current = tl;
    return () => { tl?.kill(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [desktop, ease]);

  /* ── toggle open/close ── */
  const toggle = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!open) {
      setOpen(true);
      tl.play(0);
    } else {
      tl.eventCallback('onReverseComplete', () => { setOpen(false); });
      tl.reverse();
    }
  };

  const closeNav = (href) => {
    const tl = tlRef.current;
    if (tl) {
      tl.eventCallback('onReverseComplete', () => { setOpen(false); });
      tl.reverse();
    } else {
      setOpen(false);
    }
    if (href) setTimeout(() => { window.location.hash = href.slice(1); }, 50);
  };

  const setRef = i => el => { cardsRef.current[i] = el; };

  const wrapStyle = {
    position: sticky ? 'fixed' : 'absolute',
    top: sticky ? '12px' : '18px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '92%',
    maxWidth: '860px',
    zIndex: 100,
    transition: 'top 0.28s ease',
  };

  return (
    <div style={wrapStyle}>
      <nav
        ref={navRef}
        style={{
          height: `${CLOSED_H}px`,
          overflow: 'hidden',
          borderRadius: '14px',
          background: sticky ? 'rgba(8,18,30,0.97)' : 'rgba(13,27,42,0.9)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${sticky ? 'rgba(201,168,76,0.45)' : 'rgba(201,168,76,0.25)'}`,
          boxShadow: sticky
            ? '0 8px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.08)'
            : '0 4px 28px rgba(0,0,0,0.55)',
          willChange: 'height',
          transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
        }}
      >
        {/* ── Top bar ── */}
        <div style={{
          height: `${CLOSED_H}px`,
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          alignItems: 'center',
          padding: '0 14px',
          gap: '12px',
          position: 'relative',
          zIndex: 2,
        }}>

          {/* Hamburger */}
          <button
            onClick={toggle}
            aria-label={open ? 'Close menu' : 'Open menu'}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 6px', display: 'flex', flexDirection: 'column', gap: '5px', borderRadius: '8px' }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: '22px', height: '2px', borderRadius: '2px',
                background: '#C9A84C', transformOrigin: 'center',
                transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                opacity:    (i === 1 && open) ? 0 : 1,
                transform:  i === 0 && open ? 'translateY(7px) rotate(45deg)'
                          : i === 2 && open ? 'translateY(-7px) rotate(-45deg)'
                          : '',
              }} />
            ))}
          </button>

          {/* Logo — centered */}
          <div style={{ textAlign: 'center' }}>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '15px', fontWeight: 700,
              letterSpacing: '2.5px', color: '#C9A84C',
              whiteSpace: 'nowrap',
            }}>
              RPWD Act 2016
            </span>
          </div>

          {/* Phone */}
          <a
            href="tel:9150907492"
            style={{
              fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600,
              color: '#C9A84C', textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: '6px',
              background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)',
              borderRadius: '8px', padding: '6px 12px', whiteSpace: 'nowrap',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.1)'; }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z"/>
            </svg>
            <span className="hidden sm:inline">9150907492</span>
          </a>
        </div>

        {/* ── Cards body ── */}
        <div
          className="cnav-body"
          style={{
            padding: '0 8px 8px',
            display: 'flex',
            flexDirection: desktop ? 'row' : 'column',
            gap: '8px',
            visibility: open ? 'visible' : 'hidden',
            pointerEvents: open ? 'auto' : 'none',
          }}
        >
          {ITEMS.map((item, idx) => (
            <div
              key={item.label}
              ref={setRef(idx)}
              style={{
                flex: '1 1 0%',
                background: item.bg,
                border: '1px solid rgba(201,168,76,0.18)',
                borderRadius: '10px',
                padding: '14px 16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                minHeight: desktop ? '130px' : '80px',
              }}
            >
              <span style={{
                fontFamily: "'Noto Serif Tamil', serif",
                fontSize: '15px', fontWeight: 700,
                color: '#E8C97A', lineHeight: 1.3,
              }}>
                {item.label}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: 'auto' }}>
                {item.links.map(lnk => (
                  <a
                    key={lnk.href}
                    href={lnk.href}
                    onClick={e => { e.preventDefault(); closeNav(lnk.href); }}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '5px',
                      fontFamily: "'Noto Sans Tamil', 'Inter', sans-serif",
                      fontSize: '13.5px', fontWeight: 500,
                      color: 'rgba(255,255,255,0.85)', textDecoration: 'none',
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#E8C97A'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}
                  >
                    <GoArrowUpRight style={{ flexShrink: 0 }} />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Mobile contact card */}
          {!desktop && (
            <div style={{
              background: 'rgba(6,15,26,0.8)', border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: '10px', padding: '12px 16px',
              display: 'flex', flexWrap: 'wrap', gap: '8px 18px',
            }}>
              {[
                { icon: '📞', text: '9150907492',            href: 'tel:9150907492',           color: '#C9A84C' },
                { icon: '✉',  text: 'puppysathya@gmail.com', href: 'mailto:puppysathya@gmail.com', color: 'rgba(255,255,255,0.5)' },
                { icon: '📸', text: '@insta_elangovnan',     href: 'https://www.instagram.com/insta_elangovnan', color: 'rgba(255,255,255,0.5)', target: '_blank' },
              ].map(c => (
                <a key={c.href} href={c.href} target={c.target} rel={c.target ? 'noopener noreferrer' : undefined}
                  style={{ fontFamily: "'Inter'", fontSize: '12.5px', color: c.color, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  {c.icon} {c.text}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
