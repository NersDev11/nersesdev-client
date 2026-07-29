import { useTheme } from "../context/useTheme";

import { CgSun, CgMoon } from "react-icons/cg";

function ButtonThemeToggle() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <button
      onClick={toggleTheme}
      className="hover:cursor-pointer w-8 h-8 mx-3 rounded-lg text-xl flex justify-center items-center text-black hover:text-gray-700 md:text-font-accent md:hover:text-white transition-colors duration-300 transition-transform md:hover:-rotate-20"
    >
      {theme === "light" ? <CgMoon /> : <CgSun />}
    </button>
  );
}

export default ButtonThemeToggle;
