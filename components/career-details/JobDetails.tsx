import Link from "next/link";
import React, { useState } from "react";

const JobDetails = () => {
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
    <section className="job-opens details pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-7 col-lg-7">
            <div className="content-wrapper d-grid gap-4 gap-sm-8">
              <div className="d-flex gap-6 align-items-center">
                <div className="end-area">
                  <span className="fs-seven p-1 px-2">3D Artist</span>
                </div>
                <ul className="d-flex gap-6">
                  <li className="d-flex align-items-center gap-2">
                    <i className="material-symbols-outlined mat-icon"> work </i>
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
              <div className="single-content mb-8">
                <h2 className="visible-slowly-bottom display-four mb-2">
                  3D Artist
                </h2>
                <p>
                  We are looking for a 3D Artist to visualize ideas into vibrant
                  and colorful 3D assets that will meet with a very broad
                  audience. You will work in direct contact with product and
                  development teams to produce environments, characters, props,
                  and other visual elements for our games.
                </p>
              </div>
              <div className="single-content">
                <h3 className="visible-slowly-bottom mb-3">About Us</h3>
                <p>
                  We are looking for a 3D Artist to visualize ideas into vibrant
                  and colorful 3D assets that will meet with a very broad
                  audience. You will work in direct contact with product and
                  development teams to produce environments, characters, props,
                  and other visual elements for our games.
                </p>
              </div>
              <div className="single-content">
                <h3 className="visible-slowly-bottom mb-3">About You</h3>
                <ul className="ms-4 d-grid gap-1">
                  <li>
                    Create 3D models, textures, and materials for mobile games,
                  </li>
                  <li>
                    Visually participating in the game development process in a
                    versatile way with the game designer and art team lead,
                  </li>
                  <li>
                    Rigging for animation and animate humanoid characters,
                  </li>
                  <li>Keeping up to date on the latest trends,</li>
                  <li>
                    Bachelor&apos;s Degree in 3D Animation, Animation, Fine Arts
                    or related field,
                  </li>
                  <li>
                    Proficient experience in Blender or Maya, Photoshop, and
                    Substance Painter,
                  </li>
                  <li>
                    Proficient experience in 3D Modeling, Animation, Rigging,
                    UV-Mapping, Texturing, 2D painting, and compositing,
                  </li>
                  <li>Intermediate knowledge of Unity,</li>
                  <li>Delivering low-poly 3D models for mobile platforms,</li>
                  <li>Working experience with hyper-casual games is a plus,</li>
                  <li>
                    Digital art skills besides traditional art skills including
                    knowledge of composition, layout, lighting, color theory,
                  </li>
                  <li>Interest in the agile working environment,</li>
                  <li>
                    Enthusiastic about self-improvement and learning new tools,
                  </li>
                  <li>Passion for creating and playing mobile games,</li>
                </ul>
              </div>
              <div className="single-content">
                <h3 className="visible-slowly-bottom mb-3">Why Join Us?</h3>
                <ul className="ms-4 d-grid gap-1">
                  <li>Competitive salary,</li>
                  <li>Health insurance,</li>
                  <li>Continuous learning with mentorship, coaching,</li>
                  <li>Happy hours and team motivational events,</li>
                  <li>Fully Remote working option.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 col-md-7 mt-8 mt-lg-0 alt-bg">
            <div className="apply-area cus-scrollbar text-center py-15 px-8">
              <div className="icon-box mb-6 mb-sm-10 d-inline-flex d-center">
                <i className="material-symbols-outlined fs-one"> draw </i>
              </div>
              <div className="section-text">
                <h2 className="visible-slowly-bottom mb-3">
                  Apply for the position now!
                </h2>
                <span>Join a growing team in a dynamic environment.</span>
              </div>
              <div className="btn-area">
                <div className="btn-area mt-5 mt-sm-8 flex-wrap gap-6 d-center">
                  <Link
                    onMouseMove={handleMouseMove}
                    style={style}
                    href="/"
                    className="box-style btn-box d-center">
                    Apply Now
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

export default JobDetails;
