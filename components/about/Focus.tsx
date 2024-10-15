import line1 from "@/public/images/abs-items/line-1.png";
import object1 from "@/public/images/abs-items/object-1.png";
import ourFocusBg from "@/public/images/our-focus-bg.png";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const Focus = () => {
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
    <section className="our-focus position-relative pt-120 pb-120">
      <div className="shape-area">
        <Image src={line1} className="shape-1" alt="icon" />
        <Image src={object1} className="shape-2" alt="icon" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-text text-center">
              <h4 className="sub-title">
                Our <span>Focus</span>
              </h4>
              <span className="fs-two heading mb-6">
                Flexible, focused and innovative: we’re focused on achieving
                your project <span>vision and business goals</span>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="position-relative d-center">
              <Image src={ourFocusBg} className="w-100" alt="sec-img" />
              <span
                onClick={() => setOpen(true)}
                onMouseMove={handleMouseMove}
                style={style}
                className="box-style btn-box-second heading-five mfp-iframe pointer popupvideo fs-five text-uppercase d-center position-absolute">
                Play
              </span>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="IaT4DneyKLc"
        onClose={() => setOpen(false)}
      />
    </section>
  );
};

export default Focus;
