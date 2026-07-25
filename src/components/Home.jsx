import { TypeAnimation } from "react-type-animation";
import heroImg from "../assets/hero7.png";

function Home() {
  return (
    <section
      id="home"
      className="relative flex flex-col lg:flex-row h-[1100px] lg:h-[700px] xl:h-[800px] 2xl:h-[850px] 3xl:h-[900px] overflow-hidden"
    >
      <div className="bg-bg-primary dark:bg-bg-primary h-[800px] lg:h-full lg:w-5/8 ">
        <div className="lg:pl-20 xl:pl-25 xl:mt-20">
          <h1 className="text-5xl lg:text-6xl 2xl:text-7xl mt-60 mb-8 lg:-ml-50 pb-2 text-center overflow-hidden">
            Hey, I'm Nerses)
          </h1>
          <p className="text-4xl xl:text-5xl 2xl:text-6xl text-center lg:-ml-40 py-1  overflow-hidden">
            I'm a{"  "}
            <span className="inline-block align-text-bottom bg-typing-animation-bg dark:bg-typing-animation-bg rounded-sm text-typing-animation-font dark:text-typing-animation-font text-center h-12 lg:h-13 xl:h-16 2xl:h-18 min-w-44 md:min-w-50 lg:min-w-50 xl:min-w-60 2xl:min-w-70 leading-[1.3] lg:leading-[1.4] xl:leading-[1.3] 2xl:leading-[1.1] overflow-hidden font-accent ">
              <TypeAnimation
                sequence={[
                  "Frontend ",
                  1000,
                  "Backend ",
                  1000,
                  "FullStack ",
                  6000,
                ]}
                wrapper="span"
                speed={300}
                cursor={false}
                repeat={Infinity}
                style={{ overflow: "hidden" }}
              />{" "}
            </span>
            <span className="align-middle leading-none">{"  "}Developer</span>
          </p>
        </div>
      </div>
      <div className="bg-bg-accent dark:bg-bg-accent h-[300px] lg:h-full lg:w-3/8"></div>
      <div className="absolute lg:max-h-full w-[400px] lg:w-[415px] xl:w-[440px] 2xl:w-[480px]   bottom-0 left-1/2 lg:left-9/13 -translate-x-1/2  z-10 overflow-hidden">
        <img
          src={heroImg}
          alt="Nerses"
          className="object-contain object-bottom block"
        />
      </div>
    </section>
  );
}

export default Home;
