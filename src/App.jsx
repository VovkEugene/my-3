import "./App.css";
import AboutMe from "./components/AboutMe";
import AdditionalSkills from "./components/AdditionalSkills";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Technologies />
        <AdditionalSkills />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
}

export default App;
