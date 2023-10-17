import "./Features.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Features = () => {
  return (
    <>
      <section className="features">
        <img src="/images/6.svg" alt="image" className="features__image" />
        <h1 className="features__heading">Features that blows mind</h1>
        <p className="features__para">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own.
        </p>
        <div className="features__card">
          <div className="features__card--section">
            <img
              src="/images/wallet2.svg"
              alt="folder"
              className="features__card--image"
            />
            <div className="features__card--content">
              <h3 className="features__card--heading">
                Really boy law county she unable her sister
              </h3>
              <p className="features__card--para">
                We so opinion friends me message as delight. Whole front do of
                plate heard oh ought.
              </p>
            </div>
          </div>
          <div className="features__card--section">
            <img
              src="/images/wallet1.svg"
              alt="folder"
              className="features__card--image"
            />
            <div className="features__card--content">
              <h3 className="features__card--heading">
                Among sex are leave law built now
              </h3>
              <p className="features__card--para">
                We so opinion friends me message as delight. Whole front do of
                plate heard oh ought.
              </p>
            </div>
          </div>
          <div className="features__card--split">
            <div className="features--split__card">
              <h1 className="split--text">Merits behind on afraid or warmly</h1>
            </div>
            <div className="features--split__card">
              <h1 className="split--text">
                Believing neglected so so allowance existence
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="section__testimonials">
        <div className="testimonials__head">
          <h1 className="testimonials__head--heading">Testimonials</h1>
          <p className="testimonials__head--para">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
          </p>
        </div>
        <div className="testimonials__swipe">
          <Swiper
            slidesPerView={1.6}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="swipe__testimonial">
                <img src="/images/quotes.svg" alt="" className="swipe--quote" />
                <div className="swiper__container">
                  <div className="swipe text">
                    <p className="swipe--para">
                      Wise busy past both park when an ye no. Nay likely her
                      length sooner thrown sex lively income. The expense
                      windows . Blessing welcomed ladyship.
                    </p>
                    <p className="swipe--name">- Mike Taylor, Web Designer</p>
                  </div>
                  <img
                    src="/images/swiper1.png"
                    alt=""
                    className="swipe--image"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swipe__testimonial">
                <img src="/images/quotes.svg" alt="" className="swipe--quote" />
                <div className="swiper__container">
                  <div className="swipe text">
                    <p className="swipe--para">
                      Wise busy past both park when an ye no. Nay likely her
                      length sooner thrown sex lively income. The expense
                      windows . Blessing welcomed ladyship.
                    </p>
                    <p className="swipe--name">- Mike Taylor, Web Designer</p>
                  </div>
                  <img
                    src="/images/swiper2.png"
                    alt=""
                    className="swipe--image"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Features;
