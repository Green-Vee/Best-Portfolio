import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Skills & Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="exp__details">
              <BsPatchCheckFill className="experience__details-icon" />

              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="exp__details">
              <BsPatchCheckFill className="experience__details-icon" />

              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="exp__details">
              <BsPatchCheckFill className="experience__details-icon" />

              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="exp__details">
              <BsPatchCheckFill className="experience__details-icon" />

              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="exp__details">
              <BsPatchCheckFill className="experience__details-icon" />

              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="exp__details">
              <BsPatchCheckFill className="experience__details-icon" />

              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="exp__details">
              <BsPatchCheckFill className="experience__details-icon" />

              <div>
                <h4>Nodejs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="exp__details">
              <BsPatchCheckFill className="experience__details-icon" />

              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="exp__details">
              <BsPatchCheckFill className="experience__details-icon" />

              <div>
                <h4>Postgres</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="exp__details">
              <BsPatchCheckFill className="experience__details-icon" />

              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="exp__details">
              <BsPatchCheckFill className="experience__details-icon" />

              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="exp__details">
              <BsPatchCheckFill className="experience__details-icon" />

              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
