import { useTranslation } from "react-i18next";
import SkillsCardsField from "./SkillsCardsField";
import { useRef } from "react";

function Skills() {
  const { t } = useTranslation();

  const scrollToRef = useRef(null);

  function scrollToTarget() {
    scrollToRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section
      id="skills"
      className="bg-bg-tertiary dark:bg-bg-tertiary pt-25 pb-5 min-h-screen min-w-screen transition-colors duration-500 flex flex-col items-center"
    >
      <div className="w-[90svw] sm:w-140 md:w-180 lg:w-240 xl:w-280 2xl:w-7xl flex flex-col items-center">
        <div className="">
          <h2 className="text-4xl overflow-hidden">{t("skills.h2")}</h2>
          <p className="my-5 whitespace-pre-line">{t("skills.mainContent")}</p>
        </div>
        {/* Invisible element to scroll to */}
        <div ref={scrollToRef} className="opacity-0">
          Scroll To
        </div>
        <SkillsCardsField onClickToScroll={scrollToTarget} />
      </div>
    </section>
  );
}

export default Skills;
