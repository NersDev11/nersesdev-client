import { useRef, useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
// import MobileMenu from "./MobileMenu2";
import HamburgerMenu from "./HamburgerMenu";

function Menu({ scrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  return (
    <div className="uppercase font-semibold py-2 " ref={menuRef}>
      <button
        className="cursor-pointer lg:hidden rounded mb-2  landscape:max-lg:p-0 "
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <HamburgerMenu
          isMenuOpened={isMenuOpen}
          scrolled={scrolled}
          // setIsMenuOpened={setIsMenuOpen}
        />
      </button>
      {isMenuOpen && (
        <MobileMenu
          open={isMenuOpen}
          setOpen={setIsMenuOpen}
          menuRef={menuRef}
        />
      )}
      <DesktopMenu />
    </div>
  );
}

export default Menu;
