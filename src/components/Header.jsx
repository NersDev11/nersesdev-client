import Menu from "./Menu";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import ButtonLangChange from "./ButtonLangChange";
import ButtonThemeToggle from "./ButtonThemeToggle";
// import { useTheme } from "../context/useTheme";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  // const { theme } = useTheme();

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 70);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <header
    //   className={`transition-colors duration-300 fixed top-0 left-0 z-50 flex justify-between md:pb-7 px-2 w-full ${isScrolled ? (theme === "light" ? "bg-white" : "bg-stone-300") : theme === "light" ? "bg-transparent text-black" : "bg-transparent text-stone-200"}`}
    // >
    <header
      className={`fixed top-0 left-0 z-50 flex justify-between md:pb-7 px-2 w-full ${isScrolled ? " dark:bg-bg-header bg-bg-header text-black" : "bg-transparent dark:bg-transparent text-font-primary dark:text-font-primary"} transition-colors duration-500`}
    >
      <Logo scrolled={isScrolled} />
      <Menu scrolled={isScrolled} />
      <div className="hidden md:block">
        <ButtonLangChange />
        <ButtonThemeToggle />
      </div>
    </header>
  );
}

export default Header;
