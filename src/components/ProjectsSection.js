export default function ProjectsSection() {
  return (
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
  );
}
