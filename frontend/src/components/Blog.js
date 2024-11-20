import React from 'react';

function Blog() {
  // Example blog post data
  const posts = [
    {
      title: "Understanding Cloud Computing",
      date: "November 20, 2024",
      description: "A deep dive into cloud technologies, comparing AWS, Azure, and Google Cloud, and their use cases."
    },
    {
      title: "How I Automated My Workflow with Terraform",
      date: "November 15, 2024",
      description: "Learn how I used Terraform to automate cloud infrastructure provisioning and deployment, saving time and improving consistency."
    },
    {
      title: "Docker: Simplifying DevOps Pipelines",
      date: "November 10, 2024",
      description: "Exploring Docker’s role in containerization and how it fits into modern CI/CD workflows for faster application delivery."
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800">Blog</h2>
        <div className="mt-10 space-y-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-600">{post.title}</h3>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="mt-4 text-gray-700">{post.description}</p>
              <a href="#" className="mt-4 inline-block text-blue-600 hover:text-blue-800">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
