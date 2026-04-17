export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="section-header">
        <p className="eyebrow">Full-stack development</p>
        <h2>Recent Projects</h2>
      </div>
      <div className="service-cards">
        <article>
          <img src="/img/publicinfo.png" alt="Web Design" className="service-image" />
          <h3>System Management</h3>
          <p>Streamlined content management systems designed for administrative efficiency</p>
        </article>
        <article>
          <img src="/img/Screenshot 2026-04-17 095512.png" alt="UI/UX" className="service-image" />
          <h3>UI/UX</h3>
          <p>User-centric student tracking interfaces with clear, actionable data visualization.</p>
        </article>
        <article>
          <img src="/img/student.png" alt="Brand Strategy" className="service-image" />
          <h3>Web Design</h3>
          <p>Comprehensive classroom dashboards providing a 360-degree view of academic life</p>
        </article>
      </div>
    </section>
  );
}
