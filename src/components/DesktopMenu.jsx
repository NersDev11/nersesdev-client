function DesktopMenu() {
  return (
    <div className="hidden md:flex md:flex-row md:gap-10 md:justify-center md:pt-5">
      <div className="flex gap-6">
        <p>
          <a href="#home">home</a>
        </p>
        <p>
          <a href="#skills">skills</a>
        </p>
        <p>
          <a href="#projects">projects</a>
        </p>
        <p>
          <a href="#about">about</a>
        </p>
        <p>
          <a href="#contact">contact</a>
        </p>
      </div>
    </div>
  );
}

export default DesktopMenu;
