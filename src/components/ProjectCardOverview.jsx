// import { useState } from "react";
import ProjectCardModal from "./ProjectCardModal";

function ProjectCardOverview({ project }) {
  // const [modalOpen, setModalOpen] = useState(false);

  // function handleModalToggle() {
  //   setModalOpen((s) => !s);
  // }

  return (
    <div className="h-[30%] w-[80%] ml-7 self-start border rounded py-4 px-6 flex flex-col gap-5 center backdrop-blur-md">
      <h3 className="text-3xl py-1">{project.name}</h3>
      <p className="">{project.preview}</p>
      <button
        // onClick={handleModalToggle}
        className="border rounded py-2 w-[40%] cursor-pointer hover:bg-stone-300 hover:text-black"
      >
        View Project &rarr;
      </button>
    </div>
  );
}

export default ProjectCardOverview;
