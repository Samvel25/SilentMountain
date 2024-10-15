import service1 from "@/public/images/services-img-1.png";
import service2 from "@/public/images/services-img-2.png";
import service3 from "@/public/images/services-img-3.png";
import service4 from "@/public/images/services-img-4.png";
import service5 from "@/public/images/services-img-5.png";
import service6 from "@/public/images/services-img-6.png";
import service7 from "@/public/images/services-img-7.png";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <section className="services pt-120 pb-120">
      <div className="container">
        <div className="row section-header justify-content-center">
          <div className="col-lg-7 text-center">
            <h4 className="sub-title">
              Game <span>Design & Development</span> Services
            </h4>
            <span className="fs-two heading mb-6">
              Our Comprehensive Game <span>Development Services</span>
            </span>
            <p>
              End-to-end game development, revamping, and outsourcing services.
              Immersive technology expertise for top-class gaming experiences
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row cus-mar">
          <div className="col-xl-4 col-sm-6">
            <div className="single-box d-inline-flex d-center text-center position-relative">
              <Image src={service1} alt="Image" />
              <Link
                href="our-services-details-2"
                className="abs-area alt-bg box-style btn-box-second position-absolute d-center flex-column p-4">
                Find Out
                <i className="material-symbols-outlined"> straight </i>
              </Link>
              <h3 className="visible-slowly-bottom position-absolute">
                Game Art
              </h3>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6">
            <div className="single-box d-inline-flex d-center text-center position-relative">
              <Image src={service2} alt="Image" />
              <Link
                href="our-services-details-2"
                className="abs-area alt-bg box-style btn-box-second position-absolute d-center flex-column p-4">
                Find Out
                <i className="material-symbols-outlined"> straight </i>
              </Link>
              <h3 className="visible-slowly-bottom position-absolute">
                Game Development
              </h3>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6">
            <div className="single-box d-inline-flex d-center text-center position-relative">
              <Image src={service3} alt="Image" />
              <Link
                href="our-services-details-2"
                className="abs-area alt-bg box-style btn-box-second position-absolute d-center flex-column p-4">
                Find Out
                <i className="material-symbols-outlined"> straight </i>
              </Link>
              <h3 className="visible-slowly-bottom position-absolute">
                Game Animation
              </h3>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6">
            <div className="single-box d-inline-flex d-center text-center position-relative">
              <Image src={service4} alt="Image" />
              <Link
                href="our-services-details-2"
                className="abs-area alt-bg box-style btn-box-second position-absolute d-center flex-column p-4">
                Find Out
                <i className="material-symbols-outlined"> straight </i>
              </Link>
              <h3 className="visible-slowly-bottom position-absolute">
                Game QA Testing
              </h3>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6">
            <div className="single-box d-inline-flex d-center text-center position-relative">
              <Image src={service5} alt="Image" />
              <Link
                href="our-services-details-2"
                className="abs-area alt-bg box-style btn-box-second position-absolute d-center flex-column p-4">
                Find Out
                <i className="material-symbols-outlined"> straight </i>
              </Link>
              <h3 className="visible-slowly-bottom position-absolute">
                Out staffing
              </h3>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6">
            <div className="single-box d-inline-flex d-center text-center position-relative">
              <Image src={service6} alt="Image" />
              <Link
                href="our-services-details-2"
                className="abs-area alt-bg box-style btn-box-second position-absolute d-center flex-column p-4">
                Find Out
                <i className="material-symbols-outlined"> straight </i>
              </Link>
              <h3 className="visible-slowly-bottom position-absolute">
                Game UX/UI
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
