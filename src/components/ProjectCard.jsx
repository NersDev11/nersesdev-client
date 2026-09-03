import ProjectCardOverview from "./ProjectCardOverview";
import ProjectCardTechHighlight from "./ProjectCardTechHighlight";

import brandubhBG from "../assets/brandubhBG.png";
import steamLibrarianBG from "../assets/steamLibrarianBG.png";

const bgs = {
  "brandubhBG.png": brandubhBG,
  "steamLibrarianBG.png": steamLibrarianBG,
};

function ProjectCard({ project }) {
  return (
    <div
      className="h-130 text-font-project-section dark:text-font-project-section rounded-lg my-5 flex flex-col lg:flex-row justify-end lg:justify-between lg:items-end bg-cover bg-right lg:bg-center relative"
      style={{ backgroundImage: `url(${bgs[project.imgBG]})` }}
    >
      <div className="absolute inset-0 bg-black/50 rounded-lg" />
      <div className="h-60 w-80  sm:w-98 ml-4 mb-12 lg:ml-10 lg:mb-8 2xl:mb-10 lg:h-70">
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
