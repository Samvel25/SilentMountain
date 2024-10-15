import Link from "next/link";
import React, { useState } from "react";

const CallToAction = () => {
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
    <section className="call-to-action index-two pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="section-text text-center">
              <h4 className="sub-title">
                Get started on your next big game idea with us
              </h4>
              <span className="display-four mb-6 w-75 m-auto">
                Bring Ideas to Life With Our Game Dev Solutions
              </span>
              <p className="w-75 m-auto">
                Take your gaming experience to the next level with our
                exceptional game development services.Unlock the full potential
                of your game with our premium game art and expert game
                development services.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div
              onMouseMove={handleMouseMove}
              style={style}
              className="text-center btn-movement box-style mx-auto">
              <Link
                href="#"
                className="box-style d-center text-start px-3 gap-3 m-auto">
                Get Started Now
                <i className="material-symbols-outlined"> call_made </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
