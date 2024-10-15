"use client";
import Link from "next/link";
import aboutBlockBg from "@/public/images/about-block-bg.png";
import Image from "next/image";
import CounterElement from "../Counter";
import PrimaryBtn from "../PrimaryBtn";

const About = () => {
  return (
    <section className="about-block pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xxl-6 col-lg-6 order-1 order-lg-0">
            <div className="sec-img mw-100 position-relative d-center">
              <Image src={aboutBlockBg} alt="sec-img" />
              <div className="experience p-2 p-lg-4 position-absolute ">
                <div className="experience-wrap p-3 px-lg-5 py-lg-8 d-inline-flex d-center gap-3">
                  <div className="counters d-center">
                    <CounterElement end={20} className="display-four" />
                    <span className="display-four visible-slowly-bottom symbol">
                      +
                    </span>
                  </div>
                  <span className="w-25 d-inline-bloc">
                    Years Of Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-lg-6">
            <div className="section-text">
              <h4 className="sub-title">
                Welcome to <span>Gamestorm</span> Game Studios
              </h4>
              <span className="fs-two heading mb-6">
                Bringing people together through <span>the power of play</span>
              </span>
              <p>
                As Game Gamestorm, we continue to open doors to new worlds every
                day and we are working excitedly for creating new games and
                unique ideas!
              </p>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="counter-item mb-8 pb-4">
                  <div className="counters mb-3 d-flex align-items-center">
                    <CounterElement
                      end={500}
                      className="odometer fs-three heading"
                    />

                    <span className="fs-three heading">M</span>
                    <span className="fs-three heading symbol">+</span>
                  </div>
                  <span className="name-area fs-seven">
                    Downloads, or 6% of the world’s population.
                  </span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="counter-item mb-8 pb-4">
                  <div className="counters mb-3 d-flex align-items-center">
                    <CounterElement
                      end={2}
                      className="odometer fs-three heading"
                    />

                    <span className="fs-three heading">M</span>
                    <span className="fs-three heading symbol">+</span>
                  </div>
                  <span className="name-area fs-seven">
                    Our games have over 20 million unique daily users.
                  </span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="counter-item mb-8 pb-4">
                  <div className="counters mb-3 d-flex align-items-center">
                    <CounterElement
                      end={52}
                      className="odometer fs-three heading"
                    />

                    <span className="fs-three heading symbol">+</span>
                  </div>
                  <span className="name-area fs-seven">
                    Experts collaborating to blow your mind in one place.
                  </span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="counter-item mb-8 pb-4">
                  <div className="counters mb-3 d-flex align-items-center">
                    <CounterElement
                      end={4}
                      className="odometer fs-three heading"
                    />
                    <span className="fs-three heading">k</span>
                    <span className="fs-three heading symbol">+</span>
                  </div>
                  <span className="name-area fs-seven">
                    The Gamestorm Studio is launching with 4K+ Games.
                  </span>
                </div>
              </div>
            </div>
            <PrimaryBtn text="Explore Our Games" classes="mt-2" href="game" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
