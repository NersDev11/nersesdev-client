import { useTheme } from "../context/useTheme";

import { CgSun, CgMoon } from "react-icons/cg";

function ButtonThemeToggle({ scrolled }) {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <button
      onClick={toggleTheme}
      className={`hover:cursor-pointer w-8 h-8 mx-3 rounded-lg text-xl flex justify-center items-center text-black  ${scrolled ? "lg:text-black lg:hover:text-gray-700" : "lg:text-font-accent lg:hover:text-white lg:dark:hover:text-white"}   transition-all duration-300  lg:hover:-rotate-20`}
    >
      {theme === "light" ? <CgMoon /> : <CgSun />}
    </button>
  );
}

export default ButtonThemeToggle;
