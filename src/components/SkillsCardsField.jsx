import { skills } from "../misc/skills";

import js from "../assets/js.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import css from "../assets/css.png";
import git from "../assets/git.png";
import oop from "../assets/oop.png";
import docker from "../assets/docker.png";
import figma from "../assets/figma.png";
import html from "../assets/html.png";
import db from "../assets/db.png";
import ai from "../assets/ai.png";
import cloud from "../assets/cloud.png";
import testing from "../assets/testing.png";
import { useState } from "react";
import SkillCardClosed from "./SkillCardClosed";
import SkillCardOpened from "./SkillCardOpened";

const bgs = {
  js,
  node,
  react,
  css,
  git,
  oop,
  docker,
  figma,
  html,
  db,
  ai,
  testing,
  cloud,
};

function SkillsCardsField({ onClickToScroll }) {
  const [CardOpen, setCardOpen] = useState(1);

  function handleOpenCard(id) {
    setCardOpen(id);
  }

  const openSkill = skills.find((s) => s.id === CardOpen);

  return (
    <div
      className={`mt-20 grid gap-y-6 gap-x-0 md:gap-x-2 2xl:gap-12 lg:grid-rows-6 landscape:grid-rows-6 2xl:grid-rows-6 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 relative`}
    >
      <SkillCardOpened skill={openSkill} bg={bgs[openSkill.name]} />

      {skills
        .filter((skill) => skill.id !== CardOpen)
        .map((skill) => (
          <SkillCardClosed
            key={skill.id}
            onOpen={handleOpenCard}
            skill={skill}
            onClickToScroll={onClickToScroll}
          />
        ))}
    </div>
  );
}

export default SkillsCardsField;
