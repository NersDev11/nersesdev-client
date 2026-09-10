import { useTranslation } from "react-i18next";
// eslint-disable-next-line
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "../context/useTheme";

function SkillCardOpened({ skill, bg }) {
  const [Icon1, Icon2] = skill.icons;
  const { t } = useTranslation();

  const { theme } = useTheme();

  return (
    <div className="order-first col-span-2 lg:row-span-full landscape:row-span-full  overflow-hidden min-h-[70vh] flex flex-col mr-4 min-w-[26%] ">
      <AnimatePresence mode="wait">
        <motion.div
          key={skill.id}
          initial={{ opacity: 0, y: 800 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 400 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex-1 glow-border"
        >
          <div className="border rounded-lg bg-bg-secondary dark:bg-bg-secondary h-full flex flex-col ">
            <div className="flex flex-row justify-center text-font-accent dark:text-font-accent">
              {skill.skills.map((s, i) => (
                <div
                  className={`${i === 1 ? "bg-skill-card-secondary pl-5 md:pl-8 -ml-6 md:-ml-8" : "bg-skill-card-primary "} p-3 gap-2 flex-1 group flex justify-center items-center transition-all duration-300`}
                  style={{
                    clipPath:
                      skill.skills.length === 2 && i === 1
                        ? "polygon(24px 0, 100% 0, 100% 100%, 0 100%)"
                        : "none",
                  }}
                  key={skill.skills.length - i}
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

            <div className="flex flex-col align-center flex-1">
              <div className="mt-4 min-h-[70%] flex-1 relative flex flex-col justify-between">
                <p className="p-3 px-6 text-left whitespace-pre-line ">
                  {t(`skills.${skill.name}.mainContent`)}
                </p>

                <div className="relative w-full max-h-[45%] md:max-h-[60%] lg:max-h-[45%]">
                  <img src={bg} alt="Code Example" className="w-full h-full" />
                  <div
                    className="absolute top-0 inset-0 bg-black"
                    style={
                      theme === "dark" ? { opacity: 0.5 } : { opacity: 0.3 }
                    }
                  ></div>
                </div>
              </div>
              <hr />
              <div className="text-center p-3">
                <blockquote>{t(`skills.${skill.name}.quote`)}</blockquote>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default SkillCardOpened;
