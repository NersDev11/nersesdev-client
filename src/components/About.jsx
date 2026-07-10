import { BIRTH_DATE } from "../misc/constants";
import { getAge } from "../utils/getAge";
// import journeyImg from "../assets/journey2.jpg";
import journeyImg from "../assets/journey4.jpg";
// import journeyImg from "../assets/blur_edges.jpg";

function About() {
  return (
    <section
      id="about"
      className="bg-bg-tertiary dark:bg-bg-tertiary py-15 lg:py-20 px-10 lg:px-30  min-h-screen min-w-screen transition-colors duration-500 "
    >
      <div className="flex flex-col lg:flex-row-reverse lg:gap-15 my-5 ">
        <div className="overflow-hidden ">
          {" "}
          <h2 className="ml-4 text-lg uppercase">About Me - Nerses Balaian</h2>
          <h3 className="ml-4 mt-3 text-3xl overflow-hidden">
            An Everlasting Journey{" "}
          </h3>
          <p className="mx-4 mt-4">
            I'm {getAge(BIRTH_DATE)} years old. I live and work in Kyiv,
            Ukraine. While having my background and education in phylosophy and
            theology, and having worked in marketing and sales, I've found my
            real passion in tech industry and programming. Webdev has always
            attracted me. Frontend as being the first impression of meeting a
            new service and backend as a mysterious clockworking machine.
          </p>
          <p className="mx-4 mt-4">
            I like that working in the programming world (and especially
            nowadays) makes me learn new thing everyday, acquire new skills and
            makes me get a fresh pespective on things I thought I knew. It's a
            path I immensely enjoy and a truly everlasting journey...
          </p>
          <p className="mx-4 mt-4">
            In the free time I like taking long walks in nature, learning new
            skills, exploring gaming worlds, playing chess or trying to find
            some beautiful gems in the nightsky with my telescope)
          </p>
          <div className="mt-17 lg:mt-15 ml-5 -skew-y-4 w-[90%] border-b-6 border-blue-800"></div>
          <div className="mt-4 ml-5 -skew-y-4 w-[80%] border-b-6 border-blue-800"></div>
          <div className="mt-4 ml-5 -skew-y-4 w-[70%] border-b-6 border-blue-800"></div>
        </div>

        <div className="mt-15 lg:mt-0">
          <img
            src={journeyImg}
            alt="A man with a backpack facing snowy mountains"
            className=""

            // className="[mask-image:radial-gradient(circle,black_70%,transparent_100%)]
            //  [-webkit-mask-image:radial-gradient(circle,black_70%,transparent_100%)]"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
