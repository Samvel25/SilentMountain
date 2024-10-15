import gameImg2 from "@/public/images/game-image-2.png";
import reviewImg2 from "@/public/images/review-image-2.png";
import appstore from "@/public/images/appstore.png";
import amazonstre from "@/public/images/amazonstore.png";
import googleplay from "@/public/images/googleplay.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
const OtherGames = () => {
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
    <section className="recently-completed">
      <div className="container pt-120 pb-120">
        <div className="row section-header justify-content-between align-items-center">
          <div className="col-lg-8">
            <h2 className="visible-slowly-bottom sub-title">
              Other Games you might like
            </h2>
            <p>
              Join the revolution in gaming and experience the thrill of the
              game like never before, with our advanced technology and dynamic
              gameplay.
            </p>
          </div>
          <div className="col-lg-3 mt-8 mt-lg-0 btn-movement">
            <Link
              onMouseMove={handleMouseMove}
              style={style}
              href="#"
              className="box-style d-center px-3 gap-3 m-auto">
              View All Project
              <i className="material-symbols-outlined"> call_made </i>
            </Link>
          </div>
        </div>
        <div className="row cus-mar our-games bg-transparent justify-content-center">
          <div className="col-md-6">
            <div className="single-box">
              <div className="position-relative d-center">
                <span className="feature-tag start d-center position-absolute">
                  Feature
                </span>
                <Image
                  src={gameImg2}
                  className="w-100 thumb-img"
                  alt="sec-img"
                />
                <span
                  onClick={() => setOpen(true)}
                  onMouseMove={handleMouseMove}
                  style={style}
                  className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute">
                  Play
                </span>
              </div>
              <div className="info-area position-relative p-3 p-lg-5">
                <div className="d-flex align-items-end gap-4 gap-sm-8">
                  <div className="img-area">
                    <Image src={reviewImg2} alt="image" />
                  </div>
                  <div className="info-area">
                    <Link href="/game-details">
                      <h3 className="visible-slowly-bottom mb-4">Crazy Wild</h3>
                    </Link>
                    <ul className="d-flex flex-wrap fs-seven align-items-center gap-5 gap-md-10">
                      <li>Horror Adventure</li>
                      <li>Mobile</li>
                      <li>Action RPG</li>
                      <li>PC</li>
                    </ul>
                  </div>
                </div>
                <div className="review-box mt-5 mt-md-8 mb-6 mb-md-10 w-100 p-2 p-sm-4 d-center gap-3 justify-content-between">
                  <div className="single-area d-flex align-items-center gap-2">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <i className="material-symbols-outlined mat-icon">star</i>
                      <h4 className="fs-four">4.5</h4>
                    </div>
                    <p className="fs-seven">5.2M Reviews</p>
                  </div>
                  <div className="single-area d-grid d-sm-flex gap-2 align-items-center">
                    <h4 className="fs-four mb-1">500M+</h4>
                    <p className="fs-seven">Downloads</p>
                  </div>
                </div>
                <div className="app-download d-flex gap-4 align-items-center">
                  <Link
                    href="https://www.apple.com/app-store/"
                    className="w-100">
                    <Image src={appstore} className="w-100" alt="Image" />
                  </Link>
                  <Link href="https://play.google.com/" className="w-100">
                    <Image src={googleplay} className="w-100" alt="Image" />
                  </Link>
                  <Link href="https://www.amazon.com/" className="w-100">
                    <Image src={amazonstre} className="w-100" alt="Image" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="single-box">
              <div className="position-relative d-center">
                <span className="feature-tag start d-center position-absolute">
                  Feature
                </span>
                <Image
                  src={gameImg2}
                  className="w-100 thumb-img"
                  alt="sec-img"
                />
                <span
                  onClick={() => setOpen(true)}
                  onMouseMove={handleMouseMove}
                  style={style}
                  className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute">
                  Play
                </span>
              </div>
              <div className="info-area position-relative p-3 p-lg-5">
                <div className="d-flex align-items-end gap-4 gap-sm-8">
                  <div className="img-area">
                    <Image src={reviewImg2} alt="image" />
                  </div>
                  <div className="info-area">
                    <Link href="/game-details">
                      <h3 className="visible-slowly-bottom mb-4">Crazy Wild</h3>
                    </Link>
                    <ul className="d-flex flex-wrap fs-seven align-items-center gap-5 gap-md-10">
                      <li>Horror Adventure</li>
                      <li>Mobile</li>
                      <li>Action RPG</li>
                      <li>PC</li>
                    </ul>
                  </div>
                </div>
                <div className="review-box mt-5 mt-md-8 mb-6 mb-md-10 w-100 p-2 p-sm-4 d-center gap-3 justify-content-between">
                  <div className="single-area d-flex align-items-center gap-2">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <i className="material-symbols-outlined mat-icon">star</i>
                      <h4 className="fs-four">4.5</h4>
                    </div>
                    <p className="fs-seven">5.2M Reviews</p>
                  </div>
                  <div className="single-area d-grid d-sm-flex gap-2 align-items-center">
                    <h4 className="fs-four mb-1">500M+</h4>
                    <p className="fs-seven">Downloads</p>
                  </div>
                </div>
                <div className="app-download d-flex gap-4 align-items-center">
                  <Link
                    href="https://www.apple.com/app-store/"
                    className="w-100">
                    <Image src={appstore} className="w-100" alt="Image" />
                  </Link>
                  <Link href="https://play.google.com/" className="w-100">
                    <Image src={googleplay} className="w-100" alt="Image" />
                  </Link>
                  <Link href="https://www.amazon.com/" className="w-100">
                    <Image src={amazonstre} className="w-100" alt="Image" />
                  </Link>
                </div>
              </div>
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

export default OtherGames;
