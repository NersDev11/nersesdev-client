// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
/////
import { ThemeProvider } from "./context/ThemeProvider";
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
import SpecialMessage from "./components/SpecialMessage";

import Modal from "./components/Modal";

function App() {
  const [showSpecialMessage, setShowSpecialMessage] = useState(true);
  // const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function getCountry() {
      try {
        const res = await fetch("http://127.0.0.1:3000/api/country");
        if (!res.ok) throw new Error("Network error");

        const data = await res.json();

        console.log(data);

        if (data.country?.toLowerCase() === "russia")
          setShowSpecialMessage(true);
      } catch (error) {
        console.log(error);
      }
    }

    getCountry();
  }, []);

  return (
    <ThemeProvider>
      <>
        <Header>
          <Logo />
          <Menu />
        </Header>
        <main className="text-font-primary dark:text-font-primary">
          <Home />
          <Skills />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
        <ButtonUp />

        <SpecialMessage
          setShowSpecialMessage={setShowSpecialMessage}
          showSpecialMessage={showSpecialMessage}
        />
        {/* 
        <Modal isOpen={isOpen} onClose={setIsOpen}>
          <div>aajjajajajaja</div>
        </Modal> */}
      </>
    </ThemeProvider>
  );
}

export default App;
