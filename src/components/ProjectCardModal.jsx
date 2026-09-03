import { useTranslation } from "react-i18next";
import brandubh from "../assets/screenBrandubh.png";
import steamLibrarian from "../assets/screenSteamLibrarian.png";

import { IoCloseOutline } from "react-icons/io5";

const images = {
  screenBrandubh: brandubh,
  "screenSteamLibrarian.png": steamLibrarian,
};

function ProjectCardModal({ project, handleModalToggle }) {
  const { t } = useTranslation();

  console.log(project);

  return (
    // <div className="z-100 fixed top-0 left-0 min-h-screen bg-blue-300">
    <div className="mt-4 rounded lg:mt-25 2xl:mt-10 h-fit 2xl:h-[80svh] text-sm relative p-4 2xl:p-10 flex flex-col lg:flex-row gap-5 bg-bg-project-modal dark:bg-bg-project-modal text-font-primary dark:text-font-primary">
      <button
        className="absolute top-0 right-0 lg:top-2 lg:right-2 hover:cursor-pointer text-3xl"
        onClick={handleModalToggle}
        aria-label="Close modal window"
      >
        <IoCloseOutline />
      </button>
      <div className="flex-1 xl:flex-2 overflow-hidden flex justify-center items-center mt-3">
        <img
          className="w-full"
          src={images[project.imgPreview]}
          alt="Screenshot of this project's main page"
        />
      </div>
      <div className="flex-1 xl:flex-1 flex flex-col justify-between xl:mt-3">
        <div>
          <h3 translate="no" className="text-2xl font-semibold mb-2 capitalize">
            {project.name}
          </h3>
          <hr className="border-gray-400 border-t" />
          <p className="mt-2 whitespace-pre-line">
            {t(`projects.${project.name}.description`)}
          </p>
        </div>
        <div className="xl:mb-5 mt-5 xl:mt-0">
          <ul className="mt-2 flex flex-col gap-1">
            <li className="flex flex-row justify-between">
              <span className="font-semibold">Tech Stack:</span>
              <span>
                {project.techStack.map((el, i) => (
                  <span key={i} translate="no" className="font-accent">
                    {el}
                    {i !== project.techStack.length - 1 ? ", " : ""}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex flex-row justify-between">
              <span translate="no" className="font-semibold">
                URL:
              </span>
              <span className="font-accent">
                {t(`projects.${project.name}.${project.url}`)}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardModal;
