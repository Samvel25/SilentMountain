import { openjobshome1 } from "@/public/data/jobshome1";
import Link from "next/link";
import React, { useState } from "react";

const Jobs = () => {
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
    <section className="job-opens index-two pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-text text-center">
              <h4 className="sub-title">
                We&apos;re Looking for <span>Talented Professionals</span>
              </h4>
              <span className="fs-two heading mb-6 w-75 m-auto">
                <span>Let&apos;s Build the Future</span> of Video Games
                Together!
              </span>
              <p>
                Our belief is that being simple, honest, self-driven and
                motivated combined with the constant pursuit of the ultimate
                company atmosphere can help grow a creative and robust team.
              </p>
            </div>
          </div>
        </div>
        <div className="row cus-mar">
          {openjobshome1.slice(2).map(({ id, icon, title }) => (
            <div key={id} className="col-md-6">
              <div
                onMouseMove={handleMouseMove}
                style={style}
                className="single-box flex-wrap box-style box-second p-3 p-md-6 d-center gap-4 gap-md-6 justify-content-between">
                <div className="content-box d-flex flex-wrap gap-4 gap-md-6">
                  <div className="icon-box d-inline-flex d-center">{icon}</div>
                  <div className="info-box">
                    <ul className="d-flex flex-wrap gap-3 gap-sm-6 mb-5">
                      <li className="d-flex align-items-center gap-2">
                        <i className="material-symbols-outlined mat-icon">
                          {" "}
                          work{" "}
                        </i>
                        <span className="fs-seven">Designer</span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <i className="material-symbols-outlined mat-icon">
                          {" "}
                          location_on{" "}
                        </i>
                        <span className="fs-seven">Full Time</span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <i className="material-symbols-outlined mat-icon">
                          {" "}
                          schedule{" "}
                        </i>
                        <span className="fs-seven">2 Days ago</span>
                      </li>
                    </ul>
                    <Link href="career-details">
                      <h5>{title}</h5>
                    </Link>
                  </div>
                </div>
                <Link href="career-details" className="end-area d-center">
                  <i className="material-symbols-outlined"> call_made </i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
