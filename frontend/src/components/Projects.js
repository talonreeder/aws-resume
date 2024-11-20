import React, { useState } from 'react';

function Projects() {
  const [projectsToShow, setProjectsToShow] = useState(3);

  const projects = [
    {
      title: "Cloud Infrastructure Automation",
      description: "Automated cloud infrastructure provisioning with Terraform for AWS, Azure, and GCP. This project demonstrates best practices in using Infrastructure as Code (IaC) to create scalable and resilient architectures.",
      link: "#", // You can replace it with a real project link
    },
    {
      title: "CI/CD Pipeline with Jenkins",
      description: "Built a fully automated CI/CD pipeline using Jenkins, GitHub Actions, and Docker to deploy applications to AWS EC2 and Lambda, reducing deployment times significantly.",
      link: "#", // Replace with actual project link
    },
    {
      title: "Cloud Security Automation",
      description: "Developed automated cloud security checks using AWS Config, Azure Policy, and GCP Security Command Center to ensure best security practices are followed.",
      link: "#", // Replace with actual project link
    },
    {
      title: "Kubernetes for Multi-Cloud Deployments",
      description: "Set up a multi-cloud Kubernetes cluster using EKS (AWS), AKS (Azure), and GKE (GCP), demonstrating container orchestration and cloud interoperability.",
      link: "#", // Replace with actual project link
    },
    {
      title: "Serverless API with AWS Lambda",
      description: "Created a serverless REST API using AWS Lambda and API Gateway that scales automatically based on demand, significantly reducing server costs.",
      link: "#", // Replace with actual project link
    },
  ];

  const loadMoreProjects = () => {
    setProjectsToShow(projects.length);
  };

  return (
    <section className="py-20 bg-gray-100" id="projects">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800">Projects</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, projectsToShow).map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-600">{project.title}</h3>
              <p className="mt-4 text-gray-700">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block text-blue-600 hover:text-blue-800"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
        {projectsToShow < projects.length && (
          <button
            onClick={loadMoreProjects}
            className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            View All
          </button>
        )}
      </div>
    </section>
  );
}

export default Projects;
