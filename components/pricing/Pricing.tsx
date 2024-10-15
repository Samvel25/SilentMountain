import Link from "next/link";
import React, { useState } from "react";

const Pricing = () => {
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
    <section className="pricing-plan pt-120 pb-120">
      <div className="container">
        <div className="row section-header justify-content-center">
          <div className="col-lg-6 text-center">
            <h4 className="sub-title">
              Deliver <span>successful projects</span> every time
            </h4>
            <span className="fs-two heading mb-6">
              Transparent and Affordable <span>Game Art and Development</span>{" "}
              Pricing Plan
            </span>
            <p>
              Fair and Clear Pricing for Game Art and Development Services. we
              provide flexibility, affordability, transparency, customization,
              and quality.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row cus-mar justify-content-end">
          <div className="col-xl-4 col-md-6">
            <div className="single-box py-5 py-sm-10 px-3 px-sm-6">
              <h3 className="visible-slowly-bottom mb-5 mb-sm-10">
                Concept Art
              </h3>
              <div className="radio-radio-item d-grid gap-3">
                <label className="single-radio position-relative d-flex align-items-center p-5 ps-15">
                  <span className="text-start d-grid">
                    <span>Character Modeling</span>
                    <span className="fs-three heading py-3">$500-$2500</span>
                    <span>Per Character</span>
                  </span>
                  <input type="radio" name="pricing-select" />
                  <span className="checkmark"></span>
                </label>
                <label className="single-radio position-relative d-flex align-items-center p-5 ps-15">
                  <span className="text-start d-grid">
                    <span>Character Modeling</span>
                    <span className="fs-three heading py-3">$1000-$5000</span>
                    <span>Per Character</span>
                  </span>
                  <input type="radio" name="pricing-select" />
                  <span className="checkmark"></span>
                </label>
                <label className="single-radio position-relative d-flex align-items-center p-5 ps-15">
                  <span className="text-start d-grid">
                    <span>Character Modeling</span>
                    <span className="fs-three heading py-3">$50-$500</span>
                    <span>Per Character</span>
                  </span>
                  <input type="radio" name="pricing-select" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="btn-area text-center mt-5 mt-sm-10 alt-bg">
                <Link
                  onMouseMove={handleMouseMove}
                  style={style}
                  href="/"
                  className="box-style btn-box d-center">
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="single-box py-5 py-sm-10 px-3 px-sm-6">
              <h3 className="visible-slowly-bottom mb-5 mb-sm-10">
                3D Modeling
              </h3>
              <div className="radio-radio-item d-grid gap-3">
                <label className="single-radio position-relative d-flex align-items-center p-5 ps-15">
                  <span className="text-start d-grid">
                    <span>Character Modeling</span>
                    <span className="fs-three heading py-3">$500-$2500</span>
                    <span>Per Character</span>
                  </span>
                  <input type="radio" name="pricing-select" />
                  <span className="checkmark"></span>
                </label>
                <label className="single-radio position-relative d-flex align-items-center p-5 ps-15">
                  <span className="text-start d-grid">
                    <span>Character Modeling</span>
                    <span className="fs-three heading py-3">$1000-$5000</span>
                    <span>Per Character</span>
                  </span>
                  <input type="radio" name="pricing-select" />
                  <span className="checkmark"></span>
                </label>
                <label className="single-radio position-relative d-flex align-items-center p-5 ps-15">
                  <span className="text-start d-grid">
                    <span>Character Modeling</span>
                    <span className="fs-three heading py-3">$50-$500</span>
                    <span>Per Character</span>
                  </span>
                  <input type="radio" name="pricing-select" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="btn-area text-center mt-5 mt-sm-10 alt-bg">
                <Link
                  onMouseMove={handleMouseMove}
                  style={style}
                  href="/"
                  className="box-style btn-box d-center">
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="single-box py-5 py-sm-10 px-3 px-sm-6">
              <h3 className="visible-slowly-bottom mb-5 mb-sm-10">Texturing</h3>
              <div className="radio-radio-item d-grid gap-3">
                <label className="single-radio position-relative d-flex align-items-center p-5 ps-15">
                  <span className="text-start d-grid">
                    <span>Character Modeling</span>
                    <span className="fs-three heading py-3">$500-$2500</span>
                    <span>Per Character</span>
                  </span>
                  <input type="radio" name="pricing-select" />
                  <span className="checkmark"></span>
                </label>
                <label className="single-radio position-relative d-flex align-items-center p-5 ps-15">
                  <span className="text-start d-grid">
                    <span>Character Modeling</span>
                    <span className="fs-three heading py-3">$1000-$5000</span>
                    <span>Per Character</span>
                  </span>
                  <input type="radio" name="pricing-select" />
                  <span className="checkmark"></span>
                </label>
                <label className="single-radio position-relative d-flex align-items-center p-5 ps-15">
                  <span className="text-start d-grid">
                    <span>Character Modeling</span>
                    <span className="fs-three heading py-3">$50-$500</span>
                    <span>Per Character</span>
                  </span>
                  <input type="radio" name="pricing-select" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="btn-area text-center mt-5 mt-sm-10 alt-bg">
                <Link
                  onMouseMove={handleMouseMove}
                  style={style}
                  href="/"
                  className="box-style btn-box d-center">
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="single-box py-5 py-sm-10 px-3 px-sm-6">
              <h3 className="visible-slowly-bottom mb-5 mb-sm-10">Animation</h3>
              <div className="radio-radio-item d-grid gap-3">
                <label className="single-radio position-relative d-flex align-items-center p-5 ps-15">
                  <span className="text-start d-grid">
                    <span>Character Modeling</span>
                    <span className="fs-three heading py-3">$500-$2500</span>
                    <span>Per Character</span>
                  </span>
                  <input type="radio" name="pricing-select" />
                  <span className="checkmark"></span>
                </label>
                <label className="single-radio position-relative d-flex align-items-center p-5 ps-15">
                  <span className="text-start d-grid">
                    <span>Character Modeling</span>
                    <span className="fs-three heading py-3">$1000-$5000</span>
                    <span>Per Character</span>
                  </span>
                  <input type="radio" name="pricing-select" />
                  <span className="checkmark"></span>
                </label>
                <label className="single-radio position-relative d-flex align-items-center p-5 ps-15">
                  <span className="text-start d-grid">
                    <span>Character Modeling</span>
                    <span className="fs-three heading py-3">$50-$500</span>
                    <span>Per Character</span>
                  </span>
                  <input type="radio" name="pricing-select" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="btn-area text-center mt-5 mt-sm-10 alt-bg">
                <Link
                  onMouseMove={handleMouseMove}
                  style={style}
                  href="/"
                  className="box-style btn-box d-center">
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="single-box py-5 py-sm-10 px-3 px-sm-6">
              <h3 className="visible-slowly-bottom mb-5 mb-sm-10">
                Programming
              </h3>
              <div className="radio-radio-item d-grid gap-3">
                <label className="single-radio position-relative d-flex align-items-center p-5 ps-15">
                  <span className="text-start d-grid">
                    <span>Character Modeling</span>
                    <span className="fs-three heading py-3">$500-$2500</span>
                    <span>Per Character</span>
                  </span>
                  <input type="radio" name="pricing-select" />
                  <span className="checkmark"></span>
                </label>
                <label className="single-radio position-relative d-flex align-items-center p-5 ps-15">
                  <span className="text-start d-grid">
                    <span>Character Modeling</span>
                    <span className="fs-three heading py-3">$1000-$5000</span>
                    <span>Per Character</span>
                  </span>
                  <input type="radio" name="pricing-select" />
                  <span className="checkmark"></span>
                </label>
                <label className="single-radio position-relative d-flex align-items-center p-5 ps-15">
                  <span className="text-start d-grid">
                    <span>Character Modeling</span>
                    <span className="fs-three heading py-3">$50-$500</span>
                    <span>Per Character</span>
                  </span>
                  <input type="radio" name="pricing-select" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="btn-area text-center mt-5 mt-sm-10 alt-bg">
                <Link
                  onMouseMove={handleMouseMove}
                  style={style}
                  href="/"
                  className="box-style btn-box d-center">
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="single-box py-5 py-sm-10 px-3 px-sm-6">
              <h3 className="visible-slowly-bottom mb-5 mb-sm-10">
                Sound Design
              </h3>
              <div className="radio-radio-item d-grid gap-3">
                <label className="single-radio position-relative d-flex align-items-center p-5 ps-15">
                  <span className="text-start d-grid">
                    <span>Character Modeling</span>
                    <span className="fs-three heading py-3">$500-$2500</span>
                    <span>Per Character</span>
                  </span>
                  <input type="radio" name="pricing-select" />
                  <span className="checkmark"></span>
                </label>
                <label className="single-radio position-relative d-flex align-items-center p-5 ps-15">
                  <span className="text-start d-grid">
                    <span>Character Modeling</span>
                    <span className="fs-three heading py-3">$1000-$5000</span>
                    <span>Per Character</span>
                  </span>
                  <input type="radio" name="pricing-select" />
                  <span className="checkmark"></span>
                </label>
                <label className="single-radio position-relative d-flex align-items-center p-5 ps-15">
                  <span className="text-start d-grid">
                    <span>Character Modeling</span>
                    <span className="fs-three heading py-3">$50-$500</span>
                    <span>Per Character</span>
                  </span>
                  <input type="radio" name="pricing-select" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="btn-area text-center mt-5 mt-sm-10 alt-bg">
                <Link
                  onMouseMove={handleMouseMove}
                  style={style}
                  href="/"
                  className="box-style btn-box d-center">
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
