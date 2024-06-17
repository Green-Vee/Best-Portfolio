import "./testimonials.css";
import Img from "../../assets/works.png";

// import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    { image: Img, id: 122 },
    { image: Img, id: 1332 },
    { image: Img, id: 133 },
    { image: Img, id: 12 },
    { image: Img, id: 13 },
  ];

  return (
    <section id="testimonials">
      <h5>Reviews From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container">
        {/* modules={[Pagination]}
        spaceBetween={40}
        sildePerView={1}
        pagination={{ clickable: true }} */}
        {data.map(({ image, id }) => (
          <div key={id}>
            <SwiperSlide className="testimonials">
              <div className="client__avatar">
                <img src={image} alt="Avatar C" />
              </div>

              <h5 className="client__name">Ernest Archiever</h5>

              <small className="clients__review">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                alias eveniet nulla ut dolor! Id, illum vel et atque dolorem,
                molestias amet assumenda possimus excepturi nihil unde. Et,
                possimus magni.
              </small>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
