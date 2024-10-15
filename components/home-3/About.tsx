import aboutBlock3 from "@/public/images/about-block-bg-3.png";
import Image from "next/image";
import CounterElement from "../Counter";

const About = () => {
  return (
    <section className="about-block position-relative index-three pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xxl-6 col-lg-6 order-1 order-lg-0">
            <div className="sec-img mw-100 position-relative d-center">
              <Image src={aboutBlock3} alt="sec-img" />
              <div className="experience p-2 p-lg-4 position-absolute bottom-0 end-0">
                <div className="experience-wrap p-3 px-lg-5 py-lg-8 d-grid d-center gap-1">
                  <div className="counters d-center">
                    <CounterElement className="display-four" end={20} />
                    <span className="display-four visible-slowly-bottom symbol">
                      +
                    </span>
                  </div>
                  <span className="w-50 text-center m-auto d-inline-bloc">
                    Years Of Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-lg-6">
            <div className="section-text">
              <h4 className="sub-title">
                The Next Level of <span>Gaming Studio</span>
              </h4>
              <span className="fs-two heading mb-6">
                An Award Winning Game <span>Development Studio</span>
              </span>
              <p className="mb-4 fs-five">
                Gamestorm Studios provides full-service game creation in
                Unity3D, Unreal, PlayCanvas, blockchain, game design, VR, NFT,
                metaverse, and more.
              </p>
              <p>
                We were born a startup and, despite having grown, our mindset
                remains just as ambitious. We’re bold and we dream big; that’s
                how we make great things happen.
              </p>
            </div>
            <div className="content-item d-grid gap-6">
              <div className="content-box d-flex gap-4 gap-md-5">
                <div className="icon-box d-center">
                  <i className="material-symbols-outlined fs-three">
                    {" "}
                    language{" "}
                  </i>
                </div>
                <div className="info-box">
                  <h5 className="mb-3">Play with others worldwide</h5>
                  <p>
                    Gamestorm Gaming Studios creates games worldwide.
                    You&apos;ll always play with new individuals from across the
                    world.
                  </p>
                </div>
              </div>
              <div className="content-box d-flex gap-4 gap-md-5">
                <div className="icon-box d-center">
                  <i className="material-symbols-outlined fs-three"> swords </i>
                </div>
                <div className="info-box">
                  <h5 className="mb-3">Action packed to the limit</h5>
                  <p>
                    Gamestorm Gaming Studios wants to make games that raise your
                    pulse rate regardless of your taste!
                  </p>
                </div>
              </div>
              <div className="content-box d-flex gap-4 gap-md-5">
                <div className="icon-box d-center">
                  <i className="material-symbols-outlined fs-three">
                    {" "}
                    hardware{" "}
                  </i>
                </div>
                <div className="info-box">
                  <h5 className="mb-3">Games crafted with dedication</h5>
                  <p>
                    Gamestorm values the efforts of independent game studios.
                    Developers with personal ambitions create the games.
                    Gamestorm Gaming Studios exists primarily to improve these
                    games.
                  </p>
                </div>
              </div>
              <div className="content-box d-flex gap-4 gap-md-5">
                <div className="icon-box d-center">
                  <i className="material-symbols-outlined fs-three">
                    {" "}
                    sports_esports{" "}
                  </i>
                </div>
                <div className="info-box">
                  <h5 className="mb-3">Make your mark</h5>
                  <p>
                    Are you a dedicated Game Developer and want to take your
                    game to the next level? Feel free to contact us!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
