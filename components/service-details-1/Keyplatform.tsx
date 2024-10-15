import faqIllus from "@/public/images/faq-illus.png";
import Image from "next/image";
const Keyplatform = () => {
  return (
    <section className="faqs-section key-platforms">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 order-1 order-lg-0">
              <div className="sec-img">
                <Image src={faqIllus} alt="Image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-header">
                <span className="fs-two heading mb-6">
                  We develop games for these key platforms
                </span>
                <p>
                  Embracing game development on most popular platforms and
                  reaching the attention of players with a wide variety of
                  preferences is one of our main features.
                </p>
              </div>
              <div className="accordion" id="accordionKeys">
                <div className="accordion-item">
                  <h5 className="accordion-header" id="headingKeyOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseKeyOne"
                      aria-expanded="false"
                      aria-controls="collapseKeyOne">
                      PC
                    </button>
                  </h5>
                  <div
                    id="collapseKeyOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingKeyOne"
                    data-bs-parent="#accordionKeys">
                    <div className="accordion-body">
                      <p>
                        Game development on all major console platforms: Xbox,
                        Nintendo, PS4.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header" id="headingKeyTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseKeyTwo"
                      aria-expanded="false"
                      aria-controls="collapseKeyTwo">
                      Console
                    </button>
                  </h5>
                  <div
                    id="collapseKeyTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingKeyTwo"
                    data-bs-parent="#accordionKeys">
                    <div className="accordion-body">
                      <p>
                        Game development on all major console platforms: Xbox,
                        Nintendo, PS4.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header" id="headingKeyThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseKeyThree"
                      aria-expanded="false"
                      aria-controls="collapseKeyThree">
                      Mobile
                    </button>
                  </h5>
                  <div
                    id="collapseKeyThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingKeyThree"
                    data-bs-parent="#accordionKeys">
                    <div className="accordion-body">
                      <p>
                        Game development on all major console platforms: Xbox,
                        Nintendo, PS4.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header" id="headingKeyFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseKeyFour"
                      aria-expanded="false"
                      aria-controls="collapseKeyFour">
                      AR/VR
                    </button>
                  </h5>
                  <div
                    id="collapseKeyFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingKeyFour"
                    data-bs-parent="#accordionKeys">
                    <div className="accordion-body">
                      <p>
                        Game development on all major console platforms: Xbox,
                        Nintendo, PS4.
                      </p>
                    </div>
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

export default Keyplatform;
