function SkillCardClosed({ skill, bg, onOpen }) {
  const [Icon1, Icon2] = skill.icons;
  // const isOpen = false;

  console.log(bg);

  return (
    <div
      translate="no"
      onClick={() => onOpen(skill.id)}
      className={`border rounded-lg lg:min-w-[30%] mr-4 hover:cursor-pointer min-w-[26%]`}
    >
      <div className="flex flex-row justify-center text-font-accent dark:text-font-accent ">
        {skill.skills.map((s, i) => (
          <div
            className={`${skill.skills.length === 1 ? "" : ""}  ${i === 1 ? "bg-[#023e7d] pl-5 md:pl-8 -ml-6 md:-ml-8" : "bg-black "} p-3 flex gap-2 flex-1 group justify-center items-center transition-all duration-300 hover:flex-2`}
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

            <h4 className="hidden xl:block max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-32 group-hover:opacity-100 transition-all duration-500 xl:text-sm lg:text-base">
              {s.toUpperCase()}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCardClosed;
