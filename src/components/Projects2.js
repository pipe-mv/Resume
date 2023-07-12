import { useState } from "react";
import Modal from "./Modal";
import ProjectsDb from "./ProjectsDB";

const Projects2 = () => {
  const [modalOpener, setModalOpener] = useState("");
  const [project, setProject] = useState("");

  const openModal = (id) => {
    setModalOpener(id);
    let selectedProject = ProjectsDb.filter((project) => project.id === id);
    setProject(selectedProject);
  };

  const closeModal = () => {
    setModalOpener("");
  };

  return (
    <>
      <section id="projects" className="portfolio section">
        <div className="container">
          <h2 className="section-title">My projects</h2>
          {ProjectsDb.map((project, index) => (
            <a
              href={`#project-${project.id}`}
              className="portfolio-card"
              key={index}
              onClick={() => openModal(project.id)}
              db={ProjectsDb}
            >
              <img src={project.image} alt={`project ${project.id}`} />
              <aside className="portfolio-card-info">
                <div>
                  <h3>{project.name}</h3>
                  <br />
                  <p>{project.description}</p>
                  <br />
                  <p>Click to see more!</p>
                </div>
              </aside>
            </a>
          ))}
        </div>
      </section>
      {modalOpener && <Modal project={project[0]} closeModal={closeModal} />}
    </>
  );
};

export default Projects2;
