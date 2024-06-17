import "./portfolio.css";
import Img from "../../assets/works.png";
import Img2 from "../../assets/work-2.png";
import Img3 from "../../assets/work-3.png";
import Img4 from "../../assets/work-4.jpg";
import Img5 from "../../assets/work-5.jpg";
import Img6 from "../../assets/work-6.jpg";
import Img7 from "../../assets/work-7.jpg";
import Img8 from "../../assets/work-8.png";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: Img,
      title: "Lorem ipsum dolor sit amet.",
      github: "https//:github.com",
      demo: "https//:dribbble.com",
    },
    {
      id: 12,
      image: Img2,
      title: "Lorem ipsum dolor sit amet.",
      github: "https//:github.com",
      demo: "https//:dribbble.com",
    },
    {
      id: 13,
      image: Img3,
      title: "Lorem ipsum dolor sit amet.",
      github: "https//:github.com",
      demo: "https//:dribbble.com",
    },
    {
      id: 14,
      image: Img4,
      title: "Lorem ipsum dolor sit amet.",
      github: "https//:github.com",
      demo: "https//:dribbble.com",
    },
    {
      id: 15,
      image: Img5,
      title: "Lorem ipsum dolor sit amet.",
      github: "https//:github.com",
      demo: "https//:dribbble.com",
    },
    {
      id: 16,
      image: Img6,
      title: "Lorem ipsum dolor sit amet.",
      github: "https//:github.com",
      demo: "https//:dribbble.com",
    },
    {
      id: 17,
      image: Img7,
      title: "Lorem ipsum dolor sit amet.",
      github: "https//:github.com",
      demo: "https//:dribbble.com",
    },
    {
      id: 8,
      image: Img8,
      title: "Lorem ipsum dolor sit amet.",
      github: "https//:github.com",
      demo: "https//:dribbble.com",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>My Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ image, id }) => (
          <>
            <article key={id} className="portfolio__item">
              <div className="port-item-img">
                <img src={image} alt="" />
              </div>

              <h3>This is a portfolio item title</h3>
              <div className="port-cta">
                <a href="https//:github.com" className="btn">
                  Github
                </a>
                <a
                  href="https//:dribble.com/alien_pixels"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          </>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
