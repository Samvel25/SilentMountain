import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="call-to-action overflow-hidden">
      <div className="container px-5 px-sm-15 about pt-120 pb-120">
        <div className="row px-5 px-sm-15 justify-content-between align-items-center">
          <div className="col-lg-6 alt-bg">
            <div className="section-text">
              <h4 className="sub-title">Contact With Us</h4>
              <span className="fs-two heading mb-6">
                Contact us today for a free consultation
              </span>
            </div>
            <div className="btn-area">
              <div className="btn-area mt-5 mt-sm-10 d-flex flex-wrap gap-6 align-items-center">
                <Link href="/contact" className="box-style btn-box d-center">
                  Start Your Projects
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 offset-0 offset-lg-1">
            <div className="mt-8 mt-lg-0 mb-0 mb-lg-15 mb-lg-0 text-start d-center position-relative">
              <div className="contact-box cus-z1 w-100 py-15 text-center">
                <Link href="/" className="gap-2 d-center mb-2">
                  <i className="material-symbols-outlined mat-icon">
                    smartphone
                  </i>
                  Call Us
                </Link>
                <span className="fs-five">(302) 555-0107</span>
              </div>
              <div className="video-bg cus-z0 position-absolute">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
