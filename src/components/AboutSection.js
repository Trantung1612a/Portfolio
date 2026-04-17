import project1Preview from "../assets/project1-preview.png";
import project2Preview from "../assets/project2-preview.png";
import project3Preview from "../assets/project3-preview.png";

export default function AboutSection() {
  const deployedApps = [ 
  {
    id: 1,
    title: "Project 3 - InvestGenZ",
    description: "A micro-investment app for Gen Z featuring onboarding, a financial dashboard, and micro-investing management.",
    image: project3Preview,
    liveUrl: "https://project3-g3yp.vercel.app/"
  },
  {
    id: 2,
    title: "Project 2 - CodeMaster",
    description: "A coding learning platform with gamification, interactive lessons, and progress tracking.",
    image: project2Preview,
    liveUrl: "https://project2-jet-five.vercel.app/"
  },
  {
    id: 3,
    title: "Project 1 - FarmOS Dashboard",
    description: "A smart farm management system with analytics tabs, alerts, and sensor monitoring.",
    image: project1Preview,
    liveUrl: "https://project1-ruby-gamma.vercel.app/"
  }
];

  return (
    <section className="info-section" id="about">
      <div className="section-header">
      </div>
   
      <div className="section-header about-apps-header">
        <p className="eyebrow">DEMO LAYOUTS</p>
        <h2>By simple React</h2>
      </div>
      <div className="about-app-grid">
        {deployedApps.map((app) => (
          <article key={app.id} className="about-app-card">
            <img src={app.image} alt={`Preview ${app.title}`} className="about-app-image" loading="lazy" />
            <h3>{app.title}</h3>
            <p>{app.description}</p>
            <a className="project-live-link" href={app.liveUrl} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
