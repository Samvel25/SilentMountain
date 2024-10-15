import Link from "next/link";
import { useState } from "react";

const Services = () => {
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
  return (
    <section className="our-services service pt-120 pb-120">
      <div className="container">
        <div className="row cus-mar align-items-stretch section-text">
          <div className="col-lg-8">
            <div className="head-content alt-bg single-box p-5 px-xl-8 py-xl-10">
              <h2>Our Comprehensive Game Development Services</h2>
              <div className="btn-area mt-4 mt-sm-10 d-flex flex-wrap gap-6 align-items-center">
                <Link
                  onMouseMove={handleMouseMove}
                  style={style}
                  href="contact"
                  className="box-style btn-box d-center">
                  Start Your Projects
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              onMouseMove={handleMouseMove}
              style={style}
              className="single-box single-box-service box-style box-first p-5 px-xl-8 py-xl-10">
              <div className="icon-box d-center">
                <i className="material-symbols-outlined fs-two"> draw </i>
              </div>
              <div className="title-area">
                <h3 className="visible-slowly-bottom mt-6 mb-3">Game Art</h3>
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
          <div className="col-lg-4 col-sm-6">
            <div
              onMouseMove={handleMouseMove}
              style={style}
              className="single-box single-box-service box-style box-first p-5 px-xl-8 py-xl-10">
              <div className="icon-box d-center">
                <i className="material-symbols-outlined fs-two"> view_in_ar </i>
              </div>
              <div className="title-area">
                <h3 className="visible-slowly-bottom mt-6 mb-3">
                  Game Development
                </h3>
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
          <div className="col-lg-4 col-sm-6">
            <div
              onMouseMove={handleMouseMove}
              style={style}
              className="single-box single-box-service box-style box-first p-5 px-xl-8 py-xl-10">
              <div className="icon-box d-center">
                <i className="material-symbols-outlined fs-two">
                  {" "}
                  auto_awesome_motion{" "}
                </i>
              </div>
              <div className="title-area">
                <h3 className="visible-slowly-bottom mt-6 mb-3">
                  Game Animation
                </h3>
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
          <div className="col-lg-4 col-sm-6">
            <div
              onMouseMove={handleMouseMove}
              style={style}
              className="single-box single-box-service box-style box-first p-5 px-xl-8 py-xl-10">
              <div className="icon-box d-center">
                <i className="material-symbols-outlined fs-two">
                  {" "}
                  architecture{" "}
                </i>
              </div>
              <div className="title-area">
                <h3 className="visible-slowly-bottom mt-6 mb-3">Game UI/UX</h3>
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
        </div>
      </div>
    </section>
  );
};

export default Services;
