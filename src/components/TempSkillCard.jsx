import { motion, AnimatePresence } from "framer-motion";

function SkillCard({ skill, bg, openedCard, phase, onToggle }) {
  const isOpenCommitted = skill.id === openedCard;

  // Only the currently-committed card is ever "big".
  // During "closing" we force everyone small (even if it's still committed as open).
  const isOpen = phase === "closing" ? false : isOpenCommitted;

  const [Icon1, Icon2] = skill.icons;

  return (
    <motion.div
      layout
      // Kill layout animation entirely during the render where openedCard
      // flips — that's the "swap" tick. Everywhere else, animate normally.
      transition={{
        layout: {
          duration: phase === "opening" || phase === "closing" ? 0.35 : 0,
          ease: "easeInOut",
        },
      }}
      onClick={() => onToggle(skill.id)}
      className={`border rounded-lg ${
        isOpen
          ? "order-first col-span-2 landscape:max-lg:col-span-1 lg:row-span-full landscape:row-span-full bg-bg-secondary dark:bg-bg-secondary overflow-hidden min-h-[70vh] flex flex-col "
          : "min-w-[40%] lg:min-w-[30%] "
      } mr-4 hover:cursor-pointer min-w-[26%]`}
    >
      <motion.div
        layout="position"
        className="flex flex-row justify-center text-font-accent dark:text-font-accent"
      >
        {skill.skills.map((s, i) => (
          <div
            key={i}
            className={`${i === 1 ? "bg-[#023e7d] pl-5 md:pl-8 -ml-6 md:-ml-8" : "bg-black "} p-3 flex gap-2 flex-1 ${
              !isOpen && "hover:flex-2"
            } group flex justify-center items-center transition-all duration-300`}
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
            {!isOpen ? (
              <h4 className="hidden xl:block max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-32 group-hover:opacity-100 transition-all duration-500 xl:text-sm lg:text-base">
                {s.toUpperCase()}
              </h4>
            ) : (
              <h4 className="xl:text-lg landscape:max-lg:text-sm pr-8 sm:pr-4 md:pr-2 lg:pr-0">
                {s.toUpperCase()}
              </h4>
            )}
          </div>
        ))}
      </motion.div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.35, ease: "easeInOut" },
              opacity: { duration: 0.2 },
            }}
            className="flex flex-col align-center flex-1 overflow-hidden"
          >
            <div className="mt-4 min-h-[70%] flex-1 relative">
              <p className="text-center p-3">
                {skill.text}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate neque dolore sapiente eius exercitationem rerum
                necessitatibus quia unde consectetur similique omnis provident
                cum ut ullam esse id, veniam quas consequuntur.
              </p>
              <img
                src={bg}
                alt="Code Example"
                className="absolute opacity-70 bottom-0 w-full max-h-[45%] md:max-h-[60%] lg:max-h-[45%]"
              />
            </div>

            <hr />
            <div className="text-center p-3">
              <blockquote>{skill.quote}</blockquote>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default SkillCard;
