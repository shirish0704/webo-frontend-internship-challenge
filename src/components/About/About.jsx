import "./About.css";
import Cards from "./Cards";
import { BsCheckCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <>
      <div className="about">
        <section className="about__section--heading">
          <div className="section--heading">
            <h1 className="section--heading__title">
              Automated portfolio tracking
            </h1>
            <p className="section--heading__description">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing.
            </p>
          </div>
          <div className="section--testimonials">
            <div className="testimonials">
              <p className="testimonials__para">
                Wise busy past both park when an ye no. Nay likely her length
                sooner thrown sex lively income. The expense windows adapted
                sir. Wrong widen.
              </p>
              <p className="testimonials__name">- Mike Taylor, Web Designer</p>
              <img
                src="/images/quotes.svg"
                alt="quote"
                className="testimonials__quotes"
              />
            </div>
          </div>
        </section>
        <section className="about__section--cards">
          <Cards
            number={"01"}
            image={"/images/wallet1.svg"}
            heading={"Connect wallets & companies"}
            para={
              "Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of."
            }
          />
          <Cards
            number={"02"}
            image={"/images/wallet2.svg"}
            heading={"Review transactions"}
            para={
              "Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of."
            }
          />
          <Cards
            number={"03"}
            image={"/images/wallet3.svg"}
            heading={"Get income insights"}
            para={
              "Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of."
            }
          />
        </section>
        <section className="about__section--track">
          <div className="track__left">
            <img src="/images/4.svg" alt="icon" className="track__left--icon" />
            <div className="track__left--container__first">
              <img
                src="/images/person1.png"
                alt="track"
                className="track__image"
              />
              <div className="container--text">
                <div className="container--text__money">
                  <h2 className="money">+ $28900</h2>
                  <p className="container--text__para">
                    Received from Michael V
                  </p>
                </div>
              </div>
            </div>
            <div className="track__left--container__second">
              <img
                src="/images/person2.png"
                alt="track"
                className="track__image"
              />
              <div className="container--text">
                <div className="container--text__money">
                  <h2 className="money">+ $28900</h2>
                  <p className="container--text__para">
                    Received from Michael V
                  </p>
                </div>
              </div>
            </div>
            <div className="track__left--container__third">
              <img
                src="/images/person3.png"
                alt="track"
                className="track__image"
              />
              <div className="container--text">
                <div className="container--text__money">
                  <h2 className="money">+ $28900</h2>
                  <p className="container--text__para">
                    Received from Michael V
                  </p>
                </div>
              </div>
            </div>
            <div className="track__left--container__fourth">
              <img
                src="/images/person4.png"
                alt="track"
                className="track__image"
              />
              <div className="container--text">
                <div className="container--text__money">
                  <h2 className="money">+ $28900</h2>
                  <p className="container--text__para">
                    Received from Michael V
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="track__right">
            <h3 className="track__right--title">why choose us</h3>
            <h1 className="track__right--heading">
              Track your payments on the go with the best way possible
            </h1>
            <p className="track__right--para">
              Indulgence way everything joy alteration boisterous the
              attachment. Party we years to order allow asked of.
            </p>
            <div className="track__right--line"></div>
            <div className="track__right--points">
              <BsCheckCircleFill className="fill-[#FDBC64]  w-[24px] h-[24px]" />
              <h3>Get Overview at a glance</h3>
            </div>
            <div className="track__right--points">
              <BsCheckCircleFill className="fill-[#FDBC64] w-[24px] h-[24px]" />
              <h3>Deoposit funds easily, securlity</h3>
            </div>
            <div className="track__right--points">
              <BsCheckCircleFill className="fill-[#FDBC64]  w-[24px] h-[24px]" />
              <h3>Get Live Support</h3>
            </div>
          </div>
        </section>
        <section className="about__section--save">
          <div className="save__container--left">
            <h3 className="save__title">why choose us</h3>
            <h1 className="save__heading">
              Save money with proper transaction
            </h1>
            <p className="save__para">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
            </p>
            <div className="section--testimonials mt-[35px]">
              <div className="testimonials">
                <p className="testimonials__para">
                  Wise busy past both park when an ye no. Nay likely her length
                  sooner thrown sex lively income. The expense windows adapted
                  sir. Wrong widen.
                </p>
                <p className="testimonials__name">
                  - Mike Taylor, Web Designer
                </p>
                <img
                  src="/images/quotes.svg"
                  alt="quote"
                  className="testimonials__quotes"
                />
              </div>
            </div>
          </div>
          <div className="save__container--right">
            <img
              src="/images/5.svg"
              alt="image"
              className="save__right--icon"
            />
            <div className="save__right--bar">
              <h3 className="bar--heading">Total Balance</h3>
              <h3 className="bar--money">
                $4,200
                <span className="text-[#00E1F0] text-[18px] font-[500]">
                  +14%
                </span>
              </h3>
              <div className="bar--image">
                <img src="/images/bar.svg" alt="" />
              </div>
            </div>
            <img
              src="/images/credit.svg"
              alt="image"
              className="save__right--image"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
