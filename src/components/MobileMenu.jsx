// eslint-disable-next-line
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ButtonsContainer from "./ButtonsContainer";

const navItems = [
  { name: "home", color: "bg-sky-500" },
  { name: "skills", color: "bg-sky-500" },
  { name: "projects", color: "bg-sky-500" },
  { name: "about", color: "bg-sky-500" },
  { name: "contact", color: "bg-sky-500" },
];

function MobileMenu({ open, setOpen, menuRef }) {
  const { t } = useTranslation();

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpen, menuRef]);

  // if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="flex flex-row lg:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <ul className="text-black bg-bg-mobile-menu dark:bg-bg-mobile-menu fixed  left-0 pl-4 pt-1 pb-1  flex flex-col gap-2 min-w-screen uppercase text-lg border-t-2 dark:border-t-0 border-black dark:border-none transition-colors duration-300">
            {navItems.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.2, delay: open ? i * 0.3 : 0 }}
              >
                <a
                  href={`#${item.name}`}
                  onClick={() => setOpen(false)}
                  className="relative inline-block text-sm xl:text-base px-1 py-2 uppercase tracking-[0.2em] perspective-[1000px] overflow-hidden"
                >
                  <span className="block transition-colors duration-200  z-1111">
                    {t(`menu.${item.name}`)}
                  </span>
                  <span
                    className={`absolute -left-px xl:left-2 rounded top-[15%] xl:top-[21%] px-0.5 pl-1 py-1 text-white ${item.color} origin-left transition-transform duration-500 ease-out ${
                      activeSection === item.name
                        ? "translate-x-0"
                        : "-translate-x-full pointer-events-none"
                    }`}
                  >
                    {t(`menu.${item.name}`)}
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>

          <ButtonsContainer
            styles={"fixed top-21 right-4 flex flex-row gap-5"}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
// import { useEffect, useState } from "react";
// import ButtonsContainer from "./ButtonsContainer";
// import { useTranslation } from "react-i18next";

// const navItems = [
//   { name: "home", color: "bg-sky-500" },
//   { name: "skills", color: "bg-sky-500" },
//   { name: "projects", color: "bg-sky-500" },
//   { name: "about", color: "bg-sky-500" },
//   { name: "contact", color: "bg-sky-500" },
// ];

// function MobileMenu({ open, setOpen, menuRef }) {
//   const { t } = useTranslation();

//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const sections = document.querySelectorAll("section");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.3 },
//     );

//     sections.forEach((section) => observer.observe(section));

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [setOpen, menuRef]);

//   if (!open) return null;

//   return (
//     <div className="flex flex-row lg:hidden">
//       <ul className="text-black bg-bg-mobile-menu dark:bg-bg-mobile-menu fixed  left-0 pl-4 pt-1 pb-1  flex flex-col gap-2 min-w-screen uppercase text-lg border-t-2 dark:border-t-0 border-black dark:border-none transition-colors duration-300">
//         {navItems.map((item) => (
//           <li key={item.name} onClick={() => setOpen(false)}>
//             <a
//               href={`#${item.name}`}
//               className="relative block text-sm xl:text-base px-1 py-3 xl:px-3 xl:py-4 uppercase tracking-[0.2em]  [perspective:1000px] overflow-hidden"
//             >
//               <span className="block transition-colors duration-200  z-1111">
//                 {t(`menu.${item.name}`)}
//               </span>
//               <span
//                 className={`absolute left-[-1px] xl:left-[8px] rounded top-[15%] xl:top-[21%] px-0.5 pl-1 py-1 text-white ${item.color} origin-left transition-transform duration-500 ease-out ${
//                   activeSection === item.name
//                     ? "translate-x-0"
//                     : "-translate-x-full pointer-events-none"
//                 }`}
//               >
//                 {t(`menu.${item.name}`)}
//               </span>
//             </a>
//           </li>
//         ))}
//       </ul>

//       <ButtonsContainer styles={"fixed top-21 right-4 flex flex-row gap-5"} />
//     </div>
//   );
// }

// export default MobileMenu;
