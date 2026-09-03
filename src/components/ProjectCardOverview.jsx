import { useState } from "react";
import ProjectCardModal from "./ProjectCardModal";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";
import { HiArrowLongRight } from "react-icons/hi2";

function ProjectCardOverview({ project }) {
  const [modalOpen, setModalOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <div className="w-full h-full border border-border-projects dark:border-border-projects rounded  flex flex-col justify-between gap-2 backdrop-blur-md">
      <div className="mt-5 mx-6">
        <h3 translate="no" className="text-2xl capitalize mb-4">
          {project.name}
        </h3>
        <p className="text-base">{t(`projects.${project.name}.preview`)}</p>
      </div>

      <button
        onClick={() => setModalOpen(true)}
        className="border border-border-projects dark:border-border-projects  rounded ml-6 mb-4 lg:mt-10 py-2 h-auto w-[50%] md:w-[40%] cursor-pointer hover:bg-stone-300 hover:text-black transition-colors duration-300 bg-gray-700/15"
      >
        <span>{t("projects.viewButton")}</span>
        <HiArrowLongRight className="text-2xl inline-block ml-2" />
      </button>
      {/* <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        styles={
          "w-[90svw] 2xl:w-[80svw] max-h-[90svh] lg:max-h-[85svh] overflow-y-auto"
        }
      > */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        styles={"w-[90svw] xl:w-[95svw] h-fit"}
        // styles={
        //   "w-[90svw] 2xl:w-[80svw] min-h-[svh] sm:min-h-[106svh] h-[100svh]"
        // }
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
