"use client";
import Link from "next/link";
import appStore from "@/public/images/appstore.png";
import googlePlay from "@/public/images/googleplay.png";
import amazonStore from "@/public/images/amazonstore.png";
import Image from "next/image";
import reviewImg from "@/public/images/review-img.png";
import { useState } from "react";
import { gameTabHome1 } from "@/public/data/gametab";
import ModalVideo from "react-modal-video";

const OurGames = () => {
  const [isOpen, setOpen] = useState(false);
  const [active, setActive] = useState(1);
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
    <section className="our-games overflow-hidden pt-120 pb-120">
      <div className="container singletab">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-text text-center">
              <h4 className="sub-title">
                Crafting Unforgettable <span>Gaming Experiences</span>
              </h4>
              <span className="fs-two heading mb-6">
                Our Games are <span>Vibrant</span> Worlds With{" "}
                <span>Charming</span> Characters
              </span>
              <p>
                Our projects feature unique mechanics, fine-tuned game play, and
                eye-catching visual style.Over 100 million people play our games
                every month
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <ul className="nav tablinks flex-wrap d-center mb-6 mb-sm-10 d-inline-flex gap-4 p-3 tab-area">
              {gameTabHome1.map((item) => (
                <li key={item.id} className="nav-item">
                  <button
                    onClick={() => setActive(item.id)}
                    onMouseMove={handleMouseMove}
                    style={style}
                    className={`nav-link d-center box-style btn-box p-0 ${
                      active == item.id && "active"
                    }`}>
                    <span className="icon-area">{item.icon}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="tabcontents">
              {gameTabHome1.map(({ icon, id, items }) => (
                <div key={id} className={`tabitem ${active == id && "active"}`}>
                  <div className="cus-mar">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="single-box position-relative p-3 p-md-4">
                        <span className="feature-tag d-flex d-md-none d-xl-flex d-center position-absolute">
                          Feature
                        </span>
                        <div className="row align-items-center">
                          <div className="col-md-5">
                            <div className="position-relative d-center">
                              <Image
                                src={item.img}
                                className="w-100"
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
                          </div>
                          <div className="col-md-7 mt-6 mt-md-0">
                            <Link href="game-details">
                              <h3 className="visible-slowly-bottom mb-4">
                                {item.title}
                              </h3>
                            </Link>
                            <ul className="d-flex flex-wrap mb-6 fs-seven align-items-center gap-5 gap-md-10">
                              <li>Horror Adventure</li>
                              <li>Mobile</li>
                              <li>Action RPG</li>
                              <li>PC</li>
                            </ul>
                            <p>
                              Mauris euismod nibh mollis sodales eleifend. Donec
                              tempor erat risus, nec congue magna accumsan
                              commodo pretium..{" "}
                              <Link href="game-details">Read More</Link>
                            </p>
                            <div className="review-box mt-5 mt-md-8 mb-6 mb-md-10 w-100 p-2 p-sm-4 d-center gap-3 justify-content-between">
                              <div className="single-area">
                                <Image src={reviewImg} alt="image" />
                              </div>
                              <div className="single-area">
                                <div className="d-flex gap-1 align-items-center mb-1">
                                  <i className="material-symbols-outlined mat-icon">
                                    star
                                  </i>
                                  <h4 className="fs-four">{item.rating}</h4>
                                </div>
                                <p className="fs-seven">5.2M Reviews</p>
                              </div>
                              <div className="single-area">
                                <h4 className="fs-four mb-1">
                                  {item.downloads}M+
                                </h4>
                                <p className="fs-seven">Downloads</p>
                              </div>
                            </div>
                            <div className="app-download d-flex gap-4 align-items-center">
                              <Link
                                href="https://www.apple.com/app-store/"
                                className="w-100">
                                <Image
                                  src={appStore}
                                  className="w-100"
                                  alt="Image"
                                />
                              </Link>
                              <Link
                                href="https://play.google.com/"
                                className="w-100">
                                <Image
                                  src={googlePlay}
                                  className="w-100"
                                  alt="Image"
                                />
                              </Link>
                              <Link
                                href="https://www.amazon.com/"
                                className="w-100">
                                <Image
                                  src={amazonStore}
                                  className="w-100"
                                  alt="Image"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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

export default OurGames;
