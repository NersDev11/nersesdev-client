import MessageMe from "./MessageMe";
import MyLinks from "./MyLinks";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-bg-primary dark:bg-bg-primary pt-23 pb-5  min-h-screen transition-colors duration-500 flex flex-col items-center"
    >
      <div className="w-[90svw] sm:w-140 md:w-170 lg:w-230 xl:w-280 2xl:w-320 flex flex-col items-center">
        <div className="flex flex-col lg:flex-row gap-x-16 xl:gap-x-26 2xl:gap-x-46 w-full">
          <MessageMe />
          <MyLinks />
        </div>
      </div>
    </section>
  );
}

export default Contact;
