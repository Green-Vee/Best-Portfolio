import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        {/* UI / UX DESIGN ARTICLE */}

        <article className="service">
          <div className="service__head">
            <h3>UI/UX DESIGN </h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </li>
          </ul>
        </article>

        {/* WEB DEV ARTICLE */}

        <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMENT </h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </li>
          </ul>
        </article>

        {/* CONTENT CREATION ARTICLE */}

        <article className="service">
          <div className="service__head">
            <h3>CONTENT CREATION </h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
