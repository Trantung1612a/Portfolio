export default function HeroSection() {
  return (
    <header className="hero-section">
      <div className="hero-content">
        <p className="eyebrow">Creative Portfolio</p>
        <h1>Hi, I'm Alex. I design digital products that help brands grow.</h1>
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
  );
}
