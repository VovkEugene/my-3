import "./App.css";
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
      </main>
    </>
  );
}

export default App;
