import { openjobshome1 } from "@/public/data/jobshome1";
import Link from "next/link";
import { useState } from "react";

const JobOpens = () => {
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
    <section className="job-opens pt-120 pb-120">
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
          {openjobshome1.map(({ id, company, icon, tag, title }) => (
            <div key={id} className="col-md-6">
              <div
                onMouseMove={handleMouseMove}
                style={style}
                className="single-box flex-wrap box-style box-second p-3 p-md-6 d-flex gap-4 gap-md-6 justify-content-between">
                <div className="content-box d-flex flex-wrap gap-4 gap-md-6">
                  <div className="icon-box d-inline-flex d-center">{icon}</div>
                  <div className="info-box">
                    <Link href="career-details">
                      <h5>{title}</h5>
                    </Link>
                    <Link href="career-details"></Link>
                    <span className="fs-seven mt-2">{company}</span>
                    <ul className="d-flex gap-6 mt-6">
                      <li className="d-flex align-items-center gap-2">
                        <i className="material-symbols-outlined mat-icon">
                          {" "}
                          work{" "}
                        </i>
                        <span className="fs-seven">Full Time</span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <i className="material-symbols-outlined mat-icon">
                          {" "}
                          schedule{" "}
                        </i>
                        <span className="fs-seven">Full Time</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="end-area">
                  <span className="fs-seven p-1 px-2">{tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobOpens;
