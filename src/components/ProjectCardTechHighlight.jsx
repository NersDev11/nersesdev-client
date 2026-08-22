function ProjectCardTechHighlight({ highlight }) {
  return (
    <div className="uppercase h-12 sm:h-14 w-24 sm:w-30 text-xs sm:text-sm border rounded py-1 sm:px-1 text-center flex items-center justify-center">
      <span>{highlight}</span>
    </div>
  );
}

export default ProjectCardTechHighlight;
