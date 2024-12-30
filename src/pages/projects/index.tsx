import styles from "./ProjectsPage.module.css";

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      title: "Terraform Automation with Terrafuse",
      description: "Automating infrastructure provisioning with Terraform.",
      link: "/projects/terraform-automation-with-terrafuse",
    },
    {
      title: "Cloud Resume Challenge",
      description: "Build a cloud-based resume with AWS services.",
      link: "/projects/cloud-resume-challenge",
    },
    {
      title: "Multi-Cloud Deployment Manager",
      description: "Manage deployments across AWS, Azure, and GCP.",
      link: "/projects/multi-cloud-deployment-manager",
    },
  ];

  return (
    <div className={styles.projectsPage}>
      <h1 className={styles.title}>All Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectDescription}>{project.description}</p>
            <a href={project.link} className={styles.readMore}>
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
