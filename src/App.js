import './App.css';

function App() {
  return (
    <div className="app-shell">
      <header className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">Creative Portfolio</p>
          <h1>Hi, I’m Alex. I design digital products that help brands grow.</h1>
          <p className="hero-copy">
            I build modern web experiences for startups and ambitious companies.
            From branding to web development, I help businesses launch fast and
            stand out online.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button primary">View Work</a>
            <a href="#contact" className="button secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-card__top">
            <span>Portfolio</span>
            <strong>Available for freelance projects</strong>
          </div>
          <div className="hero-card__stats">
            <div>
              <strong>12+</strong>
              <span>Years experience</span>
            </div>
            <div>
              <strong>45+</strong>
              <span>Projects delivered</span>
            </div>
          </div>
          <div className="hero-card__footer">
            <small>Featured in product launches, landing pages, and brand systems.</small>
          </div>
        </div>
      </header>

      <main>
        <section className="info-section" id="about">
          <div className="section-header">
            <p className="eyebrow">About me</p>
            <h2>Designing memorable digital experiences.</h2>
          </div>
          <div className="about-grid">
            <article>
              <h3>What I do</h3>
              <p>
                I create interfaces, branding, and websites with a focus on
                clean visuals, smooth interactions, and measurable results.
              </p>
            </article>
            <article>
              <h3>How I work</h3>
              <p>
                I partner with product teams to clarify requirements, prototype
                quickly, and launch polished digital products on time.
              </p>
            </article>
            <article>
              <h3>Why it matters</h3>
              <p>
                Great design helps businesses build trust, convert customers,
                and grow their online presence.
              </p>
            </article>
          </div>
        </section>

        <section className="services-section">
          <div className="section-header">
            <p className="eyebrow">Services</p>
            <h2>Solutions for growing businesses.</h2>
          </div>
          <div className="service-cards">
            <article>
              <h3>Web Design</h3>
              <p>Beautiful, responsive designs built for engagement and clarity.</p>
            </article>
            <article>
              <h3>UI/UX</h3>
              <p>Human-centered interfaces that feel intuitive across devices.</p>
            </article>
            <article>
              <h3>Brand Strategy</h3>
              <p>Visual systems and messaging that make brands memorable.</p>
            </article>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-header">
            <p className="eyebrow">Work</p>
            <h2>Recent projects crafted with care.</h2>
          </div>
          <div className="project-grid">
            <article>
              <div className="project-tag">Web</div>
              <h3>Startup landing page</h3>
              <p>Fast-loading launch pages designed for conversion.</p>
            </article>
            <article>
              <div className="project-tag">Branding</div>
              <h3>Product identity</h3>
              <p>Complete brand systems with logos, color, and typography.</p>
            </article>
            <article>
              <div className="project-tag">App</div>
              <h3>Mobile interface</h3>
              <p>Accessible, polished mobile experiences for modern apps.</p>
            </article>
            <article>
              <div className="project-tag">E-commerce</div>
              <h3>Shop redesign</h3>
              <p>Product-focused e-commerce layouts with strong storytelling.</p>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-header">
            <p className="eyebrow">Let’s talk</p>
            <h2>Ready to start your next project?</h2>
          </div>
          <p className="contact-copy">
            I’m available for freelance work and project partnerships. Send a
            message and let’s build something great together.
          </p>
          <a href="mailto:hello@example.com" className="button primary">Say hello</a>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Alex Morgan</span>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
