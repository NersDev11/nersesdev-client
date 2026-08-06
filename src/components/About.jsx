import { BIRTH_DATE } from "../misc/constants";
import { getAge } from "../utils/getAge";
import journeyImg from "../assets/journeyImg.jpg";
import ornament from "../assets/ornament.png";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="bg-bg-tertiary dark:bg-bg-tertiary py-15 lg:py-20 px-5 sm:px-10 md:px-15 lg:px-30  min-h-screen min-w-screen transition-colors duration-500 "
    >
      <div className="flex flex-col lg:flex-row-reverse  lg:gap-5 xl:gap-10 2xl:gap-15 my-5 ">
        <div className="overflow-hidden relative lg:flex-5 sm:mt-10 xl:mt-0">
          {" "}
          <h2 className="ml-4 text-lg uppercase">{t("about.h2")}</h2>
          <h3 className="ml-4 mt-3 text-3xl overflow-hidden">
            {t("about.title")}{" "}
          </h3>
          <p className="mx-4 mt-4 lg:mt-6 xl:mt-12">
            {t("about.p1.1")} {getAge(BIRTH_DATE)} {t("about.p1.2")}
          </p>
          <p className="mx-4 mt-4 lg:mt-6 xl:mt-12">{t("about.p2")}</p>
          <p className="mx-4 mt-4 mb-4 xl:mb-0 lg:mt-6 xl:mt-12">
            {t("about.p3")}
          </p>
          <img
            src={ornament}
            alt="stars ornament"
            className="xl:absolute bottom-0 right-0"
          />
        </div>

        <div className="mt-15 lg:mt-12 xl:mt-0 mr-3 sm:mr-0 lg:flex-4">
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
