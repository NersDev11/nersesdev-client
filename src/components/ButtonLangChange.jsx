import { useTranslation } from "react-i18next";

function ButtonLangChange({ scrolled }) {
  const { i18n } = useTranslation();
  const otherLang = i18n.language === "en" ? "uk" : "en";
  const langLabel = otherLang === "en" ? "en" : "ua";

  function changeLang() {
    i18n.changeLanguage(otherLang);
  }

  return (
    <button
      onClick={changeLang}
      className={`select-none text-black w-8 h-8 m-0.5 lg:mt-0.75 ${scrolled ? "lg:text-black lg:hover:text-gray-700" : "lg:text-font-accent lg:hover:text-white lg:dark:hover:text-white"} lg:text-xl hover:cursor-pointer lg:hover:scale-105 uppercase font-bold flex justify-center items-center transition-all duration-300`}
    >
      <span translate="no" className="uppercase">
        {langLabel}
      </span>
    </button>
  );
}

export default ButtonLangChange;
