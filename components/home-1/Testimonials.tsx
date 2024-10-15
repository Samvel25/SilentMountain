import Image from "next/image";
import Slider from "react-slick";
import { Next, Prev } from "../SliderBtns";

const Testimonials = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: true,
    prevArrow: <Prev position="bottom-right" />,
    nextArrow: <Next position="bottom-right" />,
    dots: true,
    dotsClass: "slick-double-dots",
    customPaging: function (i: any) {
      return (
        <>
          <div className="dots" title={`${i + 1} of 4`} />
          <span
            className="progressBar fs-five"
            role="button"
            title={`${i + 1} of ${4}`}>
            <span className="string">{i + 1}</span>
            <span className="totalString">{4}</span>
          </span>
        </>
      );
    },
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="testimonials">
      <div className="container pt-120">
        <div className="row justify-content-end">
          <div className="col-lg-7">
            <Slider {...settings} className="testimonials-carousel">
              <div className="slide-area">
                <div className="single-slider px-4 px-sm-8 pt-8 pb-15 pb-sm-20">
                  <div className="img-box">
                    <Image
                      width={80}
                      height={80}
                      src="/images/testimonial-img-1.png"
                      alt="Image"
                    />
                  </div>
                  <ul className="list pt-4 pb-6 d-flex gap-1 align-items-center">
                    <li>
                      <i className="material-symbols-outlined mat-icon">
                        {" "}
                        star{" "}
                      </i>
                    </li>
                    <li>
                      <i className="material-symbols-outlined mat-icon">
                        {" "}
                        star{" "}
                      </i>
                    </li>
                    <li>
                      <i className="material-symbols-outlined mat-icon">
                        {" "}
                        star{" "}
                      </i>
                    </li>
                    <li>
                      <i className="material-symbols-outlined mat-icon">
                        {" "}
                        star{" "}
                      </i>
                    </li>
                    <li>
                      <i className="material-symbols-outlined mat-icon">
                        {" "}
                        star{" "}
                      </i>
                    </li>
                  </ul>
                  <p className="fs-four">
                    “The graphics in their games are always top-notch and truly
                    bring the world to life”
                  </p>
                  <h5 className="pt-8 pb-3">Kristin Watson</h5>
                  <div className="location-date d-flex gap-5">
                    <span className="location pe-5">United Kingdom</span>
                    <span>Mar 22, 2023</span>
                  </div>
                </div>
              </div>
              <div className="slide-area">
                <div className="single-slider px-4 px-sm-8 pt-8 pb-15 pb-sm-20">
                  <div className="img-box">
                    <Image
                      width={80}
                      height={80}
                      src="/images/testimonial-img-2.png"
                      alt="Image"
                    />
                  </div>
                  <ul className="list pt-4 pb-6 d-flex gap-1 align-items-center">
                    <li>
                      <i className="material-symbols-outlined mat-icon">
                        {" "}
                        star{" "}
                      </i>
                    </li>
                    <li>
                      <i className="material-symbols-outlined mat-icon">
                        {" "}
                        star{" "}
                      </i>
                    </li>
                    <li>
                      <i className="material-symbols-outlined mat-icon">
                        {" "}
                        star{" "}
                      </i>
                    </li>
                    <li>
                      <i className="material-symbols-outlined mat-icon">
                        {" "}
                        star{" "}
                      </i>
                    </li>
                    <li>
                      <i className="material-symbols-outlined mat-icon">
                        {" "}
                        star{" "}
                      </i>
                    </li>
                  </ul>
                  <p className="fs-four">
                    “The graphics in their games are always top-notch and truly
                    bring the world to life”
                  </p>
                  <h5 className="pt-8 pb-3">Jordyn Septimus</h5>
                  <div className="location-date d-flex gap-5">
                    <span className="location pe-5">United Kingdom</span>
                    <span>May 12, 2023</span>
                  </div>
                </div>
              </div>
              <div className="slide-area">
                <div className="single-slider px-4 px-sm-8 pt-8 pb-15 pb-sm-20">
                  <div className="img-box">
                    <Image
                      width={80}
                      height={80}
                      src="/images/testimonial-img-3.png"
                      alt="Image"
                    />
                  </div>
                  <ul className="list pt-4 pb-6 d-flex gap-1 align-items-center">
                    <li>
                      <i className="material-symbols-outlined mat-icon">
                        {" "}
                        star{" "}
                      </i>
                    </li>
                    <li>
                      <i className="material-symbols-outlined mat-icon">
                        {" "}
                        star{" "}
                      </i>
                    </li>
                    <li>
                      <i className="material-symbols-outlined mat-icon">
                        {" "}
                        star{" "}
                      </i>
                    </li>
                    <li>
                      <i className="material-symbols-outlined mat-icon">
                        {" "}
                        star{" "}
                      </i>
                    </li>
                    <li>
                      <i className="material-symbols-outlined mat-icon">
                        {" "}
                        star{" "}
                      </i>
                    </li>
                  </ul>
                  <p className="fs-four">
                    “The graphics in their games are always top-notch and truly
                    bring the world to life”
                  </p>
                  <h5 className="pt-8 pb-3">Bessie Cooper</h5>
                  <div className="location-date d-flex gap-5">
                    <span className="location pe-5">United Kingdom</span>
                    <span>Nov 25, 2023</span>
                  </div>
                </div>
              </div>
              <div className="slide-area">
                <div className="single-slider px-4 px-sm-8 pt-8 pb-15 pb-sm-20">
                  <div className="img-box">
                    <Image
                      width={80}
                      height={80}
                      src="/images/testimonial-img-4.png"
                      alt="Image"
                    />
                  </div>
                  <ul className="list pt-4 pb-6 d-flex gap-1 align-items-center">
                    <li>
                      <i className="material-symbols-outlined mat-icon">
                        {" "}
                        star{" "}
                      </i>
                    </li>
                    <li>
                      <i className="material-symbols-outlined mat-icon">
                        {" "}
                        star{" "}
                      </i>
                    </li>
                    <li>
                      <i className="material-symbols-outlined mat-icon">
                        {" "}
                        star{" "}
                      </i>
                    </li>
                    <li>
                      <i className="material-symbols-outlined mat-icon">
                        {" "}
                        star{" "}
                      </i>
                    </li>
                    <li>
                      <i className="material-symbols-outlined mat-icon">
                        {" "}
                        star{" "}
                      </i>
                    </li>
                  </ul>
                  <p className="fs-four">
                    “The graphics in their games are always top-notch and truly
                    bring the world to life”
                  </p>
                  <h5 className="pt-8 pb-3">Esther Howard</h5>
                  <div className="location-date d-flex gap-5">
                    <span className="location pe-5">United Kingdom</span>
                    <span>Dec 17, 2023</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
