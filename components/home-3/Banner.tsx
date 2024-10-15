import ellipse9 from "@/public/images/abs-items/ellipse-9.png";
import ellipse10 from "@/public/images/abs-items/ellipse-10.png";
import index3 from "@/public/images/index-3-obj.png";
import Image from "next/image";
import Link from "next/link";
import PrimaryBtn from "../PrimaryBtn";
const Banner = () => {
  return (
    <section className="banner-section index-two index-three overflow-hidden">
      <div className="shape-areas d-none d-lg-block">
        <Image src={ellipse9} className="shape-1" alt="icon" />
        <Image src={ellipse10} className="shape-2" alt="icon" />
      </div>
      <div className="overlay overflow-hidden">
        <div className="banner-content position-relative cus-z1">
          <div className="container">
            <div className="row justify-content-between justify-content-center align-items-center">
              <div className="col-xl-6 col-lg-7">
                <div className="main-content">
                  <div className="section-text">
                    <h3 className="visible-slowly-bottom sub-title">
                      <span>Crafting Exceptional Games</span>
                    </h3>
                    <span className="display-one">
                      Play, Improve & <span>Win</span>
                    </span>
                    <p className="fs-four">
                      Gamestorm is the ultimate destination for playing,
                      discussing and creating game.
                    </p>
                  </div>
                  <div className="playing-now d-flex flex-wrap gap-6 gap-sm-10">
                    <div className="active-now online">
                      <span>Online</span>
                      <h2>19,302,927</h2>
                    </div>
                    <div className="active-now now">
                      <span>Playing Now</span>
                      <h2>4,831,224</h2>
                    </div>
                  </div>
                  <PrimaryBtn
                    text="Explore Our Games"
                    href="game"
                    classes="mt-10"
                  />
                </div>
              </div>
              <div className="col-xl-5">
                <div className="sec-image">
                  <Image
                    src={index3}
                    className="position-absolute bottom-0 end-0"
                    alt="icon"
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

export default Banner;
