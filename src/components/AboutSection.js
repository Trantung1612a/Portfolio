export default function AboutSection() {
  return (
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
  );
}
