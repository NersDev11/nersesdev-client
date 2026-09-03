import { useTheme } from "../context/useTheme";

function MyLink({ link }) {
  const { theme } = useTheme();

  return (
    <a
      className=" flex gap-4 w-fit group"
      rel="noopenner noreferrer"
      target="_blank"
      href={link.href}
    >
      <div className="h-[60px] border-2 border-black/1 group-hover:border-link-border group-hover:dark:border-link-border  group-hover:border-2 rounded-lg  overflow-hidden transition-colors duration-300 flex justify-center items-center">
        <img
          src={theme === "dark" ? link.iconDark : link.iconLight}
          alt=""
          className="w-[60px]"
        />
      </div>
      <span className="pt-3 group-hover:">{link.text}</span>
    </a>
  );
}

export default MyLink;
