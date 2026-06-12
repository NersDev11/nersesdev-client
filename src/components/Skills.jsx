import SkillCard from "./SkillCard";
import { skills } from "../misc/skills";
import { useState } from "react";

function Skills() {
  const [openedCard, setOpenedCard] = useState(1);

  function handleToggleCard(id) {
    if (id === openedCard) setOpenedCard(1);
    else setOpenedCard(id);
  }

  return (
    <section
      id="skills"
      className="dark:bg-bg-tertiary pt-25 pb-5 px-10 lg:px-30 min-h-screen min-w-screen transition-colors duration-500"
    >
      <h2 className="ml-4 text-4xl overflow-hidden">myskills</h2>
      <p className="m-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        nostrum at nihil provident iure beatae amet libero, aut reprehenderit
        eaque aspernatur fuga natus. Voluptatum odio totam, deleniti tenetur
        obcaecati culpa.
      </p>
      <div className="m-4 flex gap-6 flex-wrap">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            openedCard={openedCard}
            onToggle={handleToggleCard}
            skill={skill}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
