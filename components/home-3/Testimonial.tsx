import testimonialImg from "@/public/images/testimonial-brand-1.png";
import Image from "next/image";
import Link from "next/link";
import Slider, { Settings } from "react-slick";

const Testimonial = () => {
  const settings: Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: false,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    dots: false,
    dotsClass: "section-dots",
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
    <section className="testimonial-area">
      <div className="container pt-120 pb-120">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <Slider {...settings} className="testimonial-sec-carousel">
              <div className="slide-area">
                <div className="single-slider text-center">
                  <div className="img-box">
                    <Image src={testimonialImg} alt="Image" />
                  </div>
                  <div className="star-area pt-3 pt-md-6 pb-4 pb-md-8">
                    <Link href="#">
                      <i className="fas fa-star"></i>
                    </Link>
                    <Link href="#">
                      <i className="fas fa-star"></i>
                    </Link>
                    <Link href="#">
                      <i className="fas fa-star"></i>
                    </Link>
                    <Link href="#">
                      <i className="fas fa-star"></i>
                    </Link>
                    <Link href="#">
                      <i className="fas fa-star"></i>
                    </Link>
                  </div>
                  <p className="fs-four">
                    “Gamestorm provided exceptional game development service,
                    exceeding our expectations in every way.”
                  </p>
                  <div className="profile-info pt-8">
                    <h5 className="mb-2">Jordyn Septimus</h5>
                    <p>CTO, Waverio</p>
                  </div>
                </div>
              </div>
              <div className="slide-area">
                <div className="single-slider text-center">
                  <div className="img-box">
                    <Image src={testimonialImg} alt="Image" />
                  </div>
                  <div className="star-area pt-3 pt-md-6 pb-4 pb-md-8">
                    <Link href="#">
                      <i className="fas fa-star"></i>
                    </Link>
                    <Link href="#">
                      <i className="fas fa-star"></i>
                    </Link>
                    <Link href="#">
                      <i className="fas fa-star"></i>
                    </Link>
                    <Link href="#">
                      <i className="fas fa-star"></i>
                    </Link>
                    <Link href="#">
                      <i className="fas fa-star"></i>
                    </Link>
                  </div>
                  <p className="fs-four">
                    “Gamestorm provided exceptional game development service,
                    exceeding our expectations in every way.”
                  </p>
                  <div className="profile-info pt-8">
                    <h5 className="mb-2">Jordyn Septimus</h5>
                    <p>CTO, Waverio</p>
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

export default Testimonial;
