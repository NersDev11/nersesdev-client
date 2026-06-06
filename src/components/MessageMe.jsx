import { useState } from "react";

function MessageMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !subject || !text) return;
    const message = { name, email, subject, text, date: Date.now() };

    setIsLoading(true);

    try {
      console.log(isLoading);
      await sendMessage(message);
    } catch (err) {
      alert(err.message);
      setIsLoading(false);
    } finally {
      console.log(isLoading);
    }

    setName("");
    setEmail("");
    setSubject("");
    setText("");
  }

  function notifyMessageSent() {
    setTimeout(() => {
      setIsMessageSent(false);
    }, 7000);
  }

  async function sendMessage(message) {
    // const res = await fetch("", {
    //   method: "Post",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(message),
    // });
    // const data = await res.json();
    // alert(data.message);
    setTimeout(() => {
      console.log(message.text);
      setIsLoading(false);
      setIsMessageSent(true);
      notifyMessageSent();
    }, 2000);
  }

  return (
    <div className="transition-colors duration-500 border-gray-600 dark:bg-form-bg border rounded-lg  mx-10 lg:mx-35 mt-16 w-130 lg:w-160 ">
      <h3 className="text-lg font-light  ml-7 mt-5 mb-1 uppercase text-font-form dark:text-font-form">
        Get in Touch
      </h3>
      <h4 className="ml-7 mb-3 text-4xl py-1">Message Me</h4>
      <p className="ml-7 mb-6">Get in touch with me.</p>
      {isMessageSent ? (
        <p className="text-center pt-20 text-2xl">
          Thank you for contacting me! I'll be in touch soon)
        </p>
      ) : (
        <form
          action=""
          className="flex flex-col gap-4 ml-6 text-font-form dark:text-font-form "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2 ml-1 ">
            <label htmlFor="name">First name</label>
            <input
              className="border-gray-500 border dark:bg-form-field w-[94%] p-2.5 rounded focus:outline-0 text-font-form-input"
              type="text"
              placeholder="Name *"
              htmlFor="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 ml-1">
            <label htmlFor="email">Your Email</label>
            <input
              className="border-gray-500 border dark:bg-form-field w-[94%] p-2.5 rounded focus:outline-0 text-font-form-input"
              type="text"
              placeholder="Email *"
              htmlFor="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 ml-1">
            <label htmlFor="subject">Subject</label>
            <input
              className="border-gray-500 border dark:bg-form-field w-[94%] p-2.5 rounded focus:outline-0 text-font-form-input"
              type="text"
              placeholder="Subject *"
              htmlFor="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 ml-1">
            <label htmlFor="message">Your message</label>
            <textarea
              className="border-gray-500 border dark:bg-form-field w-[94%] h-30 p-2.5 rounded focus:outline-0 text-font-form-input"
              type="text"
              htmlFor="message"
              id="message"
              placeholder="Message *"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="dark:bg-button-submit hover:border border-gray-500 ml-1 hover:bg-form-field cursor-pointer w-[94%] h-10 mb-6 rounded dark:text-black dark:hover:text-font-primary font-semibold  text-center transition-colors duration-300"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}

export default MessageMe;
