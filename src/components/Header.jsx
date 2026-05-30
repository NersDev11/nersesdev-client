import Menu from "./Menu";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import ButtonLangChange from "./ButtonLangChange";
import ButtonThemeToggle from "./ButtonThemeToggle";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 70);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 flex justify-between  px-2 w-full ${isScrolled ? "bg-white text-black" : "bg-black text-stone-200"} md:pb-7`}
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
