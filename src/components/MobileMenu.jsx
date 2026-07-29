// import { useEffect, useState } from "react";
// import ButtonLangChange from "./ButtonLangChange";
// import ButtonThemeToggle from "./ButtonThemeToggle";

// function MobileMenu() {
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const sections = document.querySelectorAll("section");

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(
//         (entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         },
//         { threshold: 0.6 },
//       );
//     });

//     sections.forEach((section) => observer.observe(section));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="flex flex-row">
//       <div className=" text-black bg-white fixed top-18 left-0  pl-4 pt-2 pb-4 mt-1 flex flex-col gap-5 min-w-screen  uppercase text-lg">
//         <a href="#home" className="cursor-pointer">
//           <span
//             className={`cursor-pointer inline ${activeSection === "home" && "border-b-2   border-stone-700"}`}
//           >
//             home
//           </span>
//         </a>
//         <a href="#skills" className="cursor-pointer">
//           <span
//             className={`cursor-pointer inline ${activeSection === "skills" && "border-b-2   border-stone-700"}`}
//           >
//             skills
//           </span>
//         </a>
//         <a href="#projects" className="cursor-pointer">
//           <span
//             className={`cursor-pointer inline ${activeSection === "projects" && "border-b-2   border-stone-700"}`}
//           >
//             projects
//           </span>
//         </a>
//         <a href="#about" className="cursor-pointer">
//           <span
//             className={`cursor-pointer inline ${activeSection === "about" && "border-b-2   border-stone-700"}`}
//           >
//             about
//           </span>
//         </a>
//         <a href="#contact" className="cursor-pointer">
//           <span
//             className={`cursor-pointer inline ${activeSection === "contact" && "border-b-2   border-stone-700"}`}
//           >
//             contact
//           </span>
//         </a>
//       </div>
//       <div className="fixed top-21 right-4 flex flex-row gap-5">
//         <ButtonLangChange />
//         <ButtonThemeToggle />
//       </div>
//     </div>
//   );
// }

// export default MobileMenu;

import { useEffect, useState } from "react";
import ButtonLangChange from "./ButtonLangChange";
import ButtonThemeToggle from "./ButtonThemeToggle";
import ButtonsContainer from "./ButtonsContainer";

function MobileMenu({ open, setOpen, menuRef }) {
  const [activeSection, setActiveSection] = useState("home");
  // const [open, setOpen] = useState(true);

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
      { threshold: 0.6 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // 🔑 Close menu when clicking outside
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

  if (!open) return null; // hide menu when closed

  return (
    <div className="flex flex-row lg:hidden">
      <div className="text-black bg-white fixed top-18 left-0 pl-4 pt-2 pb-4 mt-1 flex flex-col gap-5 min-w-screen uppercase text-lg">
        <a href="#home" onClick={() => setOpen(false)}>
          <span
            className={`cursor-pointer inline ${
              activeSection === "home" && "border-b-2 border-stone-700"
            }`}
          >
            home
          </span>
        </a>
        <a href="#skills" onClick={() => setOpen(false)}>
          <span
            className={`cursor-pointer inline ${
              activeSection === "skills" && "border-b-2 border-stone-700"
            }`}
          >
            skills
          </span>
        </a>
        <a href="#projects" onClick={() => setOpen(false)}>
          <span
            className={`cursor-pointer inline ${
              activeSection === "projects" && "border-b-2 border-stone-700"
            }`}
          >
            projects
          </span>
        </a>
        <a href="#about" onClick={() => setOpen(false)}>
          <span
            className={`cursor-pointer inline ${
              activeSection === "about" && "border-b-2 border-stone-700"
            }`}
          >
            about
          </span>
        </a>
        <a href="#contact" onClick={() => setOpen(false)}>
          <span
            className={`cursor-pointer inline ${
              activeSection === "contact" && "border-b-2 border-stone-700"
            }`}
          >
            contact
          </span>
        </a>
      </div>
      {/* <div className="fixed top-21 right-4 flex flex-row gap-5">
        <ButtonLangChange />
        <ButtonThemeToggle />
      </div> */}
      <ButtonsContainer styles={"fixed top-21 right-4 flex flex-row gap-5"} />
    </div>
  );
}

export default MobileMenu;
