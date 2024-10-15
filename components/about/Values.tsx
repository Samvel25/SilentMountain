import Slider from "react-slick";
import { Next, Prev } from "../SliderBtns";
import { useState } from "react";

const Values = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const handleMouseMove = (e: any) => {
    setX(e.nativeEvent.offsetX);
    setY(e.nativeEvent.offsetY);
  };
  const style = {
    "--x": `${x}px`,
    "--y": `${y}px`,
  } as React.CSSProperties;
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    variableWidth: true,
    autoplaySpeed: 3000,
    fade: false,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: true,
    prevArrow: <Prev position="bottom-right" />,
    nextArrow: <Next position="bottom-right" />,
    dots: true,
    dotsClass: "section-dots",
    customPaging: function (i: number) {
      return (
        <>
          <span className="dot" role="button" title={`${i + 1} of 5`}>
            <span className="string">{`${i + 1} / 5 `}</span>
          </span>
        </>
      );
    },
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <section className="gaming-character ongoing-values pt-120 pb-120">
      <div className="container">
        <div className="row section-header justify-content-center">
          <div className="col-lg-7 text-center">
            <h4 className="sub-title">
              Our Ongoing <span>Values</span>
            </h4>
            <span className="fs-two heading mb-6">
              Our Values Inspire And <span>Drive Our Every Move</span>
            </span>
            <p>
              Our values are a reflection of our inner selves, shaped by our
              unique experiences, beliefs, aspirations, and cannot be simply
              adopted from others or chosen arbitrarily.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-end">
          <div className="col-lg-12">
            <Slider {...settings} className="ongoing-values-carousel">
              <div className="slide-area">
                <div className="single-slider">
                  <div
                    onMouseMove={handleMouseMove}
                    style={style}
                    className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                    <div className="icon-box d-center">
                      <i className="material-symbols-outlined fs-two">
                        {" "}
                        emoji_objects{" "}
                      </i>
                    </div>
                    <h3 className="mt-6 pb-2">Creativity</h3>
                    <p>
                      Striving to bring imagination, original ideas, and
                      excitement to everything we do.
                    </p>
                  </div>
                </div>
              </div>
              <div className="slide-area">
                <div className="single-slider">
                  <div
                    onMouseMove={handleMouseMove}
                    style={style}
                    className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                    <div className="icon-box d-center">
                      <i className="material-symbols-outlined fs-two"> flag </i>
                    </div>
                    <h3 className="mt-6 pb-2">Pioneering</h3>
                    <p>
                      Striving to bring imagination, original ideas, and
                      excitement to everything we do.
                    </p>
                  </div>
                </div>
              </div>
              <div className="slide-area">
                <div className="single-slider">
                  <div
                    onMouseMove={handleMouseMove}
                    style={style}
                    className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                    <div className="icon-box d-center">
                      <i className="material-symbols-outlined fs-two">
                        {" "}
                        local_fire_department{" "}
                      </i>
                    </div>
                    <h3 className="mt-6 pb-2">Passion</h3>
                    <p>
                      Striving to bring imagination, original ideas, and
                      excitement to everything we do.
                    </p>
                  </div>
                </div>
              </div>
              <div className="slide-area">
                <div className="single-slider">
                  <div
                    onMouseMove={handleMouseMove}
                    style={style}
                    className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                    <div className="icon-box d-center">
                      <i className="material-symbols-outlined fs-two"> bolt </i>
                    </div>
                    <h3 className="mt-6 pb-2">Determination</h3>
                    <p>
                      Striving to bring imagination, original ideas, and
                      excitement to everything we do.
                    </p>
                  </div>
                </div>
              </div>
              <div className="slide-area">
                <div className="single-slider">
                  <div
                    onMouseMove={handleMouseMove}
                    style={style}
                    className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                    <div className="icon-box d-center">
                      <i className="material-symbols-outlined fs-two">
                        {" "}
                        local_library{" "}
                      </i>
                    </div>
                    <h3 className="mt-6 pb-2">Learning</h3>
                    <p>
                      Striving to bring imagination, original ideas, and
                      excitement to everything we do.
                    </p>
                  </div>
                </div>
              </div>
              <div className="slide-area">
                <div className="single-slider">
                  <div
                    onMouseMove={handleMouseMove}
                    style={style}
                    className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                    <div className="icon-box d-center">
                      <i className="material-symbols-outlined fs-two">
                        {" "}
                        groups_2{" "}
                      </i>
                    </div>
                    <h3 className="mt-6 pb-2">Teamwork</h3>
                    <p>
                      Striving to bring imagination, original ideas, and
                      excitement to everything we do.
                    </p>
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

export default Values;
