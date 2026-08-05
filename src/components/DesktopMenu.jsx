// function DesktopMenu() {
//   return (
//     <div className="hidden lg:flex lg:flex-row lg:justify-center lg:pt-5 lg:pl-13 xl:pl-11 2xl:pl-9">
//       <ul className="flex md:gap-2 lg:gap-4 xl:gap-7 2xl:gap-10">
//         <li className="">
//           <a href="#home">home</a>
//         </li>
//         <li>
//           <a href="#skills">skills</a>
//         </li>
//         <li>
//           <a href="#projects">projects</a>
//         </li>
//         <li>
//           <a href="#about">about</a>
//         </li>
//         <li>
//           <a href="#contact">contact</a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default DesktopMenu;

// const navItems = [
//   { name: "home", color: "bg-sky-500" },
//   { name: "skills", color: "bg-yellow-400" },
//   { name: "projects", color: "bg-teal-500" },
//   { name: "about", color: "bg-red-500" },
//   { name: "contact", color: "bg-red-500" },
// ];

// function DesktopMenu() {
//   return (
//     <div className="hidden lg:flex ">
//       <ul className="flex gap-0">
//         {navItems.map((item) => (
//           <li key={item.name} className="m-0 p-0">
//             <a
//               href={`#${item.name}`}
//               className="group relative block overflow-visible px-7 py-6 uppercase tracking-[0.2em] text-slate-400 [perspective:1000px]"
//             >
//               {/* Front face */}
//               <span className="block transition-colors duration-300 group-hover:text-white">
//                 {item.name}
//               </span>

//               {/* Flipping face */}
//               <span
//                 className={`
//                   absolute left-[18px] top-[29%]
//                   px-2 py-1 text-white
//                   ${item.color}
//                   origin-top
//                   [backface-visibility:hidden]
//                   [transform:translateY(105%)_rotateX(-112deg)]
//                   transition-transform duration-200 ease-out
//                   group-hover:[transform:rotateX(0deg)_translateZ(0)]
//                 `}
//               >
//                 {item.name}
//               </span>
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default DesktopMenu;

const navItems = [
  { name: "home", color: "bg-sky-500" },
  { name: "skills", color: "bg-sky-500" },
  { name: "projects", color: "bg-sky-500" },
  { name: "about", color: "bg-sky-500" },
  { name: "contact", color: "bg-sky-500" },
];

export default function DesktopMenu() {
  return (
    <div className="hidden lg:flex lg:flex-row lg:justify-center lg:pt-2 lg:pl-13 xl:pl-11 2xl:pl-9">
      <ul className="flex lg:gap-1 xl:gap-0 w-full">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={`#${item.name}`}
              className="group relative block text-sm xl:text-base px-1 py-3 xl:px-3 xl:py-4 uppercase tracking-[0.2em]  [perspective:1000px] overflow-hidden"
            >
              <span className="block transition-colors duration-200 group-hover:text-white z-1111">
                {item.name}
              </span>

              <span
                className={`
                  absolute left-[-1px] xl:left-[8px] rounded top-[15%] xl:top-[21%]
                  px-0.5 pl-1 py-1 text-white
                  ${item.color}
                  origin-top
                  [backface-visibility:hidden]
                  [transform:translateY(100%)_rotateX(-112deg)]
                  transition-transform duration-300 ease-out
                  group-hover:[transform:rotateX(0deg)_translateZ(0)]
                `}
              >
                {item.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
