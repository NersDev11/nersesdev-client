import { useRef, useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  return (
    <div className=" uppercase font-semibold pt-2" ref={menuRef}>
      <button
        className="cursor-pointer lg:hidden border rounded my-5 mr-1 py-3 px-4 "
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "-" : "+"}
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
