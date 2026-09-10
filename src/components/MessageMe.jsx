import { useState } from "react";
import ServerError from "./ServerError";
import { useTranslation } from "react-i18next";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};

    // Name requirements
    if (!name.trim()) {
      newErrors.name = t("contact.inputErrors.nameRequired");
    } else if (name.trim().length < 2) {
      newErrors.name = t("contact.inputErrors.nameTooShort");
    } else if (name.trim().length > 60) {
      newErrors.name = t("contact.inputErrors.nameTooLong");
    }

    // Email requirements
    if (!email.trim()) {
      newErrors.email = t("contact.inputErrors.emailRequired");
    } else if (!EMAIL_REGEX.test(email.trim())) {
      newErrors.email = t("contact.inputErrors.emailInvalid");
    }

    // Subject requirements
    if (!subject.trim()) {
      newErrors.subject = t("contact.inputErrors.subjectRequired");
    } else if (subject.trim().length < 3) {
      newErrors.subject = t("contact.inputErrors.subjectTooShort");
    } else if (subject.trim().length > 100) {
      newErrors.subject = t("contact.inputErrors.subjectTooLong");
    }

    // Message requirements
    if (!text.trim()) {
      newErrors.text = t("contact.inputErrors.messageRequired");
    } else if (text.trim().length < 10) {
      newErrors.text = t("contact.inputErrors.messageTooShort");
    } else if (text.trim().length > 2000) {
      newErrors.text = t("contact.inputErrors.messageTooLong");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function clearError(field) {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    const message = { name, lastName, email, subject, text, date: Date.now() };

    setIsLoading(true);
    setServerError(false);

    try {
      console.log(message);
      await sendMessage(message);

      setIsMessageSent(true);
      notifyMessageSent();
      setName("");
      setEmail("");
      setSubject("");
      setText("");
      setErrors({});
    } catch (err) {
      console.log(err.message);
      setServerError(true);
    } finally {
      setIsLoading(false);
    }
  }

  function notifyMessageSent() {
    setTimeout(() => {
      setIsMessageSent(false);
    }, 4000);
  }

  async function sendMessage(message) {
    const res = await fetch("http://localhost:3000/api/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });

    if (!res.ok) throw new Error("Server error");
  }

  return (
    <div className="relative transition-colors duration-500 border-gray-600 bg-form-bg dark:bg-form-bg border rounded-lg  w-full mt-16 lg:flex-3 2xl:flex-3 overflow-hidden">
      <h3 className="text-lg font-light  ml-5 mt-5 mb-1 uppercase text-font-form dark:text-font-form">
        {t("contact.h3")}
      </h3>
      <h4 className="ml-5 mb-3 text-4xl py-1">{t("contact.h4")}</h4>
      <p className="ml-5 mb-6">{t("contact.let's")}</p>
      {serverError && <ServerError handleClose={() => setServerError(false)} />}
      {isMessageSent ? (
        <p className="text-center mx-5 py-15 text-2xl overflow-hidden border-t-2 border-border dark:border-border flex flex-col gap-2">
          <span className="overflow-hidden">{t("contact.thanks")}</span>
          <span className="overflow-hidden">{t("contact.inTouch")}</span>
        </p>
      ) : (
        <form
          noValidate
          className="flex flex-col gap-4 ml-4.5 text-font-form dark:text-font-form "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2 ml-1 ">
            <label htmlFor="name">{t("contact.name")}</label>
            <input
              className={`border bg-form-field dark:bg-form-field w-[94%] p-2.5 rounded focus:outline-0 text-font-form-input dark:text-font-form-input ${
                errors.name ? "border-error" : "border-border-input"
              }`}
              type="text"
              placeholder={`${t("contact.namePlaceholder")} *`}
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                clearError("name");
              }}
            />
            {errors.name && (
              <span className="text-error text-sm">{errors.name}</span>
            )}
          </div>

          {/* HoneyPot */}
          <div className="flex-col gap-2 ml-1 ">
            <label htmlFor="lastName">Last name</label>
            <input
              className="border-border-input border bg-form-field dark:bg-form-field w-[94%] p-2.5 rounded focus:outline-0 text-font-form-input  dark:text-font-form-input"
              type="text"
              placeholder="last name"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col gap-2 ml-1">
            <label htmlFor="email">{t("contact.email")}</label>
            <input
              className={`border bg-form-field dark:bg-form-field w-[94%] p-2.5 rounded focus:outline-0 text-font-form-input dark:text-font-form-input ${
                errors.email ? "border-error" : "border-border-input"
              }`}
              type="text"
              placeholder={`${t("contact.emailPlaceholder")} *`}
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                clearError("email");
              }}
            />
            {errors.email && (
              <span className="text-error text-sm">{errors.email}</span>
            )}
          </div>

          <div className="flex flex-col gap-2 ml-1">
            <label htmlFor="subject">{t("contact.subject")}</label>
            <input
              className={`border bg-form-field dark:bg-form-field w-[94%] p-2.5 rounded focus:outline-0 text-font-form-input dark:text-font-form-input ${
                errors.subject ? "border-error" : "border-border-input"
              }`}
              type="text"
              placeholder={`${t("contact.subjectPlaceholder")} *`}
              id="subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
                clearError("subject");
              }}
            />
            {errors.subject && (
              <span className="text-error text-sm">{errors.subject}</span>
            )}
          </div>

          <div className="flex flex-col gap-2 ml-1">
            <label htmlFor="message">{t("contact.message")}</label>
            <textarea
              className={`border bg-form-field dark:bg-form-field w-[94%] h-30 p-2.5 rounded focus:outline-0 text-font-form-input dark:text-font-form-input ${
                errors.text ? "border-error" : "border-border-input"
              }`}
              id="message"
              placeholder={`${t("contact.messagePlaceholder")} *`}
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                clearError("text");
              }}
            />
            {errors.text && (
              <span className="text-error text-sm">{errors.text}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-button-submit dark:bg-button-submit hover:border border-border-input ml-1 hover:bg-form-field cursor-pointer w-[93%] h-10 mb-6 rounded text-font-form-button dark:text-font-form-button hover:text-font-form-button-hover dark:hover:text-font-form-button-hover font-semibold  text-center transition-colors duration-300
            shadow-[0_2px_4px_rgba(0,0,0,0.06),0_6px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.08),0_10px_24px_rgba(0,0,0,0.08)] hover:-translate-y-px"
          >
            {isLoading ? t("contact.sending") : t("contact.send")}
          </button>
        </form>
      )}
    </div>
  );
}

export default MessageMe;
