import ProjectCardOverview from "./ProjectCardOverview";
import ProjectCardTechHighlight from "./ProjectCardTechHighlight";

function ProjectCard({ project }) {
  return (
    <div className=" min-h-screen border-bs-sky-950 rounded-lg bg-sky-950 my-5 flex flex-col gap-12 justify-end">
      <ProjectCardOverview project={project} />
      <div className="flex gap-3 ml-7 mb-7">
        {project.highlights.map((highlight) => (
          <ProjectCardTechHighlight key={Math.random()} highlight={highlight} />
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
