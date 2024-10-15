import React from "react";
import PrimaryBtn from "../PrimaryBtn";

const Contact = () => {
  return (
    <section className="contact-us pb-120">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5">
            <div className="section-text">
              <h4 className="sub-title">
                Have <span>Questions?</span>
              </h4>
              <span className="fs-two heading mb-6">
                We&apos;d Love To <span>Hear From You</span>
              </span>
              <p>
                Please fill out the form and let us know about your concerns.We
                will try our best to provide optimized solutions.
              </p>
            </div>
            <div className="contact-area">
              <div className="btn-area mt-10 d-grid gap-6 align-items-center">
                <div className="d-flex gap-3 align-items-center">
                  <div className="icon-box d-center">
                    <i className="material-symbols-outlined mat-icon fs-five">
                      {" "}
                      call{" "}
                    </i>
                  </div>
                  <span>+(2) 578 - 365 - 379</span>
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <div className="icon-box d-center">
                    <i className="material-symbols-outlined mat-icon fs-five">
                      {" "}
                      mail{" "}
                    </i>
                  </div>
                  <span>Hello@example.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 me-20 mt-7 mt-lg-0">
            <form action="#" className="p-4">
              <div className="form-inside p-4">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="single-input text-start">
                      <label htmlFor="contactName">Name</label>
                      <input
                        type="text"
                        id="contactName"
                        placeholder="Enter Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="single-input text-start">
                      <label htmlFor="contactEmail">Email</label>
                      <input
                        type="email"
                        id="contactEmail"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="single-input text-start">
                      <label htmlFor="contactSubject">Subject</label>
                      <input
                        type="text"
                        id="contactSubject"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="single-input text-start">
                      <label htmlFor="contactMessage">Leave us a message</label>
                      <textarea
                        cols={4}
                        rows={4}
                        id="contactMessage"
                        placeholder="Please type your Message here..."></textarea>
                    </div>
                  </div>
                  <div className="col-sm-12 mt-4">
                    <PrimaryBtn text="Send Message" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
