function MessageMe() {
  return (
    <div className="border-gray-600 border rounded-lg mx-3 mt-16">
      <h3 className="text-lg font-light  ml-7 mt-6 mb-3 uppercase">
        Get in Touch
      </h3>
      <h4 className="ml-7 mb-6 text-4xl py-1">Message Me</h4>
      <p className="ml-7 mb-6">
        Get in touch with us for any kind of help. We are here to give you the
        best and also here to help you to find your projects.
      </p>
      <form action="" className="flex flex-col gap-7 ml-6">
        <div className="flex flex-col gap-2 ml-1 ">
          <label htmlFor="name">First name</label>
          <input
            className="border-gray-500 border bg-gray-700 w-[94%] p-2.5 rounded focus:outline-0"
            type="text"
            placeholder="Name *"
            htmlFor="name"
            id="name"
          />
        </div>
        <div className="flex flex-col gap-2 ml-1">
          <label htmlFor="email">Your Email</label>
          <input
            className="border-gray-500 border bg-gray-700 w-[94%] p-2.5 rounded focus:outline-0"
            type="text"
            placeholder="Email *"
            htmlFor="email"
            id="email"
          />
        </div>
        <div className="flex flex-col gap-2 ml-1">
          <label htmlFor="subject">Subject</label>
          <input
            className="border-gray-500 border bg-gray-700 w-[94%] p-2.5 rounded focus:outline-0"
            type="text"
            placeholder="Subject *"
            htmlFor="subject"
            id="subject"
          />
        </div>
        <div className="flex flex-col gap-2 ml-1">
          <label htmlFor="message">Your message</label>
          <textarea
            className="border-gray-500 border bg-gray-700 w-[94%] h-30 p-2.5 rounded focus:outline-0"
            type="text"
            htmlFor="message"
            id="message"
            placeholder="Message *"
          />
        </div>

        <button
          type="submit"
          className="bg-white ml-1 hover:bg-gray-600 cursor-pointer w-[94%] h-10 mb-6 rounded text-gray-900 hover:text-stone-200 text-center"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default MessageMe;
