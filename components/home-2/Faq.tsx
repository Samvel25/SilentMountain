import faqFrame from "@/public/images/abs-items/faq-frame.png";
import faqIcon from "@/public/images/faq-icon.png";
import Image from "next/image";
import Link from "next/link";
import PrimaryBtn from "../PrimaryBtn";
const Faq = () => {
  return (
    <section className="faqs-section position-relative">
      <div className="shape-area">
        <Image src={faqFrame} className="shape-1" alt="icon" />
        <Image src={faqFrame} className="shape-2" alt="icon" />
      </div>
      <div className="overlay pt-120 pb-120">
        <div className="container position-relative cus-z1">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-7">
              <div className="section-header text-center">
                <h4 className="sub-title">
                  Answers to Common Questions about <span>Our Company</span>
                </h4>
                <span className="fs-two heading mb-6">
                  Frequently Asked Questions About{" "}
                  <span>Our Gaming Studio</span>
                </span>
                <p>
                  Our gaming company develops games for multiple platforms and
                  is always looking for talented individuals to join our team.
                  Quality and player satisfaction is our top priority.
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-between">
            <div className="col-xl-7 col-lg-7">
              <div className="accordion" id="accordionFaqs">
                <div className="accordion-item">
                  <h5 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne">
                      What services does GameStorm offer for game development?
                    </button>
                  </h5>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionFaqs">
                    <div className="accordion-body">
                      <p>
                        GameStorm offers a full range of services for game
                        development, including game art, design, programming,
                        and project management.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo">
                      How does GameStorm handle project management during game
                      development?
                    </button>
                  </h5>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionFaqs">
                    <div className="accordion-body">
                      <p>
                        GameStorm offers a full range of services for game
                        development, including game art, design, programming,
                        and project management.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree">
                      How does GameStorm ensure the game art matches the overall
                      vision and design of the game?
                    </button>
                  </h5>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionFaqs">
                    <div className="accordion-body">
                      <p>
                        GameStorm offers a full range of services for game
                        development, including game art, design, programming,
                        and project management.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour">
                      What is GameStorm&apos;s approach to testing and quality
                      assurance during game development?
                    </button>
                  </h5>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionFaqs">
                    <div className="accordion-body">
                      <p>
                        GameStorm offers a full range of services for game
                        development, including game art, design, programming,
                        and project management.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive">
                      How does GameStorm handle player feedback and make changes
                      to the game during development?
                    </button>
                  </h5>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionFaqs">
                    <div className="accordion-body">
                      <p>
                        GameStorm offers a full range of services for game
                        development, including game art, design, programming,
                        and project management.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header" id="headingsix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsesix"
                      aria-expanded="false"
                      aria-controls="collapsesix">
                      How does GameStorm ensure the games it develops are
                      optimized for performance and stability?
                    </button>
                  </h5>
                  <div
                    id="collapsesix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingsix"
                    data-bs-parent="#accordionFaqs">
                    <div className="accordion-body">
                      <p>
                        GameStorm offers a full range of services for game
                        development, including game art, design, programming,
                        and project management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 mt-8 mt-lg-0">
              <div className="faq-bg py-15 px-8 text-center">
                <div className="icon-area">
                  <Image src={faqIcon} alt="Image" />
                </div>
                <h3 className="visible-slowly-bottom py-5">
                  Check More Information
                </h3>
                <p>
                  GameStorm is a full-service gaming studio company specializing
                  in game development, art, design, and project management
                </p>
                <div className="btn-area">
                  <PrimaryBtn
                    text="Learn More"
                    classes="mt-8"
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

export default Faq;
