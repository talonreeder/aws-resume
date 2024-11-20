import React, { useState } from 'react';

function Blog() {
  const [postsToShow, setPostsToShow] = useState(3);

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
    },
    {
      title: "The Importance of Cloud Security",
      date: "November 5, 2024",
      description: "Why cloud security is paramount and how to secure cloud environments effectively."
    },
    {
      title: "Mastering Kubernetes for the Cloud",
      date: "November 1, 2024",
      description: "A guide to mastering Kubernetes and deploying cloud-native applications with Kubernetes."
    }
  ];

  const loadMorePosts = () => {
    setPostsToShow(posts.length);
  };

  return (
    <section className="py-20 bg-gray-100" id="blog">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800">Blog</h2>
        <div className="mt-10 space-y-8">
          {posts.slice(0, postsToShow).map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-600">{post.title}</h3>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="mt-4 text-gray-700">{post.description}</p>
              <button
                className="mt-4 inline-block text-blue-600 hover:text-blue-800"
                onClick={() => alert('Display full post content here...')}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
        {postsToShow < posts.length && (
          <button
            onClick={loadMorePosts}
            className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            View All
          </button>
        )}
      </div>
    </section>
  );
}

export default Blog;
