function ProjectCardTechHighlight({ highlight }) {
  return (
    <div
      translate="no"
      className="uppercase h-12 sm:h-14 w-24 sm:w-30 text-xs sm:text-sm border border-border-projects dark:border-border-projects rounded py-1 sm:px-1 text-center flex items-center justify-center backdrop-blur-xl"
    >
      <span>{highlight}</span>
    </div>
  );
}

export default ProjectCardTechHighlight;
