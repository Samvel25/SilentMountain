import Link from "next/link";
import React from "react";
import PrimaryBtn from "../PrimaryBtn";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row justify-content-between align-items-center pt-120 pb-120">
          <div className="col-xl-5 col-lg-6 get-start">
            <span className="mb-2 display-four">Let’s Get started</span>
            <p>
              For further info & support, <Link href="contact">Contact us</Link>
            </p>
          </div>
          <div className="col-xl-5 col-lg-6 col-md-8">
            <form
              action="#"
              className="form-contact mt-8 mt-lg-0 py-8 py-sm-15 px-4 px-sm-8">
              <div className="input-area p-4 d-grid d-sm-flex align-items-center justify-content-between">
                <input type="text" placeholder="Enter Your Email" />
                <PrimaryBtn text="Subscribe" classes="mt-6 mt-sm-0" />
              </div>
            </form>
          </div>
        </div>
        <div className="row cus-mar pb-120">
          <div className="col-xl-3 col-md-5 col-sm-8 visible-from-bottom">
            <div className="single-box">
              <h4 className="mb-4">Office</h4>
              <div className="contact-location d-grid gap-6">
                <div className="single-area d-flex gap-6">
                  <div className="icon-area d-center">
                    <i className="material-symbols-outlined"> location_on </i>
                  </div>
                  <div className="text-area">
                    <h5 className="mb-2">London</h5>
                    <span>Al. Brucknera Aleksandra 63, Wrocław 51-410</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-5 col-sm-8 visible-from-bottom">
            <div className="single-box">
              <h4 className="mb-4">Email address</h4>
              <div className="contact-location d-grid gap-6">
                <div className="single-area d-flex gap-6">
                  <div className="icon-area d-center">
                    <i className="material-symbols-outlined"> mail </i>
                  </div>
                  <div className="text-area">
                    <span>Example@gmail.com</span>
                    <span>Example@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-5 col-sm-8 visible-from-bottom">
            <div className="single-box">
              <h4 className="mb-4">Phone Number</h4>
              <div className="contact-location d-grid gap-6">
                <div className="single-area d-flex gap-6">
                  <div className="icon-area d-center">
                    <i className="material-symbols-outlined"> call </i>
                  </div>
                  <div className="text-area">
                    <span>(302) 555-0107</span>
                    <span>(704) 555-0127</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-5 col-sm-8 visible-from-bottom">
            <div className="single-box">
              <h4 className="mb-4">Working Hours</h4>
              <div className="contact-location d-grid gap-6">
                <div className="single-area d-flex gap-6">
                  <div className="icon-area d-center">
                    <i className="material-symbols-outlined"> schedule </i>
                  </div>
                  <div className="text-area">
                    <span>Mon-Fri: 09: 00-18: 00 Sat-Sun: Weekend</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom p-5">
          <div className="container">
            <div className="row gap-3 gap-md-0 justify-content-between">
              <div className="col-md-8 order-1 order-md-0">
                <div className="copyright">
                  <p className="text-center text-md-start">
                    Copyright © {new Date().getFullYear()}{" "}
                    <Link href="/">Gamestorm</Link>- All Right Reserved
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="copyright d-flex gap-3 align-items-center justify-content-center justify-content-md-end">
                  <Link href="privacy-policy">Privacy</Link>
                  <Link href="terms-conditions">Terms & Services</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
