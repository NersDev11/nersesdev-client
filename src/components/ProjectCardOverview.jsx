import { useState } from "react";
import ProjectCardModal from "./ProjectCardModal";
import Modal from "./Modal";

function ProjectCardOverview({ project }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="h-[30%] w-[80%] ml-7 self-start border rounded py-4 px-6 flex flex-col gap-5 center backdrop-blur-md dark:bg-bg-quaternary">
      <h3 className="text-3xl py-1">{project.name}</h3>
      <p className="">{project.preview}</p>
      <button
        onClick={() => setModalOpen(true)}
        className="border rounded py-2 w-[40%] cursor-pointer hover:bg-stone-300 hover:text-black"
      >
        View Project &rarr;
      </button>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        styles={
          "w-[90svw] 2xl:w-[75svw] min-h-[90svh] lg:min-h-[60svh] 2xl:h-[75svh]"
        }
      >
        <ProjectCardModal
          project={project}
          handleModalToggle={() => setModalOpen(false)}
        />
      </Modal>
    </div>
  );
}

export default ProjectCardOverview;
