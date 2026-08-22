import ProjectCard from "./ProjectCard";
import { projects } from "../misc/projects";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="bg-bg-secondary dark:bg-bg-secondary min-h-screen pb-5 pt-23  transition-colors duration-500 flex flex-col items-center"
    >
      {/* <section
      id="projects"
      className="bg-bg-secondary dark:bg-bg-secondary min-h-screen pb-5 pt-23 px-5 sm:px-10 md:px-15 lg:px-30 transition-colors duration-500"
    > */}
      {/* <section
      id="projects"
      className="dark:bg-bg-secondary min-h-screen pb-5 pt-23 transition-colors duration-500"
    > */}
      <div className="w-[90svw] sm:w-140 md:w-170 lg:w-230 xl:w-280 2xl:w-320 flex flex-col">
        <div className="">
          {/* <div className="mx-5 sm:mx-10 md:mx-15 lg:mx-30 self-start"> */}
          <h1 className="text-3xl py-1">{t("projects.h2")}</h1>
          <p className="my-5 whitespace-pre-line">
            {t("projects.mainContent")}
          </p>
        </div>

        <div className="flex flex-col justify-center gap-y-3 mx-0 w-[90svw] sm:w-140 md:w-180 lg:w-240 xl:w-280 2xl:w-320">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
