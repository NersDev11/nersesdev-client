import { BIRTH_DATE } from "../misc/constants";
import { getAge } from "../utils/getAge";
import journeyImg from "../assets/journeyImg.jpg";

import ornamentDark from "../assets/ornamentDark.png";
import ornamentLight from "../assets/ornamentLight.png";

import { useTranslation } from "react-i18next";
import { useTheme } from "../context/useTheme";

function About() {
  const { t } = useTranslation();

  const { theme } = useTheme();

  return (
    <section
      id="about"
      className="bg-bg-tertiary dark:bg-bg-tertiary py-15 lg:py-20 min-h-screen min-w-screen transition-colors duration-500 flex flex-col items-center"
    >
      <div className=" my-5 w-[90svw] sm:w-140 md:w-170 lg:w-230 xl:w-280 2xl:w-320 flex flex-col items-center">
        <div className="flex flex-col lg:flex-row-reverse  lg:gap-5 xl:gap-10 2xl:gap-15">
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
              src={theme === "dark" ? ornamentLight : ornamentDark}
              alt=""
              className="xl:absolute bottom-0 right-0"
            />
          </div>

          <div className="mt-15 lg:mt-12 xl:mt-0 mr-3 sm:mr-0 lg:flex-4">
            <img
              src={journeyImg}
              alt="A man with a backpack facing snowy mountains"
              className="mb-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
