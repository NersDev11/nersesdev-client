import { useTranslation } from "react-i18next";

function SkillCardOpened({ skill, bg, onOpen }) {
  const [Icon1, Icon2] = skill.icons;

  const { t } = useTranslation();
  // const isOpen = false;

  console.log(bg);

  return (
    <div
      onClick={() => onOpen(skill.id)}
      className={`border rounded-lg order-first col-span-2 landscape:max-lg:col-span-1 lg:row-span-full landscape:row-span-full bg-bg-secondary dark:bg-bg-secondary overflow-hidden min-h-[70vh] flex flex-col  mr-4  min-w-[26%]`}
      // className={`border rounded-lg  ${isOpen ? "order-first col-span-2 lg:row-span-full " : "min-w-[40%] lg:min-w-[30%]"} mr-4 hover:cursor-pointer min-w-[26%]`}
    >
      <div className="flex flex-row justify-center text-font-accent dark:text-font-accent ">
        {skill.skills.map((s, i) => (
          <div
            className={`${skill.skills.length === 1 ? "" : ""} ${i === 1 ? "bg-[#023e7d] pl-5 md:pl-8 -ml-6 md:-ml-8" : "bg-black "} p-3 gap-2 flex-1 group flex justify-center items-center transition-all duration-300`}
            style={{
              clipPath:
                skill.skills.length === 2 && i === 1
                  ? "polygon(24px 0, 100% 0, 100% 100%, 0 100%)"
                  : "none",
            }}
          >
            <div className="p-2 landscape:max-lg:px-0">
              {i === 0 ? (
                <Icon1 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl landscape:max-lg:text-2xl" />
              ) : (
                <Icon2 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl" />
              )}
            </div>

            <h4
              translate="no"
              className="xl:text-lg landscape:max-lg:text-sm pr-8 sm:pr-4 md:pr-2 lg:pr-0"
            >
              {s.toUpperCase()}
            </h4>
          </div>
        ))}
      </div>

      <div className=" flex flex-col align-center flex-1">
        <div className="mt-4 min-h-[70%] flex-1 relative flex flex-col justify-between">
          <p className="p-3 px-6 text-left whitespace-pre-line ">
            {t(`skills.${skill.name}.mainContent`)}
          </p>
          <img
            src={bg}
            alt="Code Example"
            className=" opacity-70 w-full max-h-[45%] md:max-h-[60%] lg:max-h-[45%]"
          />
        </div>

        <hr />
        <div className="text-center p-3">
          <blockquote className="">
            {t(`skills.${skill.name}.quote`)}
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default SkillCardOpened;
