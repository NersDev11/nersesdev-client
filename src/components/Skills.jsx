// import SkillCard from "./SkillCard";
// import { skills } from "../misc/skills";
// import { useState } from "react";

// import js from "../assets/js.png";
// import node from "../assets/node.png";
// import react from "../assets/react.png";
// import css from "../assets/css.png";
// import git from "../assets/git.png";
// import oop from "../assets/oop.png";
// import docker from "../assets/docker.png";
// import figma from "../assets/figma.png";
// import html from "../assets/html.png";
// import db from "../assets/db.png";
// import ai from "../assets/ai.png";
// import cloud from "../assets/cloud.png";
// import testing from "../assets/testing.png";
import { useTranslation } from "react-i18next";
import SkillsCardsField from "./SkillsCardsField";

// const bgs = {
//   js,
//   node,
//   react,
//   css,
//   git,
//   oop,
//   docker,
//   figma,
//   html,
//   db,
//   ai,
//   testing,
//   cloud,
// };
// import node from '../assets/node.png';

function Skills() {
  const { t } = useTranslation();

  // const [openedCard, setOpenedCard] = useState(1);

  // const numSkills = skills.length;

  // function handleToggleCard(id) {
  //   if (id === openedCard) setOpenedCard(1);
  //   else setOpenedCard(id);
  // }

  return (
    <section
      id="skills"
      className="bg-bg-tertiary dark:bg-bg-tertiary pt-25 pb-5  min-h-screen min-w-screen transition-colors duration-500 flex flex-col items-center"
    >
      <div className="w-[90svw] sm:w-140 md:w-180 lg:w-240 xl:w-280 2xl:w-7xl flex flex-col items-center">
        <div className="">
          <h2 className="text-4xl overflow-hidden">{t("skills.h2")}</h2>
          <p className="my-5 whitespace-pre-line">{t("skills.mainContent")}</p>
        </div>

        {/* <div
          className={`mt-20 grid gap-y-6 gap-x-0 md:gap-x-2 2xl:gap-12  lg:grid-rows-6 landscape:grid-rows-6 2xl:grid-rows-6 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 `}
        >
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              bg={bgs[skill.name]}
              openedCard={openedCard}
              onToggle={handleToggleCard}
              skill={skill}
            />
          ))}
        </div> */}
        <SkillsCardsField />
      </div>
    </section>
  );
}

export default Skills;
