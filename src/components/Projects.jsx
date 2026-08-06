import ProjectCard from "./ProjectCard";
import { projects } from "../misc/projects";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="bg-bg-secondary dark:bg-bg-secondary min-h-screen pb-5 pt-23 px-5 sm:px-10 md:px-15 lg:px-30 transition-colors duration-500"
    >
      {/* <section
      id="projects"
      className="dark:bg-bg-secondary min-h-screen pb-5 pt-23 transition-colors duration-500"
    > */}
      <h1 className="ml-4 text-3xl py-1">{t("projects.h2")}</h1>
      <p className="m-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit vitae at
        debitis assumenda! Earum ut minima molestias maiores reprehenderit sint
        nostrum facilis itaque necessitatibus repellendus, velit fugit ad quia?
        Explicabo?
      </p>
      <div className="flex flex-col justify-center gap-3 mx-0">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
