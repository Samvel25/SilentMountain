import Link from "next/link";
import React from "react";
import PrimaryBtn from "../PrimaryBtn";

const Contact = () => {
  return (
    <section className="contact-us bg-transparen pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-header text-center">
              <h4 className="sub-title">
                Have <span>Questions?</span>
              </h4>
              <span className="fs-two heading mb-6">
                Can’t find what are <span>you Looking for</span> ? Get in Touch
              </span>
              <p>
                Please fill out the form and let us know about your concerns.We
                will try our best to provide optimized solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <form action="#" className="p-4 p-sm-8">
              <h3>Write A Message</h3>
              <div className="form-inside mt-6 p-4">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="single-input text-start">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter Your Name"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="single-input text-start">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        id="email"
                        placeholder="Enter your email"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="single-input text-start">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        placeholder="Enter Subject"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="single-input text-start">
                      <label htmlFor="message">Leave us a message</label>
                      <textarea
                        cols={4}
                        rows={4}
                        id="message"
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
          <div className="col-lg-5 mt-7 mt-lg-0">
            <div className="py-8 py-sm-15 px-3 px-sm-6 get-in-touch">
              <h3>Get in Touch</h3>
              <div className="single-content d-grid mt-5 mt-sm-10">
                <div className="single-content d-grid py-5 py-sm-7 gap-3 gap-sm-5">
                  <div className="check d-center justify-content-start gap-3">
                    <i className="material-symbols-outlined fs-three"> call </i>
                    <h4>Have any Questions</h4>
                  </div>
                  <p className="d-flex gap-5">
                    <span>(302) 555-0107</span>
                    <span>(704) 555-0127</span>
                  </p>
                </div>
                <div className="single-content d-grid py-5 py-sm-8 gap-2">
                  <div className="check d-center justify-content-start gap-3">
                    <i className="material-symbols-outlined fs-three">
                      {" "}
                      location_on{" "}
                    </i>
                    <h4>Contact Address</h4>
                  </div>
                  <p className="d-flex">
                    <span>(302) 555-0107</span>
                  </p>
                </div>
                <div className="single-content d-grid py-5 py-sm-8 gap-2">
                  <div className="check d-center justify-content-start gap-3">
                    <i className="material-symbols-outlined fs-three">
                      {" "}
                      schedule{" "}
                    </i>
                    <h4>Opening Hours</h4>
                  </div>
                  <p className="d-flex">
                    <span>(302) 555-0107</span>
                  </p>
                </div>
              </div>
              <ul className="d-flex justify-content-center gap-4 social-area py-4 py-sm-8 mt-5 mt-sm-10">
                <li>
                  <Link
                    href="https://www.facebook.com"
                    aria-label="Facebook"
                    className="d-center">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com"
                    aria-label="Instagram"
                    className="d-center">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com"
                    aria-label="Linkedin"
                    className="d-center">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com"
                    aria-label="Twitter"
                    className="d-center">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
