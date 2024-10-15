import { useState } from "react";

const KeyComponent = () => {
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
    <section className="our-game-features pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-text text-center">
              <h2 className="visible-slowly-bottom sub-title">
                The Four Key Components of a <span>Gamestorm studio</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row cus-mar">
          <div className="col-md-6">
            <div
              onMouseMove={handleMouseMove}
              style={style}
              className="single-box flex-wrap box-style box-second px-5 py-5 py-10 px-9 d-center justify-content-between">
              <div className="content-box d-flex gap-4 gap-md-6">
                <div className="icon-box d-inline-flex d-center">
                  <i className="material-symbols-outlined fs-three">
                    {" "}
                    celebration{" "}
                  </i>
                </div>
                <div className="info-box">
                  <h5 className="mb-2">Long-Lasting Fun</h5>
                  <p>
                    Our games offer explosive fun with replayability and
                    constant content updates through our games as a service
                    approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              onMouseMove={handleMouseMove}
              style={style}
              className="single-box flex-wrap box-style box-second px-5 py-5 py-10 px-9 d-center justify-content-between">
              <div className="content-box d-flex gap-4 gap-md-6">
                <div className="icon-box d-inline-flex d-center">
                  <i className="material-symbols-outlined fs-three">
                    {" "}
                    stadia_controller{" "}
                  </i>
                </div>
                <div className="info-box">
                  <h5 className="mb-2">For Everyone</h5>
                  <p>
                    When developing our video games, we make sure that every
                    player can scratch their gaming itch, from casual to
                    completists to speed runners.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              onMouseMove={handleMouseMove}
              style={style}
              className="single-box flex-wrap box-style box-second px-5 py-5 py-10 px-9 d-center justify-content-between">
              <div className="content-box d-flex gap-4 gap-md-6">
                <div className="icon-box d-inline-flex d-center">
                  <i className="material-symbols-outlined fs-three">
                    {" "}
                    tips_and_updates{" "}
                  </i>
                </div>
                <div className="info-box">
                  <h5 className="mb-2">Unique Twist</h5>
                  <p>
                    We put our own spin on beloved game genres, from a racing
                    game where the goal is to stop, to a point-and-click game in
                    a 360-degree environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              onMouseMove={handleMouseMove}
              style={style}
              className="single-box flex-wrap box-style box-second px-5 py-5 py-10 px-9 d-center justify-content-between">
              <div className="content-box d-flex gap-4 gap-md-6">
                <div className="icon-box d-inline-flex d-center">
                  <i className="material-symbols-outlined fs-three">
                    {" "}
                    track_changes{" "}
                  </i>
                </div>
                <div className="info-box">
                  <h5 className="mb-2">Gradual Learning Curve</h5>
                  <p>
                    Our games are easy to learn but hard to master. This makes
                    our games both accessible to newcomers and challenging for
                    pros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyComponent;
