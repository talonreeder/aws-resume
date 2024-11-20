function Projects() {
    return (
      <section id="projects" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-800">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* AWS CI/CD Pipeline */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">AWS CI/CD Pipeline</h3>
            <p className="text-gray-700 mt-2">Designed and implemented a CI/CD pipeline using Terraform, Docker, Jenkins, and Kubernetes on AWS for automated build, test, and deployment.</p>
            <p className="text-gray-500 mt-4">Tech Stack: Terraform, Docker, Jenkins, Kubernetes, AWS</p>
            <a href="https://github.com/talonreeder/aws-cicd-pipeline" target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 inline-block">View on GitHub</a>
          </div>
  
          {/* Azure Scalable Infrastructure Solution */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">Azure Scalable Infrastructure Solution</h3>
            <p className="text-gray-700 mt-2">Deployed a scalable infrastructure on Azure with AKS, Azure Functions, and Azure Batch for a robust microservices architecture and data processing solution.</p>
            <p className="text-gray-500 mt-4">Tech Stack: Azure, AKS, Azure Functions, Azure Batch</p>
            <a href="https://github.com/talonreeder/aws-cicd-pipeline" target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 inline-block">View on GitHub</a>

          </div>
  
          {/* CloudUploader CLI */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">CloudUploader CLI</h3>
            <p className="text-gray-700 mt-2">Developed a bash-based CLI tool for concurrent file uploads to AWS S3, Azure Blob Storage, and GCP Cloud Storage.</p>
            <p className="text-gray-500 mt-4">Tech Stack: Bash, AWS S3, Azure Blob Storage, GCP Cloud Storage</p>
            <a href="https://github.com/talonreeder/clouduploader-cli" target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 inline-block">View on GitHub</a>
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;
  