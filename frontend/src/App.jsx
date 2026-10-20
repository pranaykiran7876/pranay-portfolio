import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  Menu,
  X
} from 'lucide-react';
const projects = [
  {
    number: '01',
    title: 'Project One',
    type: 'WEB DEVELOPMENT',
    description: 'A clean, thoughtful web experience built to solve a real problem. Replace this with your project summary.',
    stack: ['React', 'CSS', 'API'],
    link: 'https://github.com/',
    className: 'project-card--one',
  },
  {
    number: '02',
    title: 'Project Two',
    type: 'JAVA • BACKEND',
    description: 'A backend-focused project with structured APIs, persistence, and a clear focus on reliability.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL'],
    link: 'https://github.com/',
    className: 'project-card--two',
  },
  {
    number: '03',
    title: 'Creative Experiment',
    type: 'DESIGN • EXPERIMENTS',
    description: 'A space for visual explorations, small ideas, and experiments that bring code and creativity together.',
    stack: ['Design', 'Prototyping', 'Motion'],
    link: 'https://github.com/',
    className: 'project-card--three',
  },
];

const skills = ['Java', 'Spring Boot', 'React', 'JavaScript', 'HTML & CSS', 'PostgreSQL', 'Git & GitHub', 'UI Design'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  async function submitContact(event) {
    event.preventDefault();
    setSending(true);
    setStatus('');
    try {
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        const error = await response.text();
        throw new Error(error || 'Could not send your message.');
      }
      setStatus('Thanks — your message has been saved. I’ll be in touch.');
      setForm({ name: '', email: '', message: '' });
   } catch (error) {
  console.error('Contact form error:', error);
  setStatus(
    error.message === 'Failed to fetch'
      ? 'Could not connect. Check that Spring Boot is running.'
      : error.message || 'Something went wrong. Please try again.'
  );
} finally {
      setSending(false);
    }
  }

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Pranay home">PKS<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav nav--open' : 'nav'}>
          {[['About', '#about'], ['Work', '#work'], ['Skills', '#skills'], ['Contact', '#contact']].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-meta"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES <span className="meta-year">PORTFOLIO / 2026</span></div>
          <p className="eyebrow">DEVELOPER BY LOGIC. CREATIVE BY NATURE.</p>
          <h1>PRANAY KIRAN<br /><span>SEEMALA</span><i>.</i></h1>
          <div className="hero-bottom">
            <p className="hero-copy">I build useful digital experiences with clean code, curious thinking, and an eye for the details.</p>
            <a className="round-link" href="#about" aria-label="Scroll to about"><ArrowDownRight size={26} /></a>
          </div>
          <div className="hero-rule"><span>WEB DEVELOPMENT</span><span>CREATIVE THINKING</span><span>ALWAYS LEARNING</span></div>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="section-label"><span>01 / ABOUT</span><span>A LITTLE INTRODUCTION</span></div>
          <div className="about-grid">
            <h2>Curiosity turns<br />into <em>creation.</em></h2>
            <div className="about-text">
              <p>I’m Pranay Kiran Seemala, a developer and creative who enjoys turning ideas into clear, practical digital experiences.</p>
              <p>I’m building my skills across frontend development, Java backend engineering, and databases. I believe good work balances function, clarity, and character.</p>
              <a className="text-link" href="#contact">Get to know me <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="work section-wrap section-block" id="work">
          <div className="section-label"><span>02 / SELECTED WORK</span><span>A FEW THINGS I’M BUILDING</span></div>
          <div className="section-heading"><h2>Ideas, made <em>real.</em></h2><p>Personal projects are where I learn by doing. These cards are placeholders — add your actual work as it grows.</p></div>
          <div className="projects">
            {projects.map((project) => (
              <article className={`project-card ${project.className}`} key={project.number}>
                <div className="project-art"><span className="project-index">{project.number} / 03</span><div className="art-shape" /><span className="art-caption">A STUDY IN POSSIBILITY</span></div>
                <div className="project-info">
                  <div className="project-type">{project.type}</div>
                  <div className="project-title-row"><h3>{project.title}</h3><a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ArrowUpRight size={20} /></a></div>
                  <p>{project.description}</p>
                  <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section-wrap section-block" id="skills">
          <div className="section-label"><span>03 / TOOLKIT</span><span>TOOLS I USE & EXPLORE</span></div>
          <div className="skills-grid"><h2>Learn. Build.<br /><em>Repeat.</em></h2><div className="skill-list">{skills.map((skill, index) => <div className="skill-item" key={skill}><span>0{index + 1}</span><strong>{skill}</strong><ArrowUpRight size={16} /></div>)}</div></div>
        </section>

        <section className="contact section-wrap section-block" id="contact">
          <div className="section-label"><span>04 / CONTACT</span><span>HAVE SOMETHING IN MIND?</span></div>
          <div className="contact-grid">
            <div><p className="eyebrow">LET’S MAKE SOMETHING GOOD</p><h2>Have an idea?<br /><em>Let’s talk.</em></h2><p className="contact-copy">For collaborations, opportunities, or a friendly hello — send me a note.</p><a className="email-link" href="mailto:hello@example.com"><Mail size={17} /> hello@example.com <ArrowUpRight size={15} /></a><p className="small-note">Replace this sample email with your real contact address.</p></div>
            <form className="contact-form" onSubmit={submitContact}>
              <label>Your name<input name="name" value={form.name} onChange={update} required minLength="2" placeholder="Name" /></label>
              <label>Your email<input name="email" type="email" value={form.email} onChange={update} required placeholder="you@example.com" /></label>
              <label>Your message<textarea name="message" value={form.message} onChange={update} required minLength="5" rows="4" placeholder="Tell me a little about it..." /></label>
              <button className="submit-button" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send message'} <ArrowUpRight size={17} /></button>
              {status && <p className="form-status" role="status">{status}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="wordmark" href="#home">PKS<span>.</span></a><span>DESIGNED & BUILT WITH INTENTION.</span><div className="socials"><a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noreferrer">in</a></div><span>© 2026 PRANAY KIRAN SEEMALA</span></footer>
    </>
  );
}

export default App;
