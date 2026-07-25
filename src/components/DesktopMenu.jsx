function DesktopMenu() {
  return (
    <div className="hidden lg:flex lg:flex-row lg:justify-center lg:pt-5 lg:pl-13 xl:pl-11 2xl:pl-9">
      <div className="flex lg:gap-4 xl:gap-7 2xl:gap-10">
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
