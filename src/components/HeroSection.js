export default function HeroSection() {
  return (
    <header className="hero-section">
      <div className="hero-content">
        <h2> I Solve complex problems through simple</h2>
        <p className="hero-copy"> 
          I’m Tung, a UI/UX Designer dedicated to creating clean, accessible, and     
          high-performing interfaces. I specialize in turning user insights into visual
           stories that help businesses stand out in a crowded market.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="button primary">View Work</a>
        </div>
      </div>
      <div className="hero-card">
        <div className="hero-card__top">
          <span>Portfolio</span>
          <strong>UI/UX Designer</strong>
        </div>
        <div className="hero-card__stats">
          <div>
            <strong>Services</strong>
            <ul className="service-list">
              <li>User Research</li>
              <li>Wireframing</li>
              <li>High-Fidelity Design</li>
              <li>Design Systems</li>
            </ul>
          </div>
          <div>
            <strong>Tools</strong>
            <span>Figma, Adobe XD, Framer, Webflow</span>
          </div>
        </div>
        <div className="hero-card__footer">
          <small>Featured in product launches, landing pages, and brand systems.</small>
        </div>
      </div>
    </header>
  );
}
