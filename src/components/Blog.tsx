import styles from "./Blog.module.css";

const Blog: React.FC = () => {
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
    <section className={styles.blog}>
      <div className={styles.blogContent}>
        <h2 className={styles.blogTitle}>Latest Blog Posts</h2>
        <div className={styles.postList}>
          {posts.map((post, index) => (
            <div key={index} className={styles.postCard}>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.postDescription}>{post.description}</p>
              <a href={post.link} className={styles.postLink}>
                Read More
              </a>
            </div>
          ))}
        </div>
        <a href="/blog" className={styles.viewAllButton}>
          View All Blog Posts
        </a>
      </div>
    </section>
  );
};

export default Blog;
