import line1 from "@/public/images/abs-items/line-1.png";
import object1 from "@/public/images/abs-items/object-1.png";
import videobg2 from "@/public/images/video-bg-2.png";
import Image from "next/image";
import CounterElement from "../Counter";
import ModalVideo from "react-modal-video";
import { useState } from "react";

const Counter = () => {
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
    <section className="our-focus services-area position-relative pt-120">
      <div className="shape-area">
        <Image src={line1} className="shape-1" alt="icon" />
        <Image src={object1} className="shape-2" alt="icon" />
      </div>
      <div className="container">
        <div className="row cus-mar pb-120">
          <div className="col-sm-6 col-xl-3">
            <div className="single-box d-grid justify-content-center">
              <div className="counters d-center">
                <CounterElement end={26} className="display-one symbol" />
                <span className="display-one symbol">+</span>
              </div>
              <p className="name-area fs-seven">Years in Business</p>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="single-box d-grid justify-content-center">
              <div className="counters d-center">
                <CounterElement end={78} className="symbol display-one" />
                <span className="display-one symbol">+</span>
              </div>
              <p className="name-area fs-seven">Downloads</p>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="single-box d-grid justify-content-center">
              <div className="counters d-center">
                <CounterElement end={89} className="symbol display-one" />
                <span className="display-one symbol">+</span>
              </div>
              <p className="name-area fs-seven">Games Launched</p>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="single-box d-grid justify-content-center">
              <div className="counters d-center">
                <span>
                  <CounterElement end={22} className="symbol display-one" />
                </span>
                <span className="display-one symbol">+</span>
              </div>
              <p className="name-area fs-seven">Gaming Projects Delivered</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="position-relative d-center">
              <Image src={videobg2} className="w-100" alt="sec-img" />
              <span
                onClick={() => setOpen(true)}
                onMouseMove={handleMouseMove}
                style={style}
                className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute">
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

export default Counter;
