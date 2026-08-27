import { useState } from "react";
import ServerError from "./ServerError";
import { useTranslation } from "react-i18next";

function MessageMe() {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [serverError, setServerError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !subject || !text) return;
    const message = { name, lastName, email, subject, text, date: Date.now() };

    setIsLoading(true);
    setServerError(false);

    try {
      console.log(isLoading);
      await sendMessage(message);

      notifyMessageSent();
      setName("");
      setEmail("");
      setSubject("");
      setText("");
    } catch (err) {
      console.log(err.message);
      setServerError(true);
    } finally {
      setIsLoading(false);
      console.log(isLoading);
    }
  }

  function notifyMessageSent() {
    setTimeout(() => {
      setIsMessageSent(false);
    }, 7000);
  }

  async function sendMessage(message) {
    const res = await fetch("http://localhost:3000/api/message", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });

    if (!res.ok) throw new Error("Server error");

    // alert(data);
    // setTimeout(() => {
    //   console.log(message.text);
    //   setIsLoading(false);
    //   setIsMessageSent(true);
    //   notifyMessageSent();
    // }, 2000);
  }

  return (
    <div className="relative transition-colors duration-500 border-gray-600 bg-form-bg dark:bg-form-bg border rounded-lg  w-full mt-16 lg:flex-3 2xl:flex-3 overflow-hidden">
      {/* <div className="relative transition-colors duration-500 border-gray-600 bg-form-bg dark:bg-form-bg border rounded-lg min-w-[90%] landscape:max-lg:w-[80%] md:min-w-auto  mx-4 lg:mx-15 2xl:mx-35 mt-16 lg:w-160 lg:flex-3 2xl:flex-1 overflow-hidden"> */}
      <h3 className="text-lg font-light  ml-5 mt-5 mb-1 uppercase text-font-form dark:text-font-form">
        {t("contact.h3")}
      </h3>
      <h4 className="ml-5 mb-3 text-4xl py-1">{t("contact.h4")}</h4>
      <p className="ml-5 mb-6">{t("contact.let's")}</p>
      {serverError && <ServerError handleClose={() => setServerError(false)} />}
      {isMessageSent ? (
        <p className="text-center mx-5 py-15 text-2xl overflow-hidden border-t-2 border-border dark:border-border flex flex-col gap-2">
          <span className="overflow-hidden">{t("contact.thanks")}</span>
          <span className="overflow-hidden">{t("contact.inTouch")})</span>
        </p>
      ) : (
        <form
          action=""
          className="flex flex-col gap-4 ml-4.5 text-font-form dark:text-font-form "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2 ml-1 ">
            <label className="" htmlFor="name">
              {t("contact.name")}
            </label>
            <input
              className="border-gray-500 border bg-form-field dark:bg-form-field w-[94%] p-2.5 rounded focus:outline-0 text-font-form-input  dark:text-font-form-input"
              type="text"
              placeholder={`${t("contact.namePlaceholder")} *`}
              htmlFor="name"
              id="name"
              value={name}
              required={true}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* HoneyPot */}
          <div className="flex-col gap-2 ml-1 hidden">
            <label htmlFor="name">Last name</label>
            <input
              className="border-gray-500 border bg-form-field dark:bg-form-field w-[94%] p-2.5 rounded focus:outline-0 text-font-form-input  dark:text-font-form-input"
              type="text"
              placeholder="last name"
              htmlFor="lastName"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 ml-1">
            <label htmlFor="email">{t("contact.email")}</label>
            <input
              className="border-gray-500 border bg-form-field dark:bg-form-field w-[94%] p-2.5 rounded focus:outline-0 text-font-form-input  dark:text-font-form-input"
              type="text"
              placeholder={`${t("contact.emailPlaceholder")} *`}
              htmlFor="email"
              id="email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 ml-1">
            <label htmlFor="subject">{t("contact.subject")}</label>
            <input
              className="border-gray-500 border bg-form-field dark:bg-form-field w-[94%] p-2.5 rounded focus:outline-0 text-font-form-input  dark:text-font-form-input"
              type="text"
              placeholder={`${t("contact.subjectPlaceholder")} *`}
              htmlFor="subject"
              id="subject"
              value={subject}
              required={true}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 ml-1">
            <label htmlFor="message">{t("contact.message")}</label>
            <textarea
              className="border-gray-500 border bg-form-field dark:bg-form-field w-[94%] h-30 p-2.5 rounded focus:outline-0 text-font-form-input dark:text-font-form-input"
              type="text"
              htmlFor="message"
              id="message"
              // placeholder="Message *"
              placeholder={`${t("contact.messagePlaceholder")} *`}
              value={text}
              required={true}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-button-submit dark:bg-button-submit hover:border border-gray-500 ml-1 hover:bg-form-field cursor-pointer w-[93%] h-10 mb-6 rounded text-font-form-button dark:text-font-form-button hover:text-font-form-button-hover dark:hover:text-font-form-button-hover font-semibold  text-center transition-colors duration-300"
          >
            {isLoading ? t("contact.sending") : t("contact.send")}
          </button>
        </form>
      )}
    </div>
  );
}

export default MessageMe;
