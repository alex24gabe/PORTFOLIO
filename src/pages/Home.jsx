import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home({ darkMode, setDarkMode }) {

  return (

    <div>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero darkMode={darkMode} />

      <About darkMode={darkMode} />

      <Skills darkMode={darkMode} />

      <Projects darkMode={darkMode} />

      <Contact darkMode={darkMode} />

      <Footer darkMode={darkMode} />

    </div>

  );
}

export default Home;