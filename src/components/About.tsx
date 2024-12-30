import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <h2 className={styles.aboutTitle}>About Me</h2>
        <p className={styles.aboutText}>
          Hi, I'm Talon Reeder, a passionate cloud engineer focused on creating scalable, secure, and cost-effective cloud infrastructure solutions. With a strong background in cloud technologies like AWS and Azure, I’m committed to helping businesses build innovative solutions that scale and thrive in the cloud.
        </p>
        <p className={styles.aboutText}>
          I have a deep understanding of cloud architecture, automation, and DevOps practices, and I'm constantly learning to stay ahead of the curve in the ever-evolving world of cloud computing.
        </p>
      </div>
    </section>
  );
};

export default About;
