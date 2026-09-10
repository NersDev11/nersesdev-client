// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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

function App() {
  const [showSpecialMessage, setShowSpecialMessage] = useState(false);

  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    async function getCountry() {
      try {
        const res = await fetch("http://127.0.0.1:3000/api/country");
        if (!res.ok) throw new Error("Network error");

        const data = await res.json();

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
      </>
    </ThemeProvider>
  );
}

export default App;
