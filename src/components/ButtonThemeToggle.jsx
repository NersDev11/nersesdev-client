function ButtonThemeToggle() {
  return (
    <button className="hover:cursor-pointer">
      <span className="dark:hidden">🌙</span>
      <span className="hidden dark:block">☀</span>
    </button>
  );
}

export default ButtonThemeToggle;
