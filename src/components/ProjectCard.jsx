import ProjectCardOverview from "./ProjectCardOverview";
import ProjectCardTechHighlight from "./ProjectCardTechHighlight";

function ProjectCard({ project }) {
  return (
    <div className="h-130  border-bs-sky-950 rounded-lg bg-bg-primary dark:bg-bg-primary my-5 flex flex-col lg:flex-row justify-end lg:justify-between lg:items-end">
      <div className="h-60 w-80  sm:w-105 ml-4 mb-12 lg:ml-10 lg:mb-8 2xl:mb-10 lg:h-75">
        <ProjectCardOverview project={project} />
      </div>

      <div className="flex gap-3 mb-8 2xl:mb-10 ml-4 lg:ml-0 lg:mr-14">
        {project.highlights.map((highlight) => (
          <ProjectCardTechHighlight key={Math.random()} highlight={highlight} />
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
