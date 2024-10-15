import brand1 from "@/public/images/brand-logo-1.png";
import brand2 from "@/public/images/brand-logo-2.png";
import brand3 from "@/public/images/brand-logo-3.png";
import brand4 from "@/public/images/brand-logo-4.png";
import brand5 from "@/public/images/brand-logo-5.png";
import brand6 from "@/public/images/brand-logo-6.png";
import brand7 from "@/public/images/brand-logo-7.png";
import Image from "next/image";

const Partner = () => {
  return (
    <section className="our-partners pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-header text-center">
              <h4 className="sub-title">
                <span>Trusted</span> By
              </h4>
              <span className="fs-two heading mb-6">
                We are happy to work with <span>global largest brands</span>
              </span>
              <p>We are proud to support industry leaders around the world.</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="all-items mb-7 d-flex gap-3 justify-content-between flex-wrap">
              <div className="thumb">
                <Image src={brand1} alt="Image" />
              </div>
              <div className="thumb">
                <Image src={brand2} alt="Image" />
              </div>
              <div className="thumb">
                <Image src={brand3} alt="Image" />
              </div>
              <div className="thumb">
                <Image src={brand4} alt="Image" />
              </div>
            </div>
            <div className="all-items d-flex gap-3 justify-content-between flex-wrap">
              <div className="thumb">
                <Image src={brand5} alt="Image" />
              </div>
              <div className="thumb">
                <Image src={brand6} alt="Image" />
              </div>
              <div className="thumb">
                <Image src={brand7} alt="Image" />
              </div>
              <div className="thumb">
                <Image src={brand3} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
