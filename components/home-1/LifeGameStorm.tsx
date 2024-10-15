import Link from "next/link";
import lifePostImg1 from "@/public/images/life-post-img-1.png";
import lifePostImg2 from "@/public/images/life-post-img-2.png";
import lifePostImg3 from "@/public/images/life-post-img-3.png";
import lifePostImg4 from "@/public/images/life-post-img-4.png";
import lifePostImg5 from "@/public/images/life-post-img-5.png";
import Image from "next/image";
import PrimaryBtn from "../PrimaryBtn";

const LifeGameStorm = () => {
  return (
    <section className="life-gamestorm pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-text text-center">
              <h4 className="sub-title">
                We&apos;re Part of a <span>Big Family</span>
              </h4>
              <span className="fs-two heading mb-6">
                The Art of Gaming Development: A Look{" "}
                <span>Inside Our Studio</span>
              </span>
              <p>
                Experience the magic of gaming development with a look inside
                our studio. See the art, science, and innovation at work.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="post-img d-grid gap-3 gap-md-6 justify-content-between">
              <div className="single d-flex gap-3 gap-md-6">
                <div className="items">
                  <Image src={lifePostImg1} alt="image" />
                </div>
                <div className="items">
                  <Image src={lifePostImg2} alt="image" />
                </div>
              </div>
              <div className="single d-flex gap-3 gap-md-6">
                <div className="items">
                  <Image src={lifePostImg3} alt="image" />
                </div>
                <div className="items">
                  <Image src={lifePostImg4} alt="image" />
                </div>
                <div className="items">
                  <Image src={lifePostImg5} alt="image" />
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-10 mt-md-20">
              <div className="col-lg-5">
                <div className="join-us text-center">
                  <span className="display-four visible-slowly-bottom mb-4">
                    JOIN US!
                  </span>
                  <p>
                    Still haven&apos;t found your dream job? Join Team Gamestorm
                    and become the next Gamestorm of an ever-growing family!
                  </p>

                  <PrimaryBtn
                    text="Check Open Positions"
                    classes="mt-5 mt-md-10"
                    href="about-us"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeGameStorm;
