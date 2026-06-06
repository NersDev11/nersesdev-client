import logo from "../assets/nlogo.png";
// import logo2 from "../assets/nlogo2.png";

function Logo() {
  return (
    // <div className="uppercase text-4xl font-semibold pt-5 pb-1">jajja</div>
    <img
      src={logo}
      alt=""
      className="w-[224px] h-[45px] md:w-[269px] md:h-[53px] lg:w-[292px] lg:h-[58px] mt-2 "
    />
  );
}

export default Logo;
