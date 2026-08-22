import emailIcon from "../assets/iconEmail.png";
import facebookIcon from "../assets/iconFacebook.png";
import linkedinIcon from "../assets/iconLinkedin.png";
import githubIcon from "../assets/iconGithub.png";
import telegramIcon from "../assets/iconTelegram.png";
import { useTranslation } from "react-i18next";

function MyLinks() {
  const { t } = useTranslation();

  return (
    <div className="mt-4 mb-12  lg:mt-7 lg:flex-2 2xl:flex-2">
      {/* <div className="mt-4 mb-12 ml-7 lg:ml-0 lg:mt-7 lg:flex-2 2xl:flex-1"> */}
      <h3 className="my-7 mx-4 p-1 text-2xl font-bold">{t("contact.links")}</h3>
      <ul className="mt-2 ml-4 flex flex-col gap-3 lg:gap-5 font-bold text-2xl">
        <li>
          <a
            className=" flex gap-4 w-fit group"
            href="mailto:nersesbalayan@gmail.com"
          >
            <div className="h-[60px] border-gray-500 group-hover:border-blue-800 border-2 rounded-lg bg-zinc-900 overflow-hidden transition-colors duration-300">
              <img src={emailIcon} alt="" className="w-[60px] pt-1" />
            </div>
            <span className="pt-3 group-hover:">Gmail</span>
          </a>
        </li>

        <li>
          <a
            className=" flex gap-4 w-fit group"
            href="https://github.com/NersDev11"
          >
            <div className="h-[60px] border-gray-500 group-hover:border-blue-800 border-2 rounded-lg bg-zinc-900 overflow-hidden transition-colors duration-300">
              <img src={githubIcon} alt="" className="w-[60px]" />
            </div>
            <span className="pt-3 group-hover:">GitHub</span>
          </a>
        </li>
        <li>
          <a
            className=" flex gap-4 w-fit group"
            href="https://www.linkedin.com/in/%D0%BD%D0%B5%D1%80%D1%81%D0%B5%D1%81-%D0%B1%D0%B0%D0%BB%D0%B0%D1%8F%D0%BD-051aba396/?locale=en-US"
          >
            <div className="h-[60px] border-gray-500 group-hover:border-blue-800 border-2 rounded-lg bg-zinc-900 overflow-hidden transition-colors duration-300">
              <img src={linkedinIcon} alt="" className="w-[60px]" />
            </div>
            <span className="pt-3 group-hover:">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            className=" flex gap-4 w-fit group"
            href="https://www.facebook.com/nerses.balayan"
          >
            <div className="h-[60px] border-gray-500 group-hover:border-blue-800 border-2 rounded-lg bg-zinc-900 overflow-hidden transition-colors duration-300">
              <img src={facebookIcon} alt="" className="w-[60px]" />
            </div>
            <span className="pt-3 group-hover:">Facebook</span>
          </a>
        </li>
        <li>
          <a className="flex gap-4 w-fit group" href="https://t.me/NersesB">
            <div className="h-[60px] border-gray-500 group-hover:border-blue-800 border-2 rounded-lg bg-zinc-900 overflow-hidden transition-colors duration-300">
              <img src={telegramIcon} alt="" className="w-[60px]" />
            </div>
            <span className="pt-3 group-hover:">Telegram</span>
          </a>
        </li>
        {/* <li className="flex gap-4 ">
          <div className="h-[60px] border-gray-500 border-2 rounded-lg bg-zinc-900">
            <img src={emailIcon} alt="" className="w-[60px] pt-1" />
          </div>
          <a
            className="p-1 pt-3 font-bold text-2xl"
            href="mailto:nersesbalayan@gmail.com"
          >
            Gmail
          </a>
        </li> */}
        {/* <li className="flex gap-4">
          <div className=" border-gray-500 border-2 rounded-lg bg-zinc-900">
            <img src={githubIcon} alt="" className="w-[60px]" />
          </div>
          <a
            className="p-1 pt-3 font-bold text-2xl"
            href="https://github.com/NersDev11"
          >
            GitHub
          </a>
        </li> */}
        {/* <li className="flex gap-4 ">
          <div className=" border-gray-500 border-2 rounded-lg bg-zinc-900">
            <img src={linkedinIcon} alt="" className="w-[60px]" />
          </div>
          <a
            className="p-1 pt-3 font-bold text-2xl"
            href="https://www.linkedin.com/in/%D0%BD%D0%B5%D1%80%D1%81%D0%B5%D1%81-%D0%B1%D0%B0%D0%BB%D0%B0%D1%8F%D0%BD-051aba396/?locale=en-US"
          >
            Linkedin
          </a>
        </li> */}
        {/* <li className="flex gap-4">
          <div className=" border-gray-500 border-2 rounded-lg bg-zinc-900">
            <img src={facebookIcon} alt="" className="w-[60px]" />
          </div>
          <a
            className="p-1 pt-3 font-bold text-2xl"
            href="https://www.facebook.com/nerses.balayan"
          >
            Facebook
          </a>
        </li> */}
        {/* <li className="flex gap-4">
          <div className=" border-gray-500 border-2 rounded-lg bg-zinc-900">
            <img src={telegramIcon} alt="" className="w-[60px]" />
          </div>
          <a
            className="p-1 pt-3 font-bold text-2xl"
            href="https://t.me/NersesB"
          >
            Telegram
          </a>
        </li> */}
      </ul>
    </div>
  );
}

export default MyLinks;
