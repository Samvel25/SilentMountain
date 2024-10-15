import gallery1 from "@/public/images/gallery-img-1.png";
import gallery2 from "@/public/images/gallery-img-2.png";
import gallery3 from "@/public/images/gallery-img-3.png";
import gallery4 from "@/public/images/gallery-img-4.png";
import gallery5 from "@/public/images/gallery-img-5.png";
import gallery6 from "@/public/images/gallery-img-6.png";
import gallery7 from "@/public/images/gallery-img-7.png";
import gallery8 from "@/public/images/gallery-img-8.png";
import gallery9 from "@/public/images/gallery-img-9.png";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="gallery-studio pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-header text-center">
              <h4 className="sub-title">
                Day in the Life of <span>Our Gaming Studio</span>
              </h4>
              <span className="fs-two heading mb-6">
                The Heartbeat of Gaming Development: A{" "}
                <span>Gallery of Our Studio</span>
              </span>
              <p>
                Join us for a behind-the-scenes look at our gaming studio.
                Discover the creativity, technology, and innovation that goes
                into each project.
              </p>
            </div>
          </div>
        </div>
        <div className="row cus-mar">
          <div className="col-lg-4 col-sm-6">
            <div className="single-box d-grid gap-3 gap-md-6">
              <div className="items">
                <Image src={gallery1} alt="image" />
              </div>
              <div className="inside-items d-flex gap-3 gap-md-6">
                <div className="items">
                  <Image src={gallery2} alt="image" />
                </div>
                <div className="items">
                  <Image src={gallery3} alt="image" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="single-box d-grid gap-3 gap-md-6">
              <div className="inside-items d-flex gap-3 gap-md-6">
                <div className="items">
                  <Image src={gallery4} alt="image" />
                </div>
                <div className="items">
                  <Image src={gallery5} alt="image" />
                </div>
              </div>
              <div className="items">
                <Image src={gallery6} alt="image" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="single-box d-grid gap-3 gap-md-6">
              <div className="items">
                <Image src={gallery7} alt="image" />
              </div>
              <div className="inside-items d-flex gap-3 gap-md-6">
                <div className="items">
                  <Image src={gallery8} alt="image" />
                </div>
                <div className="items">
                  <Image src={gallery9} alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
