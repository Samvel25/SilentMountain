import life1 from "@/public/images/life-post-img-1.png";
import life2 from "@/public/images/life-post-img-2.png";
import life3 from "@/public/images/life-post-img-3.png";
import life4 from "@/public/images/life-post-img-4.png";
import life5 from "@/public/images/life-post-img-5.png";
import Image from "next/image";
import Link from "next/link";
const JoinUs = () => {
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
                  <Image src={life1} alt="image" />
                </div>
                <div className="items">
                  <Image src={life2} alt="image" />
                </div>
              </div>
              <div className="single d-flex gap-3 gap-md-6">
                <div className="items">
                  <Image src={life3} alt="image" />
                </div>
                <div className="items">
                  <Image src={life4} alt="image" />
                </div>
                <div className="items">
                  <Image src={life5} alt="image" />
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-10 mt-md-20">
              <div className="col-lg-5">
                <div className="join-us text-center">
                  <h3 className="visible-slowly-bottom mb-4">
                    Would you like to join our adventure?
                  </h3>
                  <p>
                    Still haven&apos;t found your dream job? Join Team Gamestorm
                    and become the next Gamestorm of an ever-growing family!
                  </p>
                  <div className="btn-area alt-bg mt-5 mt-md-10">
                    <Link
                      href="/about-us"
                      className="box-style btn-box d-center">
                      Check Open Positions
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
