import MessageMe from "./MessageMe";
import MyLinks from "./MyLinks";

function Contact() {
  return (
    <section id="contact" className="bg-black pt-23 pb-5 min-h-screen ">
      <div>
        <MessageMe />
        <MyLinks />
      </div>
    </section>
  );
}

export default Contact;
