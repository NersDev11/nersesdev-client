import About from "./components/About";
import ButtonUp from "./components/ButtonUp";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Home from "./components/Home";
import Home from "./components/Home";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ThemeProvider } from "./context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <>
        <Header>
          <Logo />
          <Menu />
        </Header>
        <main className=" dark:text-font-primary bg-bg-primary dark:bg-bg-primary">
          <Home />
          <Skills />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
        <ButtonUp />
      </>
    </ThemeProvider>
  );
}

export default App;
