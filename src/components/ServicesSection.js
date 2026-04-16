export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="section-header">
        <p className="eyebrow">Services</p>
        <h2>Solutions for growing businesses.</h2>
      </div>
      <div className="service-cards">
        <article>
          <img src="/img/publicinfo.png" alt="Web Design" className="service-image" />
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
  );
}
