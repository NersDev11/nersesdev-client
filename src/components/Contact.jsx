import MessageMe from "./MessageMe";
import MyLinks from "./MyLinks";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-bg-primary dark:bg-bg-primary pt-23 pb-5 min-h-screen transition-colors duration-500"
    >
      <div className="lg:flex">
        <MessageMe />
        <MyLinks />
      </div>
    </section>
  );
}

export default Contact;
