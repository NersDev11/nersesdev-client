import About from "./components/About";
import ButtonUp from "./components/ButtonUp";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header>
        <Logo />
        <Menu />
      </Header>
      <main className="text-stone-200 pt-22">
        <Home />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <ButtonUp />
    </>
  );
}

export default App;
