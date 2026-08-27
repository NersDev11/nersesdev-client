import { LayoutGroup } from "framer-motion";
import { useState, useEffect } from "react";

import SkillCard from "./TempSkillCard";
import { skills } from "../misc/skills";
// import { useState } from "react";

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
import { useTranslation } from "react-i18next";

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

const CLOSE_MS = 350;
const OPEN_MS = 450;

function Skills() {
  const { t } = useTranslation();

  const [openedCard, setOpenedCard] = useState(1);
  const [phase, setPhase] = useState("idle"); // idle | closing | opening
  const [pendingCard, setPendingCard] = useState(null);

  function handleToggleCard(id) {
    if (phase !== "idle") return;
    if (id === openedCard) return;
    setPendingCard(id);
    setPhase("closing");
  }

  useEffect(() => {
    let t;
    if (phase === "closing") {
      t = setTimeout(() => {
        // instant swap: happens in the same tick as switching to "opening"
        setOpenedCard(pendingCard);
        setPhase("opening");
      }, CLOSE_MS);
    } else if (phase === "opening") {
      t = setTimeout(() => {
        setPhase("idle");
        setPendingCard(null);
      }, OPEN_MS);
    }
    return () => clearTimeout(t);
  }, [phase, pendingCard]);

  return (
    <section id="skills" className="...">
      <h2 className="ml-4 text-4xl overflow-hidden">{t("skills.h2")}</h2>
      <p className="m-4">...</p>

      <LayoutGroup>
        <div className="m-4 mt-20 grid gap-y-6 gap-x-0 md:gap-x-2 2xl:gap-12 lg:grid-rows-6 landscape:grid-rows-6 2xl:grid-rows-6 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              bg={bgs[skill.name]}
              openedCard={openedCard}
              phase={phase}
              onToggle={handleToggleCard}
              skill={skill}
            />
          ))}
        </div>
      </LayoutGroup>
    </section>
  );
}

export default Skills;
