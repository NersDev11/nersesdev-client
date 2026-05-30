import { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="md:align-self-center">
      <button
        className="cursor-pointer md:hidden border rounded my-5 mr-1 px-4 py-3"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "-" : "+"}
      </button>
      {isMenuOpen && <MobileMenu />}
      <DesktopMenu />
    </div>
  );
}

export default Menu;
