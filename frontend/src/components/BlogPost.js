import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  // Sample content for posts
  const blogPosts = {
    "1": {
      title: "Understanding Cloud Computing",
      date: "November 20, 2024",
      content: "This is the full article about cloud computing..."
    },
    "2": {
      title: "How I Automated My Workflow with Terraform",
      date: "November 15, 2024",
      content: "This is the full article about Terraform automation..."
    },
    "3": {
      title: "Docker: Simplifying DevOps Pipelines",
      date: "November 10, 2024",
      content: "This is the full article about Docker and CI/CD..."
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return <p className="text-center text-red-500">Post not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-blue-800">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{post.date}</p>
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
};

export default BlogPost;
