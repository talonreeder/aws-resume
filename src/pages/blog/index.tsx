import styles from "./BlogPage.module.css";

const BlogPage: React.FC = () => {
  const posts = [
    {
      title: "Getting Started with Terraform",
      description: "Learn how to use Terraform for infrastructure automation.",
      link: "/blog/getting-started-with-terraform",
    },
    {
      title: "Building Resilient Cloud Architectures",
      description: "Tips for designing fault-tolerant cloud solutions.",
      link: "/blog/building-resilient-cloud-architectures",
    },
    {
      title: "Understanding Serverless Computing",
      description: "What is serverless, and how can you benefit from it?",
      link: "/blog/understanding-serverless-computing",
    },
  ];

  return (
    <div className={styles.blogPage}>
      <h1 className={styles.title}>All Blog Posts</h1>
      <div className={styles.postsContainer}>
        {posts.map((post, index) => (
          <div key={index} className={styles.postCard}>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.postDescription}>{post.description}</p>
            <a href={post.link} className={styles.readMore}>
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
