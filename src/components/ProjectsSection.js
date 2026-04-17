import { useEffect, useState } from "react";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      tag: "Web",
      title: "System Management",
      description: "Fast-loading launch pages designed for conversion.",
      image: "/img/publicinfo.png"
    },
    {
      id: 2,
      tag: "web",
      title: "UI/UX",
      description: "Accessible, polished mobile experiences for modern apps.",
      image: "/img/Screenshot 2026-04-17 095512.png"
    },
    {
      id: 3,
      tag: "Web",
      title: "Web Design",
      description: "Layout optimized for business processes",
      image: "/img/student.png"
    }
  ];

  useEffect(() => {
    if (!selectedProject) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);


  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <p className="eyebrow">Full-stack development</p>
        <h2>Recent Projects</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.id}>
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
              <button
                type="button"
                className="project-detail-button"
                onClick={() => setSelectedProject(project)}
              >
                Xem chi tiết
              </button>
            </div>
            <div className="project-tag">{project.tag}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div
          className="project-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Chi tiet du an ${selectedProject.title}`}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal__content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal__close"
              aria-label="Dong xem chi tiet"
              onClick={() => setSelectedProject(null)}
            >
              x
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} className="project-modal__image" />
            <div className="project-modal__meta">
              <span className="project-tag">{selectedProject.tag}</span>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
