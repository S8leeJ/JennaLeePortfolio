import { useState, useEffect, useRef, useCallback } from 'react';
import {
  FaEnvelope, FaLinkedin, FaGithub, FaFileAlt,
  FaJava, FaAws, FaDatabase, FaAward,
} from 'react-icons/fa';
import {
  SiTypescript, SiPython, SiCplusplus, SiR, SiHtml5, SiCss3,
  SiReact, SiNextdotjs, SiSvelte, SiNodedotjs, SiTailwindcss,
  SiUnity, SiSupabase, SiOpencv, SiLinux, SiGithub,
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

import PROJECTS from '../data/projects.json';
import EXPERIENCE from '../data/experience.json';
import SKILL_GROUPS from '../data/skills.json';
import ParticleField from '../ParticleField';

const resumePdf = '/resume.pdf';

/* Brand icon + color for each skill pill */
const SKILL_META = {
  'JavaScript / TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'Python': { icon: SiPython, color: '#4B8BBE' },
  'Java': { icon: FaJava, color: '#E76F00' },
  'C#': { icon: TbBrandCSharp, color: '#A179DC' },
  'C++': { icon: SiCplusplus, color: '#649AD2' },
  'R': { icon: SiR, color: '#276DC3' },
  'SQL': { icon: FaDatabase, color: '#8fb0ff' },
  'HTML': { icon: SiHtml5, color: '#E34F26' },
  'CSS': { icon: SiCss3, color: '#38BDF8' },
  'React': { icon: SiReact, color: '#61DAFB' },
  'Next.js': { icon: SiNextdotjs, color: '#ffffff' },
  'React Native': { icon: SiReact, color: '#61DAFB' },
  'Svelte': { icon: SiSvelte, color: '#FF3E00' },
  'Node.js / Express': { icon: SiNodedotjs, color: '#5FA04E' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#38BDF8' },
  'Unity': { icon: SiUnity, color: '#ffffff' },
  'Supabase': { icon: SiSupabase, color: '#3FCF8E' },
  'OpenCV': { icon: SiOpencv, color: '#A179DC' },
  'AWS': { icon: FaAws, color: '#FF9900' },
  'Linux': { icon: SiLinux, color: '#FCC624' },
  'GitHub': { icon: SiGithub, color: '#ffffff' },
  'AWS Certified Cloud Practitioner (2025)': { icon: FaAward, color: '#FF9900' },
  'Unity Certified Programmer (2024)': { icon: FaAward, color: '#50dcc8' },
};

const NAV_LINKS = [
  { id: 'work', label: 'My Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Connect' },
];

/* Scroll-reveal wrapper: fades/slides children in when they enter the viewport */
function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function TopNav({ onJump }) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    ['top', ...NAV_LINKS.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="topnav" aria-label="Page sections">
      <button type="button" className="topnav-brand" onClick={() => onJump('top')} aria-label="Back to top">
        Jenna Lee 
      </button>
      <ul className="topnav-links">
        {NAV_LINKS.map((l) => (
          <li key={l.id}>
            <button
              type="button"
              className={active === l.id ? 'active' : ''}
              onClick={() => onJump(l.id)}
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* Cloud of soft color puffs that leans toward the cursor.
   Each layer has a different parallax depth, so the cloud feels volumetric. */
function CloudOrb() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const target = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    let raf;

    const onMove = (e) => {
      target.x = e.clientX / window.innerWidth - 0.5;
      target.y = e.clientY / window.innerHeight - 0.5;
    };

    // Lerp toward the cursor so the cloud trails with a soft lag
    const tick = () => {
      pos.x += (target.x - pos.x) * 0.04;
      pos.y += (target.y - pos.y) * 0.04;
      el.style.setProperty('--mx', pos.x.toFixed(4));
      el.style.setProperty('--my', pos.y.toFixed(4));
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="hero-cloud" aria-hidden>
      <div className="cloud-layer" style={{ '--depth': 70 }}><span className="cloud-puff cp-blue" /></div>
      <div className="cloud-layer" style={{ '--depth': 96 }}><span className="cloud-puff cp-purple" /></div>
      <div className="cloud-layer" style={{ '--depth': -76 }}><span className="cloud-puff cp-pink" /></div>
      <div className="cloud-layer" style={{ '--depth': 40 }}><span className="cloud-puff cp-cyan" /></div>
    </div>
  );
}

function Hero({ onJump }) {
  return (
    <header id="top" className="hero">
      <ParticleField />
      <CloudOrb />
      <div className="hero-frame">
        <div className="hero-stage">
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden />
            Software Engineer · Designer
          </p>
          <div className="hero-row">
            <h1 className="hero-name">
              <span className="hero-name-a">Jenna</span>
              <span className="hero-name-b">Lee</span>
            </h1>
            <div className="hero-corner">
              <div className="hero-lede">
                <span className="hero-rule" aria-hidden />
                <p className="hero-statement">
                  Studying Computer Science at UT Austin with a minor in Business
                  Foundations — working at the intersection of{' '}
                  <em>business, UI/UX design, and engineering</em>.
                </p>
              </div>
              <div className="hero-cta">
                <a className="btn btn-primary" href="#work">See my work <span aria-hidden>→</span></a>
                <ul className="hero-socials" aria-label="Contact links">
                  <li>
                    <a href="mailto:jenna.snow.lee@gmail.com" aria-label="Email"><FaEnvelope /></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/jenna-lee-303993292/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                  </li>
                  <li>
                    <a href="https://github.com/S8leeJ" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                  </li>
                  <li>
                    <a href={resumePdf} target="_blank" rel="noopener noreferrer" aria-label="Résumé"><FaFileAlt /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="hero-meta">
            <span>©2026</span>
            <span>Based in Austin, TX</span>
            <button type="button" className="hero-scroll" onClick={() => onJump('work')}>
              Scroll to explore <span className="hero-scroll-arrow" aria-hidden>↓</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function SectionHeader({ eyebrow, title, count }) {
  return (
    <Reveal>
      <div className="section-header">
        <div className="sh-left">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        {count != null && (
          <div className="sh-right">
            <span className="sh-count">{String(count).padStart(2, '0')} projects</span>
          </div>
        )}
      </div>
    </Reveal>
  );
}

/* ============ Project modal ============ */
function ProjectModal({ p, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!p) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={p.title}>
      <article className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-media">
          <img src={p.image} alt={p.title} />
        </div>
        <div className="modal-body">
          <div className="modal-head">
            <span className="modal-num">{p.num}</span>
            <span className="modal-meta">{p.year} · {p.role}</span>
          </div>
          <h3 className="modal-title">{p.title}</h3>
          <p className="modal-tagline">{p.tagline}</p>
          <p className="modal-desc">{p.description}</p>
          {p.metrics && p.metrics.length > 0 && (
            <div className="modal-metrics">
              {p.metrics.map((m, i) => (
                <div key={i} className="metric">
                  <div className="metric-value">{m.value}</div>
                  <div className="metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          )}
          <ul className="project-tech">
            {p.tech.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <div className="modal-links">
            {p.links.map((l, i) => (
              <a key={i} className="btn btn-ghost btn-sm" href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label} <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

/* ============ Work gallery (mixed layouts) ============ */
/* Repeating pattern: full-width showcase, 2 image tiles, 3 mini cards, ... */
const WORK_LAYOUT = ['show', 'tile', 'tile', 'mini', 'mini', 'mini', 'show', 'tile', 'tile'];
const WORK_SPAN = { show: 6, tile: 3, mini: 2 };

function clickableCardProps(p, onOpen) {
  return {
    onClick: () => onOpen(p),
    onKeyDown: (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onOpen(p);
      }
    },
    role: 'button',
    tabIndex: 0,
    'aria-label': `Open ${p.title} details`,
  };
}

/* Full-width editorial row: text sits outside the image */
function ShowcaseCard({ p, reversed, onOpen }) {
  return (
    <article className={`show-card ${reversed ? 'reversed' : ''}`} {...clickableCardProps(p, onOpen)}>
      <span className="show-index" aria-hidden>{p.num}</span>
      <div className="show-text">
        <p className="bento-eyebrow">{p.role} · {p.year}</p>
        <h3 className="show-title">{p.title}</h3>
        <p className="show-tagline">{p.tagline}</p>
        <ul className="project-tech">
          {p.tech.slice(0, 5).map((t) => <li key={t}>{t}</li>)}
        </ul>
        <span className="bento-link">View details <span aria-hidden>→</span></span>
      </div>
      <div className="show-media">
        <img src={p.image} alt={p.title} loading="lazy" />
      </div>
    </article>
  );
}

/* Full-bleed image tile: title over a scrim, details slide up on hover */
function TileCard({ p, onOpen }) {
  return (
    <article className="tile-card" {...clickableCardProps(p, onOpen)}>
      <img src={p.image} alt={p.title} loading="lazy" />
      <span className="tile-index" aria-hidden>{p.num}</span>
      <div className="tile-overlay">
        <p className="bento-eyebrow">{p.role} · {p.year}</p>
        <h3 className="tile-title">{p.title}</h3>
        <div className="tile-reveal">
          <p className="tile-tagline">{p.tagline}</p>
          <span className="bento-link">View details <span aria-hidden>→</span></span>
        </div>
      </div>
    </article>
  );
}

/* Compact panel: text on top, image below */
function MiniCard({ p, onOpen }) {
  return (
    <article className="bento-card" {...clickableCardProps(p, onOpen)}>
      <div className="bento-text">
        <p className="bento-eyebrow">{p.role} · {p.year}</p>
        <h3 className="bento-title">{p.title}</h3>
        <p className="bento-tagline">{p.tagline}</p>
      </div>
      <div className="bento-media">
        <img src={p.image} alt={p.title} loading="lazy" />
      </div>
      <span className="bento-link">View details <span aria-hidden>→</span></span>
      <div className="bento-glow" aria-hidden />
    </article>
  );
}

function Work({ projects }) {
  const [selected, setSelected] = useState(null);
  const open = useCallback((p) => setSelected(p), []);
  const close = useCallback(() => setSelected(null), []);
  let showCount = 0;

  return (
    <section id="work" className="work">
      <SectionHeader eyebrow="Selected work" title="Things I've built" count={projects.length} />
      <div className="bento-grid">
        {projects.map((p, i) => {
          const kind = WORK_LAYOUT[i % WORK_LAYOUT.length];
          if (kind === 'show') showCount += 1;
          return (
            <div key={p.id} className={`bento-slot slot-${kind}`} style={{ '--span': WORK_SPAN[kind] }}>
              <Reveal className="bento-cell" delay={(i % 3) * 80}>
                {kind === 'show' && <ShowcaseCard p={p} reversed={showCount % 2 === 0} onOpen={open} />}
                {kind === 'tile' && <TileCard p={p} onOpen={open} />}
                {kind === 'mini' && <MiniCard p={p} onOpen={open} />}
              </Reveal>
            </div>
          );
        })}
      </div>
      {selected && <ProjectModal p={selected} onClose={close} />}
    </section>
  );
}

/* ============ Skills marquee ============ */
function MarqueeRow({ items, reverse, duration, big }) {
  // Repeat the list so the loop is seamless at any viewport width
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className={`marquee ${big ? 'marquee-big' : ''}`}>
      <div
        className={`marquee-track ${reverse ? 'reverse' : ''}`}
        style={{ '--marquee-duration': `${duration}s` }}
      >
        {loop.map((s, i) => {
          const meta = SKILL_META[s];
          const Icon = meta?.icon;
          return (
            <span key={`${s}-${i}`} className="marquee-item" aria-hidden={i >= items.length}>
              {Icon && <span className="marquee-icon" style={{ color: meta.color }}><Icon /></span>}
              {s}
            </span>
          );
        })}
      </div>
      <div className="marquee-fade marquee-fade-left" aria-hidden />
      <div className="marquee-fade marquee-fade-right" aria-hidden />
    </div>
  );
}

function Skills() {
  const byGroup = Object.fromEntries(SKILL_GROUPS.map((g) => [g.group, g.items]));
  const languages = byGroup['Languages'] ?? [];
  const frameworks = byGroup['Frameworks'] ?? [];
  const tools = byGroup['Tools & Platforms'] ?? [];

  return (
    <section id="skills" className="skills">
      <SectionHeader eyebrow="Toolbox" title="Skills & expertise" />
      <Reveal>
        <div className="marquee-stack">
          <MarqueeRow items={frameworks} duration={32} />
          {/* Languages: center row, biggest pills, slowest scroll */}
          <MarqueeRow items={languages} reverse big duration={68} />
          <MarqueeRow items={tools} duration={36} />
        </div>
      </Reveal>
    </section>
  );
}

/* ============ Experience ============ */
function OrgLogo({ logo, org }) {
  const [failed, setFailed] = useState(false);
  const initials = org
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');

  if (!logo || failed) {
    return <span className="exp-logo exp-logo-fallback" aria-hidden>{initials}</span>;
  }
  return (
    <span className="exp-logo">
      <img src={logo} alt={`${org} logo`} onError={() => setFailed(true)} />
    </span>
  );
}

const EXP_PREVIEW_COUNT = 6;

function Experience() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? EXPERIENCE : EXPERIENCE.slice(0, EXP_PREVIEW_COUNT);
  const hiddenCount = EXPERIENCE.length - EXP_PREVIEW_COUNT;

  return (
    <section id="experience" className="experience">
      <SectionHeader eyebrow="Experience" title="Where I've been" />
      <div className="exp-grid">
        {visible.map((e, i) => (
          <Reveal key={`${e.org}-${e.role}`} delay={(i % 2) * 90}>
            <article className="exp-card">
              <div className="exp-card-top">
                <OrgLogo logo={e.logo} org={e.org} />
                <div className="exp-card-id">
                  <h4>{e.role}</h4>
                  <span className="exp-org">{e.org}</span>
                </div>
                <span className="exp-when">{e.when}</span>
              </div>
              <p className="exp-detail">{e.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
      {hiddenCount > 0 && (
        <div className="exp-more">
          <button type="button" className="btn btn-ghost" onClick={() => setShowAll((v) => !v)}>
            {showAll ? 'Show less' : `Show all (+${hiddenCount})`}
            <span aria-hidden>{showAll ? '↑' : '↓'}</span>
          </button>
        </div>
      )}
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <Reveal>
          <div className="contact-hero">
            <p className="eyebrow">Get in touch</p>
            <h2 className="contact-title">
              Contact me<span className="accent-dot">.</span>
            </h2>
            <p className="contact-sub">
              Reach out for collaborations, questions, or just to say hi! I'm always open to connecting and chatting.
            </p>
          </div>
          <a className="contact-mega" href="mailto:jenna.snow.lee@gmail.com">
            <span className="cm-text">jenna.snow.lee@gmail.com</span>
            <span className="cm-arrow" aria-hidden>↗</span>
          </a>
          <div className="contact-pills">
            <a className="contact-pill" href="https://www.linkedin.com/in/jenna-lee-303993292/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a className="contact-pill" href="https://github.com/S8leeJ" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a className="contact-pill" href={resumePdf} target="_blank" rel="noopener noreferrer">
              <FaFileAlt /> Résumé
            </a>
          </div>
        </Reveal>
      </div>
      <footer className="footer">
        <span>© 2026 Jenna Lee</span>
        <span>Designed & built in Austin, TX</span>
        <span>v3.0</span>
      </footer>
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    document.documentElement.dataset.theme = 'ink';
  }, []);

  const jump = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <TopNav onJump={jump} />
      <main>
        <Hero onJump={jump} />
        <Work projects={PROJECTS} />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
