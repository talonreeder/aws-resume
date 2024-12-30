import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Blog from "../components/Blog";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Blog />
      {/* Additional sections will go here */}
    </div>
  );
};

export default Home;
