import "./Blog.css";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

const Blog = () => {
  return (
    <>
      <section className="blog">
        <div className="blog__heading">Recent Blogs</div>
        <div className="blog__posts">
          <div className="blog__posts--top">
            <div className="posts--top__content">
              <h3 className="posts__title">Best Practices</h3>
              <h1 className="posts__top--heading">
                In design active temper be uneasy. Thirty for remove plenty
                regard.
              </h1>
              <button className="posts__button flex items-center gap-2">
                Read More{" "}
                <BsArrowRight className="h-[15px] w-[12px] fill-[#DEE1E6] stroke-[2px] stroke-[#1B1C31]" />
              </button>
            </div>
            <img src="/images/blog-top.png" alt="posts-image" />
          </div>

          <div className="blog__post--bottom">
            <div className="bottom__posts">
              <div className="posts--bottom__content">
                <h3 className="posts__title">Best Practices</h3>
                <h1 className="posts__heading">
                  Partiality on or continuing particular principles as.
                </h1>
              </div>
              <img src="/images/blog-bottom1.png" alt="posts-image" />
            </div>
            <div className="bottom__posts">
              <div className="posts--bottom__content">
                <h3 className="posts__title">Best Practices</h3>
                <h1 className="posts__heading">
                  Village did removed enjoyed explain
                </h1>
              </div>
              <img src="/images/blog-bottom2.png" alt="posts-image" />
            </div>
            <div className="bottom__posts">
              <div className="posts--bottom__content">
                <h3 className="posts__title">Best Practices</h3>
                <h1 className="posts__heading">
                  Wise busy past both park when an ye no. Nay likely her length.
                </h1>
              </div>
              <img src="/images/blog-bottom3.png" alt="posts-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="faq">
        <img src="/images/9.png" alt="image" className="faq__image1" />
        <img src="/images/10.png" alt="image" className="faq__image2" />
        <h1 className="faq__heading">Fequently asked questions</h1>
        <div className="faq__content">
          <div className="faq__questions">
            <div className="questions">
              <h2 className="questions--heading">
                The expense windows adapted sir. Wrong widen drawn.
                <AiOutlinePlus />
              </h2>
              <p className="questions--para">
                Offending belonging promotion provision an be oh consulted
                ourselves it. Blessing welcomed ladyship she met humoured sir
                breeding her.
              </p>
            </div>
            <div className="questions">
              <h2 className="questions--heading">
                Six curiosity day assurance bed necessary?
                <AiOutlinePlus />
              </h2>
            </div>
            <div className="questions">
              <h2 className="questions--heading">
                Produce say the ten moments parties?
                <AiOutlinePlus />
              </h2>
            </div>
            <div className="questions">
              <h2 className="questions--heading">
                Simple innate summer fat appear basket his desire joy?
                <AiOutlinePlus />
              </h2>
            </div>
            <div className="questions">
              <h2 className="questions--heading">
                Outward clothes promise at gravity do excited?
                <AiOutlinePlus />
              </h2>
            </div>
          </div>
          <div className="faq__morequestions">
            <div className="morequestion--content">
              <img
                src="/images/message.svg"
                alt="message-icon"
                className="morequestions__image"
              />
              <h3 className="morequestions__heading">
                Do you have more questions?
              </h3>
              <p className="morequestions__para">
                End-to-end payments and financial management in a single
                solution. Meet the right platform to help realize.
              </p>
            </div>
            <button className="morequestions__button">
              Shoot a Direct Mail
            </button>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta__content">
          <h1 className="cta__heading">
            Discover a better way to manage spendings
          </h1>
          <button className="cta__button">Get Started Now</button>
        </div>
      </section>
    </>
  );
};

export default Blog;
