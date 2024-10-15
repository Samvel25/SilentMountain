import line1 from "@/public/images/abs-items/line-1.png";
import object1 from "@/public/images/abs-items/object-1.png";
import videobg from "@/public/images/video-bg.png";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const Trailer = () => {
  const [isOpen, setOpen] = useState(false);
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
    <section className="our-focus bg-transparent game-trailers position-relative overflow-hidden pt-120">
      <div className="shape-area">
        <Image src={line1} className="shape-1" alt="icon" />
        <Image src={object1} className="shape-2" alt="icon" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-text text-center">
              <h4 className="sub-title">
                Game <span>Trailers</span>
              </h4>
              <span className="fs-two heading mb-6">
                Our games build worlds, connect communities, and entertain
                billions.
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="position-relative d-center">
              <Image src={videobg} className="w-100" alt="sec-img" />
              <div className="circle-text position-absolute">
                <div className="text">
                  <p>
                    {"W atch the video * Watch the video *"
                      .split("")
                      .map((char, i) => (
                        <span
                          key={i}
                          style={{ transform: `rotate(${i * 10}deg)` }}>
                          {char}
                        </span>
                      ))}
                  </p>
                </div>
                <span
                  onClick={() => setOpen(true)}
                  onMouseMove={handleMouseMove}
                  style={style}
                  className="box-style btn-box-second heading-five fs-five pointer mfp-iframe popupvideo text-uppercase d-center position-absolute">
                  <i className="fa-solid fa-play fs-three"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
    </section>
  );
};

export default Trailer;
