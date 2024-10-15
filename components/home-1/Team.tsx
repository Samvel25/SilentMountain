"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import Slider, { Settings } from "react-slick";
const Team = () => {
  const settings: Settings = {
    infinite: true,
    autoplay: false,
    centerMode: false,
    autoplaySpeed: 1500,
    centerPadding: "60px",
    focusOnSelect: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          centerPadding: "30px",
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  const slider = useRef<Slider>(null);

  function scroll(e: WheelEvent) {
    if (slider === null) return 0;
    if (slider.current) {
      e.deltaY > 0 ? slider.current.slickNext() : slider.current.slickPrev();
    }
  }
  useEffect(() => {
    let parent = document.getElementById("parent");
    parent!.addEventListener("wheel", scroll);
    return () => {
      parent!.removeEventListener("wheel", scroll);
    };
  }, []);
  return (
    <section className="team-members pt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-header text-center">
              <h4 className="sub-title">
                We Have A Passion For <span>Games!</span>
              </h4>
              <span className="fs-two heading mb-6">
                Our team is next-level. And we&apos;re <span>proud of it.</span>
              </span>
              <p>
                Our dynamic team blends tech-savvy developers, imaginative
                artists, analytical minds, and visionary product managers.
                Driven to innovate, we bring excitement to every project
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="parent">
        <Slider ref={slider} {...settings} className="team-carousel">
          <div className="slide-area">
            <div className="single-slider">
              <div className="thumb">
                <Image
                  width={416}
                  height={550}
                  src="/images/team-members-1.png"
                  alt="Image"
                />
              </div>
              <div className="title-area">
                <h4 className="pt-8 pb-2">
                  <Link href="/">Jane Cooper</Link>
                </h4>
                <span className="designation">Animator</span>
              </div>
            </div>
          </div>
          <div className="slide-area">
            <div className="single-slider">
              <div className="thumb">
                <Image
                  width={416}
                  height={550}
                  src="/images/team-members-2.png"
                  alt="Image"
                />
              </div>
              <div className="title-area">
                <h4 className="pt-8 pb-2">
                  <Link href="/">Esther Howard</Link>
                </h4>
                <span className="designation">Artist</span>
              </div>
            </div>
          </div>
          <div className="slide-area">
            <div className="single-slider">
              <div className="thumb">
                <Image
                  width={416}
                  height={550}
                  src="/images/team-members-3.png"
                  alt="Image"
                />
              </div>
              <div className="title-area">
                <h4 className="pt-8 pb-2">
                  <Link href="/">Dianne Russell</Link>
                </h4>
                <span className="designation">Animator</span>
              </div>
            </div>
          </div>
          <div className="slide-area">
            <div className="single-slider">
              <div className="thumb">
                <Image
                  width={416}
                  height={550}
                  src="/images/team-members-4.png"
                  alt="Image"
                />
              </div>
              <div className="title-area">
                <h4 className="pt-8 pb-2">
                  <Link href="/">Marvin McKinney</Link>
                </h4>
                <span className="designation">Brand & Culture Manager</span>
              </div>
            </div>
          </div>
          <div className="slide-area">
            <div className="single-slider">
              <div className="thumb">
                <Image
                  width={416}
                  height={550}
                  src="/images/team-members-5.png"
                  alt="Image"
                />
              </div>
              <div className="title-area">
                <h4 className="pt-8 pb-2">
                  <Link href="/">Kristin Watson</Link>
                </h4>
                <span className="designation">Developer</span>
              </div>
            </div>
          </div>
          <div className="slide-area">
            <div className="single-slider">
              <div className="thumb">
                <Image
                  width={416}
                  height={550}
                  src="/images/team-members-6.png"
                  alt="Image"
                />
              </div>
              <div className="title-area">
                <h4 className="pt-8 pb-2">
                  <Link href="/">Bessie Cooper</Link>
                </h4>
                <span className="designation">Artist</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Team;
