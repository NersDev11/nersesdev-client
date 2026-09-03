// Dark icons
import emailIconDark from "../assets/iconGmailDark.png";
import facebookIconDark from "../assets/iconFacebookDark.png";
import linkedinIconDark from "../assets/iconLinkedinDark.png";
import githubIconDark from "../assets/iconGithubDark.png";
import telegramIconDark from "../assets/iconTelegramDark.png";

// Light icons
import emailIconLight from "../assets/iconGmailLight.png";
import facebookIconLight from "../assets/iconFacebookLight.png";
import linkedinIconLight from "../assets/iconLinkedinLight.png";
import githubIconLight from "../assets/iconGithubLight.png";
import telegramIconLight from "../assets/iconTelegramLight.png";

import { useTranslation } from "react-i18next";
import MyLink from "./MyLink";

const links = [
  {
    id: 1,
    text: "Gmail",
    iconDark: emailIconDark,
    iconLight: emailIconLight,
    href: "mailto:nersesbalayan@gmail.com",
  },
  {
    id: 2,
    text: "GitHub",
    iconDark: githubIconDark,
    iconLight: githubIconLight,
    href: "https://github.com/NersDev11",
  },
  {
    id: 3,
    text: "LinkedIn",
    iconDark: linkedinIconDark,
    iconLight: linkedinIconLight,
    href: "https://www.linkedin.com/in/%D0%BD%D0%B5%D1%80%D1%81%D0%B5%D1%81-%D0%B1%D0%B0%D0%BB%D0%B0%D1%8F%D0%BD-051aba396/?locale=en-US",
  },
  {
    id: 4,
    text: "Facebook",
    iconDark: facebookIconDark,
    iconLight: facebookIconLight,
    href: "https://www.facebook.com/nerses.balayan",
  },
  {
    id: 5,
    text: "Telegram",
    iconDark: telegramIconDark,
    iconLight: telegramIconLight,
    href: "https://t.me/NersesB",
  },
];

function MyLinks() {
  const { t } = useTranslation();

  return (
    <div className="mt-4 mb-12  lg:mt-7 lg:flex-2 2xl:flex-2">
      <h3 className="my-7 mx-4 p-1 text-2xl font-bold">{t("contact.links")}</h3>
      <ul
        translate="no"
        className="mt-2 ml-4 flex flex-col gap-3 lg:gap-5 font-bold text-2xl"
      >
        {links.map((l) => (
          <li key={l.id}>
            <MyLink link={l} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyLinks;
