import Link from "next/link";
import Slider from "react-slick";
import { Next, Prev } from "../SliderBtns";

const OtherServices = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    centerMode: false,
    centerPadding: "0",
    focusOnSelect: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <Prev position="top-right" />,
    nextArrow: <Next position="top-right" />,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="our-services service pt-120 pb-120">
      <div className="container">
        <div className="row cus-mar align-items-stretch section-text">
          <div className="col-lg-8">
            <div className="head-content">
              <h2>Other Services</h2>
            </div>
          </div>
          <Slider
            {...settings}
            className="other-services-carousel mt-8 mt-sm-15">
            <div className="single-slide">
              <div className="single-box box-style box-first p-5 px-xl-8 py-xl-10">
                <div className="icon-box d-center">
                  <i className="material-symbols-outlined fs-two"> draw </i>
                </div>
                <div className="title-area">
                  <h3 className="mt-6 mb-3">Game Art</h3>
                  <div className="link-area mt-6">
                    <Link
                      href="our-services-details"
                      className="d-flex align-items-center">
                      Learn More
                      <i className="material-symbols-outlined mat-icon">
                        arrow_right_alt
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slide">
              <div className="single-box box-style box-first p-5 px-xl-8 py-xl-10">
                <div className="icon-box d-center">
                  <i className="material-symbols-outlined fs-two">
                    {" "}
                    view_in_ar{" "}
                  </i>
                </div>
                <div className="title-area">
                  <h3 className="mt-6 mb-3">Game Development</h3>
                  <div className="link-area mt-6">
                    <Link
                      href="our-services-details"
                      className="d-flex align-items-center">
                      Learn More
                      <i className="material-symbols-outlined mat-icon">
                        arrow_right_alt
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slide">
              <div className="single-box box-style box-first p-5 px-xl-8 py-xl-10">
                <div className="icon-box d-center">
                  <i className="material-symbols-outlined fs-two">
                    {" "}
                    auto_awesome_motion{" "}
                  </i>
                </div>
                <div className="title-area">
                  <h3 className="mt-6 mb-3">Game Animation</h3>
                  <div className="link-area mt-6">
                    <Link
                      href="our-services-details"
                      className="d-flex align-items-center">
                      Learn More
                      <i className="material-symbols-outlined mat-icon">
                        arrow_right_alt
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slide">
              <div className="single-box box-style box-first p-5 px-xl-8 py-xl-10">
                <div className="icon-box d-center">
                  <i className="material-symbols-outlined fs-two">
                    {" "}
                    architecture{" "}
                  </i>
                </div>
                <div className="title-area">
                  <h3 className="mt-6 mb-3">Game UI/UX</h3>
                  <div className="link-area mt-6">
                    <Link
                      href="our-services-details"
                      className="d-flex align-items-center">
                      Learn More
                      <i className="material-symbols-outlined mat-icon">
                        arrow_right_alt
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
