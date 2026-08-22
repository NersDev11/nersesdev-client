import { useTranslation } from "react-i18next";
import projectImg1 from "../assets/project.jpg";

import { IoCloseOutline } from "react-icons/io5";

const images = {
  "project1.jpg": projectImg1,
};

function ProjectCardModal({ project, handleModalToggle }) {
  const { t } = useTranslation();

  console.log(project);

  return (
    // <div className="z-100 fixed top-0 left-0 min-h-screen bg-blue-300">
    <div className=" lg:mt-25 h-fit  text-sm relative bg-[#f9f7f5] p-4 2xl:p-10 flex flex-col lg:flex-row gap-5">
      <button
        className="absolute top-2 right-2 hover:cursor-pointer text-3xl"
        onClick={handleModalToggle}
      >
        <IoCloseOutline />
      </button>
      <div className="flex-1 overflow-hidden flex justify-center items-center">
        <img
          className="w-full"
          src={images[project.imgPreview]}
          alt="Screenshot of this project's main page"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold mb-2 capitalize ">
            {project.name}
          </h3>
          <hr className="border-gray-400 border-t" />
          <p className="mt-2 whitespace-pre-line">
            {t(`projects.${project.name}.description`)}
          </p>
        </div>
        <div className="mb-1">
          <ul className="mt-4 flex flex-col gap-1">
            {/* <li className="flex flex-row justify-between">
              <span>Platform:</span>
              <span>{project.platform}</span>
            </li> */}
            <li className="flex flex-row justify-between">
              <span>Tech Stack:</span>
              <span>
                {project.techStack.map((el, i) => (
                  <span key={i}>
                    {el}
                    {i !== project.techStack.length - 1 ? ", " : ""}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex flex-row justify-between">
              <span>URL:</span>
              <span>{t(`projects.${project.name}.${project.url}`)}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardModal;
