/* eslint-disable react/no-unescaped-entities */
import CTA from "./CTA";
import Socials from "./Header_socials";
import "./header.css";
import Me from "../../assets/me.jpg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Alique VSI Nyirongo</h1>
        <h5 className="text-light">Full stack Developer</h5>

        <CTA />

        <Socials />

        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
