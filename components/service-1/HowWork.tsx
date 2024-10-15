import React, { useState } from "react";

const HowWork = () => {
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
    <section className="how-it-works pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center section-text">
          <div className="col-lg-6 text-center">
            <h4 className="sub-title">
              A Simple yet Powerful and efficient <span>Process</span>
            </h4>
            <span className="fs-two heading mb-4">
              Our Game <span>Development Process</span>
            </span>
            <p className="mb-4">
              Take your game development for next level in 10 simple step.
              Always work Done By the Following Process
            </p>
          </div>
        </div>
        <div className="row cus-mar">
          <div className="col-sm-6 col-xl-3 position-relative d-center">
            <div className="abs-area d-center position-absolute">
              <i className="material-symbols-outlined mat-icon">double_arrow</i>
            </div>
            <div
              onMouseMove={handleMouseMove}
              style={style}
              className="single-box box-style box-first d-grid align-items-center text-center p-5 px-xl-8 py-xl-10">
              <div className="icon-box d-center m-auto">
                <i className="material-symbols-outlined fs-two">
                  {" "}
                  edit_document{" "}
                </i>
              </div>
              <div className="title-area">
                <h4 className="mt-6 mb-3">Script Writing</h4>
                <p>
                  We start by sketching the script using your instructions as a
                  guide, and we then wait for your approval before moving.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3 position-relative d-center">
            <div className="abs-area d-center position-absolute">
              <i className="material-symbols-outlined mat-icon">double_arrow</i>
            </div>
            <div
              onMouseMove={handleMouseMove}
              style={style}
              className="single-box box-style box-first d-grid align-items-center text-center p-5 px-xl-8 py-xl-10">
              <div className="icon-box d-center m-auto">
                <i className="material-symbols-outlined fs-two"> burst_mode </i>
              </div>
              <div className="title-area">
                <h4 className="mt-6 mb-3">Story Board</h4>
                <p>
                  We draw a representation of your work that shows the camera
                  angles and the script.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3 position-relative d-center">
            <div className="abs-area d-center position-absolute">
              <i className="material-symbols-outlined mat-icon">double_arrow</i>
            </div>
            <div
              onMouseMove={handleMouseMove}
              style={style}
              className="single-box box-style box-first d-grid align-items-center text-center p-5 px-xl-8 py-xl-10">
              <div className="icon-box d-center m-auto">
                <i className="material-symbols-outlined fs-two"> view_in_ar </i>
              </div>
              <div className="title-area">
                <h4 className="mt-6 mb-3">3D Modeling</h4>
                <p>
                  We create the objects, people, settings, and other things that
                  go into creating your video.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3 position-relative d-center">
            <div className="abs-area d-center position-absolute">
              <i className="material-symbols-outlined mat-icon">double_arrow</i>
            </div>
            <div
              onMouseMove={handleMouseMove}
              style={style}
              className="single-box box-style box-first d-grid align-items-center text-center p-5 px-xl-8 py-xl-10">
              <div className="icon-box d-center m-auto">
                <i className="material-symbols-outlined fs-two">
                  {" "}
                  auto_awesome_motion{" "}
                </i>
              </div>
              <div className="title-area">
                <h4 className="mt-6 mb-3">Animation</h4>
                <p>
                  After creating the animations and adding voiceovers and sound
                  effects, we turn the project over.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWork;
