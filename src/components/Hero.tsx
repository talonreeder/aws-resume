import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const phrases: string[] = [
    "I'm Talon Reeder",
    "I'm a Cloud Engineer",
    "I'm a Software Engineer",
    "I'm a DevOps Engineer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          {phrases[index]}
        </h1>
        <p className={styles.heroSubtitle}>Building the future of cloud computing.</p>
        <button className={styles.heroButton}>See My Projects</button>
      </div>
    </section>
  );
};

export default Hero;
