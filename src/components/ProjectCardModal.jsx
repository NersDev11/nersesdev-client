function ProjectCardModal({ project, handleModalToggle }) {
  return (
    <div className="z-100 fixed top-0 left-0 min-h-screen bg-blue-300">
      <button className="z-50 fixed top-0 r-0" onClick={handleModalToggle}>
        X
      </button>
      <h3>{project.h3}</h3>
      <p>{project.description}</p>
      <ul>
        <li className="flex flex-row justify-between">
          <span>Platform:</span>
          <span>{project.platform}</span>
        </li>
        <li className="flex flex-row justify-between">
          <span>Languages:</span>
          <span>
            {project.languages.map((el, i) => (
              <span>
                {el}
                {i !== project.languages.length - 1 ? ", " : ""}
              </span>
            ))}
          </span>
        </li>
        <li className="flex flex-row justify-between">
          <span>URL:</span>
          <span>{project.url}</span>
        </li>
      </ul>
    </div>
  );
}

export default ProjectCardModal;
