// import logo from "../assets/nlogo.png";
import logoLight from "../assets/logolight.png";
import logoDark from "../assets/logodark.png";

// import logo2 from "../assets/nlogo2.png";

function Logo({ scrolled }) {
  const logo = scrolled ? logoDark : logoLight;

  return (
    <a href="#home">
      <img
        src={logo}
        alt=""
        className="w-[224px] h-[45px] md:w-[269px] md:h-[53px] lg:w-[292px] lg:h-[58px] mt-4 "
      />
    </a>
  );
}

export default Logo;
