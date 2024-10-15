import React from "react";
import PasswordInput from "./PasswordInput";

const LoginModal = () => {
  return (
    <div className="log-reg cmn-popup">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="modal fade" id="loginMod">
              <div className="modal-dialog pt-8 pt-sm-0 modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header border-0 p-0 justify-content-between position-absolute">
                    <button
                      type="button"
                      className="btn-close p-0"
                      data-bs-dismiss="modal"
                      aria-label="Close">
                      <i className="material-symbols-outlined fs-two">
                        {" "}
                        close{" "}
                      </i>
                    </button>
                  </div>
                  <div className="tab-content">
                    <ul className="nav flex-nowrap log-reg-btn justify-content-center">
                      <li className="bottom-area" role="presentation">
                        <button
                          className="nav-link py-4 active"
                          id="loginArea-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#loginArea"
                          type="button"
                          role="tab"
                          aria-controls="loginArea"
                          aria-selected="true">
                          Login
                        </button>
                      </li>
                      <li className="bottom-area" role="presentation">
                        <button
                          className="nav-link py-4"
                          id="regArea-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#regArea"
                          type="button"
                          role="tab"
                          aria-controls="regArea"
                          aria-selected="false">
                          Sign Up
                        </button>
                      </li>
                    </ul>
                    <div
                      className="tab-pane fade show active"
                      id="loginArea"
                      role="tabpanel"
                      aria-labelledby="loginArea-tab">
                      <div className="login-content">
                        <div className="modal-body p-0">
                          <form action="#" className="p-4 p-sm-8">
                            <p>
                              Sign up for faster checkout, special offers, and
                              customer support!
                            </p>
                            <div className="form-inside mt-6 p-3 p-sm-6">
                              <div className="row">
                                <div className="col-sm-12">
                                  <div className="single-input text-start">
                                    <label htmlFor="loginemail">Email*</label>
                                    <input
                                      type="text"
                                      id="loginemail"
                                      placeholder="Enter your email"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-12">
                                  <div className="single-input text-start">
                                    <label htmlFor="loginpassword">
                                      Password*
                                    </label>
                                    <PasswordInput />
                                  </div>
                                </div>
                                <div className="col-sm-12">
                                  <div className="checkbox-item d-grid gap-4 mt-4 mt-sm-6">
                                    <label className="single-radio checkbox position-relative d-flex align-items-center px-5 ps-8">
                                      <span className="text-start d-flex gap-1">
                                        I agree to the{" "}
                                        <span>Terms of Services</span>
                                      </span>
                                      <input type="checkbox" name="agree" />
                                      <span className="checkmark start-0"></span>
                                    </label>
                                  </div>
                                  <div className="btn-area mt-4 mt-sm-8">
                                    <button className="box-style btn-box">
                                      Login
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="regArea"
                      role="tabpanel"
                      aria-labelledby="regArea-tab">
                      <div className="reg-content regMod">
                        <div className="modal-body p-0">
                          <form action="#" className="p-4 p-sm-8">
                            <p>
                              Sign up for faster checkout, special offers, and
                              customer support!
                            </p>
                            <div className="form-inside mt-6 p-3 p-sm-6">
                              <div className="row">
                                <div className="col-sm-12">
                                  <div className="single-input text-start">
                                    <label htmlFor="fname">First Name*</label>
                                    <input
                                      type="text"
                                      id="fname"
                                      placeholder="Enter Your First Name"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-12">
                                  <div className="single-input text-start">
                                    <label htmlFor="lname">Last Name*</label>
                                    <input
                                      type="text"
                                      id="lname"
                                      placeholder="Enter Your Last Name"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-12">
                                  <div className="single-input text-start">
                                    <label htmlFor="email">Email*</label>
                                    <input
                                      type="text"
                                      id="email"
                                      placeholder="Enter your email"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-12">
                                  <div className="single-input text-start">
                                    <label htmlFor="password">Password*</label>
                                    <PasswordInput />
                                  </div>
                                </div>
                                <div className="col-sm-12">
                                  <div className="single-input text-start">
                                    <label htmlFor="cpassword">
                                      Confirm Password*
                                    </label>
                                    <PasswordInput />
                                  </div>
                                </div>
                                <div className="col-sm-12">
                                  <div className="checkbox-item d-grid gap-4 mt-4 mt-sm-6">
                                    <label className="single-radio checkbox position-relative d-flex align-items-center px-5 ps-8">
                                      <span className="text-start d-flex gap-1">
                                        I agree to the{" "}
                                        <span>Terms of Services</span>
                                      </span>
                                      <input type="checkbox" name="agree" />
                                      <span className="checkmark start-0"></span>
                                    </label>
                                  </div>
                                  <div className="btn-area mt-4 mt-sm-8">
                                    <button className="box-style btn-box">
                                      Sign Up
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
