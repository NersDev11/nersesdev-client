import projectImg1 from "../assets/project.jpg";

const images = {
  "project1.jpg": projectImg1,
};

function ProjectCardModal({ project, handleModalToggle }) {
  return (
    // <div className="z-100 fixed top-0 left-0 min-h-screen bg-blue-300">
    <div className="h-full relative bg-[#f9f7f5] p-4 2xl:p-10 flex flex-col lg:flex-row gap-5">
      <button className="absolute top-2 right-2" onClick={handleModalToggle}>
        X
      </button>
      <div className="flex-1 2xl:flex-3 overflow-hidden">
        <img src={images[project.imgPreview]} alt="" />
      </div>
      <div className="flex-1 2xl:flex-2 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold mb-4">{project.heading}</h3>
          <hr className="border-gray-400 border-t" />
          <p className="mt-4">{project.description}</p>
        </div>
        <div className="mb-2">
          <ul className="mt-10 flex flex-col gap-4">
            <li className="flex flex-row justify-between">
              <span>Platform:</span>
              <span>{project.platform}</span>
            </li>
            <li className="flex flex-row justify-between">
              <span>Languages:</span>
              <span>
                {project.languages.map((el, i) => (
                  <span key={i}>
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
      </div>
    </div>
  );
}

export default ProjectCardModal;
