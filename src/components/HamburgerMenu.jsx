function HamburgerMenu({ isMenuOpened, scrolled }) {
  return (
    <button
      className="h-13 w-13  flex justify-center items-center"
      aria-controls="primary-navigation"
      // aria-expanded="false"
    >
      <svg
        fill={`${scrolled ? "#222222" : "#fff"}`}
        className="h-13 w-13"
        viewBox="0 0 100 100"
      >
        <rect
          className={`transform-fill origin-center transition-all duration-300 ease-in ${isMenuOpened && "translate-y-5 rotate-45"}`}
          width="80"
          height="10"
          x="10"
          y="25"
          rx="5"
        ></rect>
        <rect
          className={`transform-fill origin-center transition-all duration-300 ease-in ${isMenuOpened && "opacity-0"}`}
          width="80"
          height="10"
          x="10"
          y="45"
          rx="5"
        ></rect>
        <rect
          className={`transform-fill origin-center transition-all duration-300 ease-in ${isMenuOpened && "-translate-y-5 -rotate-45"}`}
          width="80"
          height="10"
          x="10"
          y="65"
          rx="5"
        ></rect>
      </svg>
    </button>
  );
}

export default HamburgerMenu;
