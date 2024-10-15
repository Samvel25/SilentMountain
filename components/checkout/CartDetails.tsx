"use client";
import product2 from "@/public/images/product-img-2.png";
import product3 from "@/public/images/product-img-3.png";
import Image from "next/image";
import Select from "react-select";
import Link from "next/link";
import PrimaryBtn from "../PrimaryBtn";
const options = [
  { value: "1", label: "Option One" },
  { value: "2", label: "Option Two" },
  { value: "3", label: "Option Three" },
];

const CartDetails = () => {
  const selectStyles = {
    control: (styles: any) => ({
      ...styles,
      height: "60px",
      width: "100%",
      backgroundColor: "transparent",
      color: "red",
      borderRadius: "10px",
      border: "1px solid #4c4d5a",
      boxShadow: "none",
    }),
    option: (styles: any, { isSelected }: { isSelected: any }) => ({
      ...styles,
      color: isSelected ? "#fff" : "#000",
      backgroundColor: isSelected ? "#3FCA90" : "white",
      "&:hover": { backgroundColor: "#3FCA90", color: "#fff" },
    }),
    placeholder: (styles: any) => ({ ...styles, color: "#fff" }),
    singleValue: (styles: any) => ({ ...styles, color: "#fff" }),
  };
  return (
    <div className="shop-details cart-details">
      <div className="container border-0 pt-120 pb-120">
        <div className="row justify-content-between">
          <div className="col-xl-7 col-lg-7">
            <div className="personal-info">
              <div className="d-flex flex-wrap py-3 py-sm-4 px-4 px-sm-8 justify-content-between">
                <div className="check d-center justify-content-start gap-3">
                  <i className="material-symbols-outlined fs-four"> check </i>
                  <h4>Personal Information </h4>
                </div>
                <Link
                  href="#"
                  className="edit d-center justify-content-start gap-3">
                  <i className="material-symbols-outlined fs-six"> edit </i>
                  <p>Edit</p>
                </Link>
              </div>
              <div className="address py-3 py-sm-4 px-4 px-sm-8 alt-bg">
                <h4>02. Addresses</h4>
              </div>
              <div className="p-5 p-sm-8">
                <p>
                  The selected address will be used as your personal address (
                  for invoices)
                </p>
                <div className="row mt-5 mt-sm-10">
                  <div className="col-sm-6">
                    <div className="single-input">
                      <label htmlFor="fname">First Name</label>
                      <input
                        type="text"
                        id="fname"
                        placeholder="Enter Your First Name"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="single-input">
                      <label htmlFor="lname">First Name</label>
                      <input
                        type="text"
                        id="lname"
                        placeholder="Enter Your First Name"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="single-input">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        id="email"
                        placeholder="Enter Your Email"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="single-input">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        id="phone"
                        placeholder="Enter Your phone number"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="single-input">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        id="address"
                        placeholder="Enter your address"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="single-input">
                      <label htmlFor="address2">Address Line 2</label>
                      <input
                        type="text"
                        id="address2"
                        placeholder="Enter your address"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="single-input">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        id="city"
                        placeholder="Enter Your city"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="single-input">
                      <label htmlFor="state">State</label>
                      <Select
                        components={{
                          IndicatorSeparator: () => null,
                        }}
                        styles={selectStyles}
                        options={options}
                        placeholder="Choose Option"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="single-input">
                      <label htmlFor="zip">Zip/ Poster Code</label>
                      <input
                        type="text"
                        id="zip"
                        placeholder="Zip/ Poster Code"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="single-input">
                      <label htmlFor="country">Country</label>
                      <input
                        type="text"
                        id="country"
                        placeholder="Enter Your Country"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="address payment py-3 py-sm-4 px-4 px-sm-8">
                <h4>03. Payment</h4>
              </div>
              <div className="p-4 p-sm-8">
                <p>The selected your payment option</p>
                <div className="radio-radio-item d-grid gap-4 mt-4 mt-sm-6">
                  <label className="single-radio position-relative d-flex align-items-center px-5 ps-8">
                    <b className="text-start d-grid">
                      <span>
                        Pay with <span>PayPal</span> | It’s simple,easy and more
                        secure
                      </span>
                    </b>
                    <input type="radio" name="pricing-select" />
                    <span className="checkmark start-0"></span>
                  </label>
                  <label className="single-radio position-relative d-flex align-items-center px-5 ps-8">
                    <b className="text-start d-grid">
                      <span>
                        Pay with{" "}
                        <span>
                          Card/Apple Pay/ Google pay/Local payment methods
                        </span>
                      </span>
                    </b>
                    <input type="radio" name="pricing-select" />
                    <span className="checkmark start-0"></span>
                  </label>
                </div>
                <PrimaryBtn classes="mt-6" text="Continue" />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 mt-7 mt-lg-0">
            <div className="cus-scrollbar">
              <form action="#" className="checkout-form py-5 px-3">
                <h2 className="visible-slowly-bottom mb-4 text-center">
                  2 Items
                </h2>
                <div className="item-list mb-6">
                  <div className="content-box d-flex py-4 gap-3 align-items-center">
                    <div className="icon-box">
                      <Image src={product2} alt="icon" />
                    </div>
                    <div className="info-box">
                      <p className="d-flex gap-3">
                        Forza Horizon 3 <span>X2</span>
                        <span>$150.00</span>
                      </p>
                    </div>
                  </div>
                  <div className="content-box d-flex py-4 gap-3 align-items-center">
                    <div className="icon-box">
                      <Image src={product3} alt="icon" />
                    </div>
                    <div className="info-box">
                      <p className="d-flex gap-3">
                        Forza Horizon 3 <span>X2</span>
                        <span>$150.00</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="main-content py-4 py-sm-8 px-3 px-sm-5">
                  <ul>
                    <li className="d-center justify-content-between gap-2 fs-seven">
                      <span>2 items</span>
                      <span>$900</span>
                    </li>
                    <li className="d-center justify-content-between gap-2 fs-seven">
                      <span>Shipping</span>
                      <span>Free</span>
                    </li>
                  </ul>
                  <div className="promo-code my-6">
                    <div className="head-area">
                      <p>Have a promo code?</p>
                    </div>
                    <div className="input-area p-1 d-flex align-items-center justify-content-between">
                      <input
                        type="text"
                        className="ps-2"
                        placeholder="Promo Code"
                      />
                      <PrimaryBtn text="Add" />
                    </div>
                  </div>
                  <ul className="sub-total py-3">
                    <li className="d-center justify-content-between gap-2 fs-seven">
                      <span>Total (tax incl.)</span>
                      <span>$900</span>
                    </li>
                  </ul>
                </div>
              </form>
              <div className="footer-items mt-5 mt-sm-10 d-grid gap-3">
                <p className="d-flex align-items-center gap-3">
                  <i className="material-symbols-outlined"> shield </i>
                  Secure payment
                </p>
                <p className="d-flex align-items-center gap-3">
                  <i className="material-symbols-outlined"> local_shipping </i>
                  Instant delivery
                </p>
                <p className="d-flex align-items-center gap-3">
                  <i className="material-symbols-outlined"> cached </i>
                  30-day money back guarantee for unused keys
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
