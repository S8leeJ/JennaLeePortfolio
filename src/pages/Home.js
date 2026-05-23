import { useState, useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';

import PROJECTS from '../data/projects.json';
import EXPERIENCE from '../data/experience.json';
import SKILL_GROUPS from '../data/skills.json';

const resumePdf = '/resume.pdf';

const JOURNEY_STOPS = [
  { id: 'top', label: 'Start' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

function JourneyPath({ onJump }) {
  const [active, setActive] = useState('top');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    JOURNEY_STOPS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const activeIndex = Math.max(
    0,
    JOURNEY_STOPS.findIndex((s) => s.id === active)
  );
  const progress = JOURNEY_STOPS.length > 1
    ? (activeIndex / (JOURNEY_STOPS.length - 1)) * 100
    : 0;

  return (
    <nav className="journey" aria-label="Page sections">
      <ol className="journey-path" style={{ '--journey-progress': `${progress}%` }}>
        {JOURNEY_STOPS.map((s) => {
          const isActive = s.id === active;
          const idx = JOURNEY_STOPS.findIndex((x) => x.id === s.id);
          const isPast = idx < activeIndex;
          return (
            <li
              key={s.id}
              className={`journey-node ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}
            >
              <button type="button" onClick={() => onJump(s.id)} aria-label={`Jump to ${s.label}`}>
                <span className="journey-dot" aria-hidden />
                <span className="journey-label">{s.label}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero-aurora" aria-hidden>
        <div className="aurora aurora-a" />
        <div className="aurora aurora-b" />
        <div className="aurora aurora-c" />
        <div className="aurora-grain" />
      </div>
      <div className="hero-title-block">
        <p className="eyebrow">Software Engineer · Designer</p>
        <h1 className="hero-name">
          <span className="hero-name-last">Jenna</span>
          <span className="hero-name-last">Lee</span>
        </h1>
        <p className="hero-sub">
          Hey, I'm Jenna, it is nice to meet you! I am currently studying Computer Science at the University of Texas at Austin.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#work">See selected work <span aria-hidden>→</span></a>
          <a className="btn btn-ghost" href="#contact">Get in touch</a>
        </div>
      </div>
      <div className="hero-skills">
        {SKILL_GROUPS.map((g) => (
          <div key={g.group} className="hero-skill-group">
            <div className="hero-skills-label">{g.group}</div>
            <ul className="hero-skills-list">
              {g.items.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </header>
  );
}

function SectionHeader({ eyebrow, title, count }) {
  return (
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
  );
}

function ProjectRow({ p, idx }) {
  const reversed = idx % 2 === 1;
  return (
    <article className={`project-row ${reversed ? 'reversed' : ''}`}>
      <div className="project-media">
        <div className="media-frame">
          <img src={p.image} alt={p.title} loading="lazy" />
        </div>
        <div className="media-meta">
          <span>{p.year}</span>
          <span>{p.role}</span>
        </div>
      </div>
      <div className="project-info">
        <div className="project-num">{p.num}</div>
        <h3 className="project-title">{p.title}</h3>
        <p className="project-tagline">{p.tagline}</p>
        <p className="project-desc">{p.description}</p>
        {p.metrics && (
          <div className="project-metrics">
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
        <div className="project-links">
          {p.links.map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label} <span aria-hidden>↗</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

function CompactCard({ p }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className={`compact-card ${expanded ? 'expanded' : ''}`}>
      <div className="compact-media">
        <img src={p.image} alt={p.title} loading="lazy" />
      </div>
      <div className="compact-body">
        <div className="compact-head">
          <span className="compact-num">{p.num}</span>
          <span className="compact-year">{p.year}</span>
        </div>
        <h4>{p.title}</h4>
        <p>{p.tagline}</p>
        {expanded && (
          <div className="compact-details">
            {p.description && <p className="compact-desc">{p.description}</p>}
            {p.metrics && p.metrics.length > 0 && (
              <div className="compact-metrics">
                {p.metrics.map((m, i) => (
                  <div key={i} className="compact-metric">
                    <span className="compact-metric-value">{m.value}</span>
                    <span className="compact-metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        <ul className="compact-tech">
          {(expanded ? p.tech : p.tech.slice(0, 3)).map((t) => <li key={t}>{t}</li>)}
          {!expanded && p.tech.length > 3 && <li>+{p.tech.length - 3}</li>}
        </ul>
        <div className="compact-actions">
          <button
            type="button"
            className="compact-toggle"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? 'Less' : 'More'}
            <span className={`compact-chev ${expanded ? 'open' : ''}`} aria-hidden>↓</span>
          </button>
          <div className="compact-links">
            {p.links.map((l, i) => (
              <a key={i} href={l.href} target="_blank" rel="noopener noreferrer">{l.label} ↗</a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function Work({ projects }) {
  const featured = projects.slice(0, 4);
  const more = projects.slice(4);
  return (
    <section id="work" className="work">
      <SectionHeader eyebrow="Selected work" title="Things I've built." />
      <div className="project-list">
        {featured.map((p, i) => <ProjectRow key={p.id} p={p} idx={i} />)}
      </div>
      {more.length > 0 && (
        <div className="project-grid">
          {more.map((p) => <CompactCard key={p.id} p={p} />)}
        </div>
      )}
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="experience">
      <SectionHeader eyebrow="Experience" title="Where I've been." />
      <ol className="exp-list">
        {EXPERIENCE.map((e, i) => (
          <li key={i} className="exp-item">
            <div className="exp-when">{e.when}</div>
            <div className="exp-body">
              <div className="exp-head">
                <h4>{e.role}</h4>
                <span className="exp-org">{e.org}</span>
              </div>
              <p>{e.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <SectionHeader eyebrow="Get in touch" title="Contact." />
        <p className="contact-sub">
          Reach out for collaborations, questions, or just to say hi! I'm always open to connecting and chatting.
        </p>
        <div className="contact-grid">
          <a href="mailto:jenna.snow.lee@gmail.com" className="contact-card">
            <span className="cc-icon"><FaEnvelope /></span>
            <span className="cc-key">Email</span>
            <span className="cc-val">jenna.snow.lee@gmail.com</span>
            <span className="cc-arrow">↗</span>
          </a>
          <a href="https://www.linkedin.com/in/jenna-lee-303993292/" target="_blank" rel="noopener noreferrer" className="contact-card">
            <span className="cc-icon"><FaLinkedin /></span>
            <span className="cc-key">LinkedIn</span>
            <span className="cc-val">jenna-lee</span>
            <span className="cc-arrow">↗</span>
          </a>
          <a href="https://github.com/S8leeJ" target="_blank" rel="noopener noreferrer" className="contact-card">
            <span className="cc-icon"><FaGithub /></span>
            <span className="cc-key">GitHub</span>
            <span className="cc-val">S8leeJ</span>
            <span className="cc-arrow">↗</span>
          </a>
          <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="contact-card">
            <span className="cc-icon"><FaFileAlt /></span>
            <span className="cc-key">Résumé</span>
            <span className="cc-val">PDF · 2026</span>
            <span className="cc-arrow">↗</span>
          </a>
        </div>
      </div>
      <footer className="footer">
        <span>© 2026 Jenna Lee</span>
        <span>Designed & built in Austin, TX</span>
        <span>v2.0</span>
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
      <JourneyPath onJump={jump} />
      <main>
        <Hero />
        <Work projects={PROJECTS} />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
