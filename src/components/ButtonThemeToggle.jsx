import { useTheme } from "../context/useTheme";

function ButtonThemeToggle() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <button onClick={toggleTheme} className="hover:cursor-pointer mt-1 mx-3">
      {theme === "light" ? "🌙" : " ☀"}
    </button>
  );
}

export default ButtonThemeToggle;
