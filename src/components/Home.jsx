import { TypeAnimation } from "react-type-animation";
import heroImg from "../assets/hero7.png";
// import heroImg from "../assets/hero4.png";

function Home() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[120svh] lg:min-h-[110svh] lg:h-screen overflow-hidden"
    >
      {/* <section className="relative w-full min-h-screen overflow-hidden"> */}
      {/* Split background */}
      <div className="absolute inset-0 flex flex-col lg:flex-row overflow-hidden">
        {/* <div className="flex-8  md:flex-8 bg-bg-primary dark:bg-bg-primary"> */}
        <div className="flex-none h-svh w-full lg:h-full lg:w-8/13 bg-bg-primary dark:bg-bg-primary">
          <div className="lg:pl-25 ">
            <h1 className="text-5xl lg:text-6xl 2xl:text-7xl mt-60 mb-8 lg:-ml-50 pb-2 text-center  overflow-hidden">
              Hey, I'm Nerses)
            </h1>
            <p className="text-3xl lg:text-5xl 2xl:text-6xl text-center lg:-ml-40 py-1  overflow-hidden">
              I'm a{"  "}
              <TypeAnimation
                sequence={[
                  "Frontend ",
                  1000,
                  "Backend ",
                  1000,
                  "FullStack ",
                  8000,
                ]}
                wrapper="span"
                speed={300}
                cursor={false}
                repeat={Infinity}
                style={{ overflow: "hidden" }}
              />{" "}
              Developer
            </p>
          </div>
        </div>
        {/* <div className="flex-3 md:flex-5 bg-bg-accent dark:bg-bg-accent " /> */}
        <div className="flex-none h-[20svh] w-full lg:h-full lg:w-5/13 bg-bg-accent dark:bg-bg-accent" />
      </div>
      {/* Photo pinned to bottom center */}
      {/* <div className="absolute bottom-0 left-1/2 md:left-9/13 -translate-x-1/2 z-10">
        <img
          src={heroImg}
          alt="Your name"
          className="h-[80vh] md:h-[90vh] object-contain object-bottom block"
        />
      </div> */}

      <div className="absolute max-h-100 lg:max-h-full w-[50svh] lg:w-[65svh]   bottom-0 left-1/2 lg:left-9/13 -translate-x-1/2  z-10 overflow-hidden">
        {/* <div className="absolute max-h-100 md:max-h-150 lg:max-h-200 bottom-0 left-1/2 lg:left-9/13 -translate-x-1/2 z-10 overflow-hidden"> */}
        <img
          src={heroImg}
          alt="Nerses"
          // className="h-[70svh] md:h-[80svh] lg:h-[90vh] object-contain object-bottom block"
          className="object-contain object-bottom block"
          // className="h-[100svh] lg:h-[90vh] object-contain object-bottom block"
        />
      </div>
      {/* <div className="absolute left-8 top-1/3 text-stone-100 z-10 md:block flex flex-col"></div> */}
      {/* <div className="pb-10 pt-20 h-130 lg:-ml-180">
        <h1 className="text-5xl lg:text-7xl mt-12 mb-8 lg:-ml-30 pb-2 text-center  overflow-hidden">
          Hey, I'm Nerses)
        </h1>
        <p className="text-3xl lg:text-6xl text-center py-1  overflow-hidden">
          And I'm a{"  "}
          <TypeAnimation
            sequence={["Frontend ", 1000, "Backend ", 1000, "FullStack ", 8000]}
            wrapper="span"
            speed={300}
            cursor={false}
            repeat={Infinity}
            style={{ overflow: "hidden" }}
          />{" "}
          Developer
        </p>
      </div> */}
    </section>
    // <section className="relative w-full h-screen overflow-hidden">
    //   {/* Split background */}
    //   <div className="absolute inset-0 flex flex-col md:flex-row">
    //     <div className="flex-8 bg-bg-primary dark:bg-bg-primary" />
    //     <div className="flex-5 bg-bg-accent dark:bg-bg-accent" />
    //   </div>

    //   {/* Photo pinned to bottom center */}
    //   <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
    //     <img
    //       src={heroImg}
    //       alt="Your name"
    //       className="h-[80vh] md:h-[90vh] object-contain object-bottom block"
    //     />
    //   </div>
    // </section>
  );
}

export default Home;
