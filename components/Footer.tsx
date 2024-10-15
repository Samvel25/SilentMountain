import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import PrimaryBtn from "./PrimaryBtn";

const Footer = () => {
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
  const socialData = [
    {
      id: 1,
      name: "Facebook",
      link: "https://www.facebook.com",
      icon: <i className="fab fa-facebook-f"></i>,
    },
    {
      id: 2,
      name: "Instagram",
      link: "https://www.instagram.com",
      icon: <i className="fab fa-instagram"></i>,
    },
    {
      id: 3,
      name: "Linkedin",
      link: "https://www.linkedin.com",
      icon: <i className="fab fa-linkedin-in"></i>,
    },
    {
      id: 4,
      name: "Twitter",
      link: "https://www.twitter.com",
      icon: <i className="fab fa-twitter"></i>,
    },
  ];
  return (
    <footer className="footer-section">
      <div className="container-fluid">
        <div className="social-items">
          <ul className="d-flex justify-content-around">
            {socialData.map(({ id, name, icon, link }) => (
              <li
                key={id}
                className="box-style box-second justify-content-center"
                onMouseMove={handleMouseMove}
                style={style}>
                <Link href={link} className="d-center gap-2">
                  {icon}
                  <span>{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="row align-items-center justify-content-center overflow-hidden">
          <div className="col-lg-6 position-relative">
            <div className="box-items d-inline-flex flex-wrap position-absolute">
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item active-item opacity-25"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item active-item opacity-25"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item active-item opacity-25"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
            </div>
            <div className="row pt-120 pb-120 px-5 ps-md-15 ps-lg-0 align-items-center justify-content-start justify-content-lg-end">
              <div className="col-xl-8 col-lg-10 col-md-8">
                <div className="content-area visible-from-bottom">
                  <div className="section-area">
                    <Link href="/" className="fs-four brand-area">
                      Gamestorm
                    </Link>
                    <p className="mt-4 w-75">
                      Gamestorm is a premier gaming studio creating innovative
                      and engaging games for players of all ages. Offering a
                      wide variety of gaming experiences.
                    </p>
                  </div>
                  <div className="location-area mt-8 d-grid gap-7">
                    <div className="d-flex gap-3 align-items-center">
                      <div className="icon-box d-center">
                        <i className="material-symbols-outlined mat-icon fs-fure">
                          {" "}
                          location_on
                        </i>
                      </div>
                      <div className="right-item">
                        <h5>London</h5>
                        <span>Al. Brucknera Aleksandra 63, Wrocław 51-410</span>
                      </div>
                    </div>
                    <div className="d-flex gap-3 align-items-center">
                      <div className="icon-box d-center">
                        <i className="material-symbols-outlined mat-icon fs-fure">
                          {" "}
                          location_on
                        </i>
                      </div>
                      <div className="right-item">
                        <h5>New York</h5>
                        <span>
                          7012 Green Lake Ave., Poughkeepsie, NY 12601
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content-right visible-from-bottom pt-120 pb-120 px-5 ps-md-15 ps-lg-10 px-xxl-20">
              <div className="row">
                <div className="col-xl-8 col-lg-10 col-md-7">
                  <div className="main-content">
                    <div className="head-area">
                      <h4 className="mb-3">
                        Stay updated with news on all our games
                      </h4>
                      <p>
                        Want to be the first to know about new releases?
                        Subscribe out newsletter!
                      </p>
                    </div>
                    <form action="#">
                      <div className="input-area mt-6 p-4 d-grid d-sm-flex align-items-center justify-content-between">
                        <input type="text" placeholder="Enter Your Email" />

                        <PrimaryBtn
                          text="Send Message"
                          classes="mt-6 mt-sm-0 btn-area text-nowrap"
                        />
                      </div>
                    </form>
                    <div className="instagram-post mt-10">
                      <h5 className="mb-5">Instagram post</h5>
                      <ul className="d-flex gap-2">
                        <li>
                          <Link href="/">
                            <Image
                              width={60}
                              height={60}
                              src="/images/instagram-img-1.png"
                              alt="img"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <Image
                              width={60}
                              height={60}
                              src="/images/instagram-img-2.png"
                              alt="img"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <Image
                              width={60}
                              height={60}
                              src="/images/instagram-img-3.png"
                              alt="img"
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom py-8">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                <div className="copyright">
                  <p>
                    Copyright © {new Date().getFullYear()}{" "}
                    <Link href="/">Gamestorm</Link> - All Right Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
