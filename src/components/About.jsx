import { BIRTH_DATE } from "../misc/constants";
import { getAge } from "../utils/getAge";
import journeyImg from "../assets/journeyImg.jpg";
import ornament from "../assets/ornament.png";

function About() {
  return (
    <section
      id="about"
      className="bg-bg-tertiary dark:bg-bg-tertiary py-15 lg:py-20 px-5 sm:px-10 md:px-15 lg:px-30  min-h-screen min-w-screen transition-colors duration-500 "
    >
      <div className="flex flex-col lg:flex-row-reverse lg:gap-5 xl:gap-10 2xl:gap-15 my-5 ">
        <div className="overflow-hidden relative lg:flex-5">
          {" "}
          <h2 className="ml-4 text-lg uppercase">About Me - Nerses Balaian</h2>
          <h3 className="ml-4 mt-3 text-3xl overflow-hidden">
            A Lifelong Journey{" "}
          </h3>
          <p className="mx-4 mt-4 lg:mt-6 xl:mt-12">
            I'm {getAge(BIRTH_DATE)} years old and live in Kyiv, Ukraine. While
            my education is in philosophy and theology, and my professional
            background includes marketing and sales, I eventually discovered my
            true passion in the tech industry and programming. Web development
            has always fascinated me. I love the frontend as the first
            impression people have of a service, while the backend feels like a
            mysterious clockwork mechanism quietly powering everything behind
            the scenes.
          </p>
          <p className="mx-4 mt-4 lg:mt-6 xl:mt-12">
            What I enjoy most about programming, especially today, is that it
            encourages me to learn something new every day, develop new skills,
            and gain fresh perspectives on things I thought I already
            understood. It's a journey I truly enjoy, and one I believe will
            never really end.
          </p>
          <p className="mx-4 mt-4 mb-4 xl:mb-0 lg:mt-6 xl:mt-12">
            In my free time, I enjoy taking long walks in nature, learning new
            skills, exploring gaming worlds, playing chess, or searching for
            hidden gems in the night sky with my telescope.
          </p>
          <img
            src={ornament}
            alt="stars ornament"
            className="xl:absolute bottom-0 right-0"
          />
          {/* <div className="mt-17 lg:mt-15 ml-5 -skew-y-4 w-[90%] border-b-6 border-blue-800"></div>
          <div className="mt-4 ml-5 -skew-y-4 w-[80%] border-b-6 border-blue-800"></div>
          <div className="mt-4 ml-5 -skew-y-4 w-[70%] border-b-6 border-blue-800"></div> */}
        </div>

        <div className="mt-15 lg:mt-12 xl:mt-0  lg:flex-4">
          <img
            src={journeyImg}
            alt="A man with a backpack facing snowy mountains"
            className=""
          />
        </div>
      </div>
    </section>
  );
}

export default About;
