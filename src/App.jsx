import "./App.css";
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
      </main>
    </>
  );
}

export default App;
