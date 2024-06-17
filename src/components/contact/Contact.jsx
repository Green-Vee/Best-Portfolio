import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="cont-opt-icon" />
            <h4>Email</h4>
            <h5>Nalick4@gmail.com</h5>
            <a href="mailto:nalick4@gmail.com" target="_blank" rel="noreferrer">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="cont-opt-icon"/>
            <h4>Messenger</h4>
            <h5>Alique VSI Nyirongo</h5>
            <a href="m.facebook.com" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="cont-opt-icon"/>
            <h4>WhatsApp</h4>
            <h5>+265 888 216 159</h5>
            <a
              href="https//:whatsapp.com/send?phone=+265 888 216 159"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT */}

        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />

          <input type="email" name="email" id="" placeholder="Your Email" />

          <textarea
            name="message"
            id=""
            cols="30"
            rows="7"
            placeholder="Your messge Please"
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
