import customer1 from "@/public/images/customer-img-1.png";
import customer2 from "@/public/images/customer-img-2.png";
import Image from "next/image";
import Slider from "react-slick";
const Testimonial = () => {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: false,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="testimonial-customers pb-120">
      <div className="container pt-120">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-header text-center">
              <h4 className="sub-title">
                Our <span>Testimonial</span>
              </h4>
              <span className="fs-two heading mb-6">
                Our Happy <span>Customers</span>
              </span>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <Slider {...settings} className="customers-carousel">
            <div className="slide-area">
              <div className="single-slider p-8">
                <div className="icon-area mb-2">
                  <i className="material-symbols-outlined mat-icon fs-one">
                    {" "}
                    format_quote{" "}
                  </i>
                </div>
                <p className="fs-four">
                  “The graphics in their games are always top-notch and truly
                  bring the world to life”
                </p>
                <div className="d-flex mt-8 gap-6 align-items-center">
                  <div className="img-box">
                    <Image src={customer1} alt="Image" />
                  </div>
                  <div className="profile-info">
                    <h5 className="mb-2">Robert Fox</h5>
                    <p>United Kingdom</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-area">
              <div className="single-slider p-8">
                <div className="icon-area mb-2">
                  <i className="material-symbols-outlined mat-icon fs-one">
                    {" "}
                    format_quote{" "}
                  </i>
                </div>
                <p className="fs-four">
                  “The graphics in their games are always top-notch and truly
                  bring the world to life”
                </p>
                <div className="d-flex mt-8 gap-6 align-items-center">
                  <div className="img-box">
                    <Image src={customer2} alt="Image" />
                  </div>
                  <div className="profile-info">
                    <h5 className="mb-2">Ralph Edwards</h5>
                    <p>United Kingdom</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-area">
              <div className="single-slider p-8">
                <div className="icon-area mb-2">
                  <i className="material-symbols-outlined mat-icon fs-one">
                    {" "}
                    format_quote{" "}
                  </i>
                </div>
                <p className="fs-four">
                  “The graphics in their games are always top-notch and truly
                  bring the world to life”
                </p>
                <div className="d-flex mt-8 gap-6 align-items-center">
                  <div className="img-box">
                    <Image src={customer1} alt="Image" />
                  </div>
                  <div className="profile-info">
                    <h5 className="mb-2">Robert Fox</h5>
                    <p>United Kingdom</p>
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

export default Testimonial;
