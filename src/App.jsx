import "./App.css";
import AboutMe from "./components/AboutMe";
import AdditionalSkills from "./components/AdditionalSkills";
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
    </>
  );
}

export default App;
