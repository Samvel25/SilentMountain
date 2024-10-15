import ellipse7 from "@/public/images/abs-items/ellipse-7.png";
import ellipse8 from "@/public/images/abs-items/ellipse-8.png";
import aboutBlock from "@/public/images/about-block-bg-2.png";
import Image from "next/image";
import CounterElement from "../Counter";
import Link from "next/link";
import PrimaryBtn from "../PrimaryBtn";

const About = () => {
  return (
    <section className="about-block position-relative index-two pt-120 pb-120">
      <div className="shape-area">
        <Image src={ellipse7} className="shape-1" alt="icon" />
        <Image src={ellipse8} className="shape-2" alt="icon" />
      </div>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xxl-6 col-lg-6 order-1 order-lg-0">
            <div className="sec-img mw-100 position-relative d-center">
              <Image src={aboutBlock} alt="sec-img" />
              <div className="experience second p-2 p-lg-4 position-absolute top-0 start-0">
                <div className="experience-wrap p-3 px-lg-5 py-lg-8 d-grid d-center gap-1">
                  <div className="counters d-center">
                    <h2>
                      <CounterElement
                        end={4}
                        className="display-4 fw-bold odometer"
                      />
                    </h2>
                    <span className="display-four visible-slowly-bottom symbol">
                      K
                    </span>
                  </div>
                  <span className="w-50 text-center m-auto d-inline-bloc">
                    Game launched
                  </span>
                </div>
              </div>
              <div className="experience p-2 p-lg-4 position-absolute bottom-0 end-0">
                <div className="experience-wrap p-3 px-lg-5 py-lg-8 d-grid d-center gap-1">
                  <div className="counters d-center">
                    <h2>
                      <CounterElement end={9} className="display-4 fw-bold" />
                    </h2>
                    <span className="display-four visible-slowly-bottom symbol">
                      B+
                    </span>
                  </div>
                  <span className="w-50 text-center m-auto d-inline-bloc">
                    Game Downloads
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-lg-6">
            <div className="section-text">
              <h4 className="sub-title">
                The Ultimate <span>Gaming Destination</span>
              </h4>
              <span className="fs-two heading mb-6">
                Experience the magic of <span>Gamestorm</span> Game Studios
              </span>
              <p>
                As Gamestorm, we continue to open doors to new worlds every day
                and we are working excitedly for creating new games and unique
                ideas!
              </p>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="counter-item mb-8 pb-4">
                  <h4 className="mb-3">Passion</h4>
                  <span className="name-area fs-seven">
                    We believe that working passionately to create great games
                    improves our perspective!
                  </span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="counter-item mb-8 pb-4">
                  <h4 className="mb-3">Innovation</h4>
                  <span className="name-area fs-seven">
                    We believe creativity and innovation have a great impact on
                    discovering new worlds!
                  </span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="counter-item mb-8 pb-4">
                  <h4 className="mb-3">Team Spirit</h4>
                  <span className="name-area fs-seven">
                    We are in awe of the incredible strength that comes from
                    having a strong team spirit that encourages each other.
                  </span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="counter-item mb-8 pb-4">
                  <h4 className="mb-3">Transparency</h4>
                  <span className="name-area fs-seven">
                    We share our knowledge, opinions, success and mistakes. We
                    believe in open and honest communication, to enforce trust
                    and teamwork.
                  </span>
                </div>
              </div>
            </div>

            <PrimaryBtn classes="mt-2" text="Join Our Team" href="career" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
