import emailIcon from "../assets/nemailicon.png";
import facebookIcon from "../assets/nfaceicon.png";
import linkedinIcon from "../assets/nlinkicon.png";
import githubIcon from "../assets/ngiticon.png";
import telegramIcon from "../assets/ntelicon.png";

function MyLinks() {
  return (
    <div className="mt-4 mb-12 ml-7 lg:ml-0 lg:mt-7">
      <h3 className="my-7 mx-4 p-1 text-2xl font-bold">My Links</h3>
      <ul className="mt-2 ml-4 flex flex-col gap-3 lg:gap-5 text-lg font-semibold">
        <li className="flex gap-4 ">
          <div className="h-[60px] border-gray-500 border-2 rounded-lg bg-zinc-900">
            <img src={emailIcon} alt="" className="w-[60px] pt-1" />
          </div>
          <a
            className="p-1 pt-3 font-bold text-2xl"
            href="mailto:nersesbalayan@gmail.com"
          >
            Gmail
          </a>
        </li>
        <li className="flex gap-4">
          <div className=" border-gray-500 border-2 rounded-lg bg-zinc-900">
            <img src={githubIcon} alt="" className="w-[60px]" />
          </div>
          <a
            className="p-1 pt-3 font-bold text-2xl"
            href="https://github.com/NersDev11"
          >
            GitHub
          </a>
        </li>
        <li className="flex gap-4 ">
          <div className=" border-gray-500 border-2 rounded-lg bg-zinc-900">
            <img src={linkedinIcon} alt="" className="w-[60px]" />
          </div>
          <a
            className="p-1 pt-3 font-bold text-2xl"
            href="https://www.linkedin.com/in/%D0%BD%D0%B5%D1%80%D1%81%D0%B5%D1%81-%D0%B1%D0%B0%D0%BB%D0%B0%D1%8F%D0%BD-051aba396/?locale=en-US"
          >
            Linkedin
          </a>
        </li>
        <li className="flex gap-4">
          <div className=" border-gray-500 border-2 rounded-lg bg-zinc-900">
            <img src={facebookIcon} alt="" className="w-[60px]" />
          </div>
          <a
            className="p-1 pt-3 font-bold text-2xl"
            href="https://www.facebook.com/nerses.balayan"
          >
            Facebook
          </a>
        </li>
        <li className="flex gap-4">
          <div className=" border-gray-500 border-2 rounded-lg bg-zinc-900">
            <img src={telegramIcon} alt="" className="w-[60px]" />
          </div>
          <a
            className="p-1 pt-3 font-bold text-2xl"
            href="https://t.me/NersesB"
          >
            Telegram
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MyLinks;
