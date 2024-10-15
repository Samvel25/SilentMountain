import Link from "next/link";
import callToAcation from "@/public/images/call-to-action-circle.png";
import Image from "next/image";
import { useState } from "react";

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
    <section className="call-to-action overflow-hidden">
      <div className="container pt-120 pb-120">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5">
            <div className="sec-img mt-0 mb-10 mb-sm-15 mb-lg-0 text-start d-center position-relative">
              <Image src={callToAcation} alt="Image" />
              <div className="video-bg position-absolute">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-text">
              <h4 className="sub-title">
                Join Our <span>Community</span>
              </h4>
              <span className="fs-two heading mb-6">
                Connect With <span>Gamers Worldwide</span>
              </span>
              <p>
                Join the revolution and immerse yourself in the ultimate gaming
                experience, where the boundaries between reality and fantasy
                blur, and the only limit is your imagination. Sign up now and be
                the first to play our latest game releases.
              </p>
            </div>
            <div className="btn-area">
              <div className="btn-area alt-bg mt-10 d-flex flex-wrap gap-6 align-items-center">
                <Link
                  href="/game"
                  onMouseMove={handleMouseMove}
                  style={style}
                  className="box-style btn-box d-center">
                  Explore Our Games
                </Link>
                <Link
                  onMouseMove={handleMouseMove}
                  style={style}
                  href="/about-us"
                  className="box-style btn-box btn-box-third d-center">
                  Join Now Our Community
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
