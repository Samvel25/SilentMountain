import bubble from "@/public/images/abs-items/bubble.png";
import ellipse7 from "@/public/images/abs-items/ellipse-7.png";
import Image from "next/image";
import Link from "next/link";
import PrimaryBtn from "../PrimaryBtn";

const Banner = () => {
  return (
    <section className="banner-section index-two overflow-hidden">
      <div className="shape-area">
        <Image src={bubble} className="shape-1" alt="icon" />
        <Image src={ellipse7} className="shape-2" alt="icon" />
      </div>
      <div className="overlay overflow-hidden">
        <div className="banner-content position-relative">
          <div className="box-items d-inline-flex flex-wrap position-absolute">
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-50"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
          </div>
          <div className="container position-relative cus-z1">
            <div className="row justify-content-between justify-content-center align-items-center">
              <div className="col-xl-6 col-lg-7">
                <div className="main-content">
                  <div className="mb-8">
                    <h3 className="visible-slowly-bottom sub-title">
                      <span>Crafting Exceptional Games</span>
                    </h3>
                    <span className="display-one">
                      Elevating Gaming to the <span>Next Level</span>
                    </span>
                    <p className="fs-four">
                      We are a game development firm that focuses on making
                      games that are imaginative, fun, and colourful.
                    </p>
                  </div>
                  <PrimaryBtn text="Explore Our Games" href="game" />
                </div>
              </div>
            </div>
            <div className="row pt-20">
              <div className="col-md-6 order-1 order-md-0">
                <div className="btn-item">
                  <Link
                    href="game"
                    className="d-center py-14 position-relative">
                    <span className="d-center w-100">
                      explore our games
                      <i className="material-symbols-outlined position-absolute">
                        {" "}
                        straight{" "}
                      </i>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className="btn-item">
                  <Link
                    href="#"
                    className="d-center second py-14 position-relative">
                    <span className="d-center w-100">
                      Inquiry
                      <i className="material-symbols-outlined position-absolute">
                        {" "}
                        straight{" "}
                      </i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
