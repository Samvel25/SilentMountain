import { useState } from "react";

const Benefits = () => {
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
    <section className="our-game-features benefits pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center section-text">
          <div className="col-lg-6 text-center">
            <h4 className="sub-title">
              Client-Centric <span>Creativity</span>
            </h4>
            <span className="fs-two heading mb-4">
              Our Fundamental Benefits in <span>Game ART and Development</span>
            </span>
            <p className="mb-4">
              A client-centric approach coupled with creative freedom,
              professional experimentation, and a willingness to create beyond
              the limits makes us a great partner for businesses looking to
              deliver a product that stands out.
            </p>
          </div>
        </div>
        <div className="row cus-mar">
          <div className="col-md-6">
            <div
              onMouseMove={handleMouseMove}
              style={style}
              className="single-box flex-wrap box-style box-second py-5 px-4 py-sm-10 px-sm-9 d-center justify-content-between">
              <div className="content-box d-flex gap-4 gap-md-6">
                <div className="icon-box d-inline-flex d-center">
                  <i className="material-symbols-outlined fs-three">
                    {" "}
                    sports_esports{" "}
                  </i>
                </div>
                <div className="info-box">
                  <h5 className="mb-2">Customized Game Art and Development</h5>
                  <p>
                    All our services, from art creation to a full-fledged game,
                    are implemented using flexible methodologies and taking into
                    account all client requirements for an effective result.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              onMouseMove={handleMouseMove}
              style={style}
              className="single-box flex-wrap box-style box-second py-5 px-4 py-sm-10 px-sm-9 d-center justify-content-between">
              <div className="content-box d-flex gap-4 gap-md-6">
                <div className="icon-box d-inline-flex d-center">
                  <i className="material-symbols-outlined fs-three"> search </i>
                </div>
                <div className="info-box">
                  <h5 className="mb-2">Transparent & Reliable Communication</h5>
                  <p>
                    The client has constant access & the ability to control
                    entire workflow & receive instant feedback on any aspect of
                    their interest, which ensures repeat business in 90% of
                    cases.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              onMouseMove={handleMouseMove}
              style={style}
              className="single-box flex-wrap box-style box-second py-5 px-4 py-sm-10 px-sm-9 d-center justify-content-between">
              <div className="content-box d-flex gap-4 gap-md-6">
                <div className="icon-box d-inline-flex d-center">
                  <i className="material-symbols-outlined fs-three">
                    {" "}
                    verified{" "}
                  </i>
                </div>
                <div className="info-box">
                  <h5 className="mb-2">
                    Commitment to Global Quality Standards
                  </h5>
                  <p>
                    Whether it&apos;s quality or security standards, our
                    customers don&apos;t have to worry: we follow the latest
                    innovations in data protection and always adhere to global
                    quality standards for world-class products.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              onMouseMove={handleMouseMove}
              style={style}
              className="single-box flex-wrap box-style box-second py-5 px-4 py-sm-10 px-sm-9 d-center justify-content-between">
              <div className="content-box d-flex gap-4 gap-md-6">
                <div className="icon-box d-inline-flex d-center">
                  <i className="material-symbols-outlined fs-three">
                    {" "}
                    military_tech{" "}
                  </i>
                </div>
                <div className="info-box">
                  <h5 className="mb-2">
                    Proven Track Record in Different Styles
                  </h5>
                  <p>
                    A team of 350+ professional artists and developers with
                    extensive experience in both casual and AAA projects of
                    various styles and genres can cover the volume of almost any
                    project.
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

export default Benefits;
