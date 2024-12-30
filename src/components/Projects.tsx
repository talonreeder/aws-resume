import styles from "./Projects.module.css";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Terrafuse",
      description: "An advanced Terraform automation tool for multi-cloud environments.",
      link: "/projects/terrafuse",
    },
    {
      title: "Cloud Cost Optimizer",
      description: "An intelligent tool to analyze and reduce cloud expenses.",
      link: "/projects/cloud-cost-optimizer",
    },
    {
      title: "Hybrid Cloud Networking Lab",
      description: "A comprehensive lab showcasing enterprise-grade networking in hybrid cloud setups.",
      link: "/projects/hybrid-cloud-networking-lab",
    },
  ];

  return (
    <section className={styles.projects}>
      <div className={styles.projectsContent}>
        <h2 className={styles.projectsTitle}>Featured Projects</h2>
        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <a href={project.link} className={styles.projectLink}>
                View Project
              </a>
            </div>
          ))}
        </div>
        <a href="/projects" className={styles.viewAllButton}>
          View All Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;
