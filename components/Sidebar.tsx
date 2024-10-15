import Link from "next/link";
import { useState } from "react";
import Select from "react-select";
type sideBarProps = {
  sidebar: boolean;
  setSidebar: (open: boolean) => void;
};
const Sidebar = ({ sidebar, setSidebar }: sideBarProps) => {
  const [dropdown, setDropdown] = useState<null | number>(null);
  const [subMenu, setSubmenu] = useState<null | number>(null);
  const options = [
    { value: "English", label: "Eng" },
    { value: "Bangla", label: "Ban" },
    { value: "Hindi", label: "Hin" },
  ];
  const selectStyles = {
    control: (styles: any) => ({
      ...styles,
      height: "40px",
      width: "60px",
      backgroundColor: "transparent",
      color: "red",
      border: "0",
      boxShadow: "0",
    }),
    option: (styles: any, { isSelected }: { isSelected: any }) => ({
      ...styles,
      color: isSelected ? "#fff" : "#000",
      padding: "0",
      textAlign: "center",
      backgroundColor: isSelected ? "#161829" : "white",
      "&:hover": { backgroundColor: "#161829", color: "#fff" },
    }),
    placeholder: (styles: any) => ({ ...styles, color: "#fff" }),
    singleValue: (styles: any) => ({ ...styles, color: "#fff" }),
  };
  return (
    <div className={`sidebar-wrapper ${sidebar ? "sidebar-active" : ""}`}>
      <div className="position-relative">
        <div className="side-menubar py-6 d-flex flex-column justify-content-between align-items-center">
          <div
            onClick={() => setSidebar(!sidebar)}
            className="sidebar-close d-none d-xl-block">
            <button className="d-center d-grid">
              <i className="material-symbols-outlined mat-icon fs-three">
                {sidebar ? "close" : "menu_open"}
              </i>
              <span>MENU</span>
            </button>
          </div>
          <ul className="d-grid gap-4 social-area">
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
          <div className="bottom-area">
            <Select
              components={{
                IndicatorSeparator: () => null,
                DropdownIndicator: () => null,
              }}
              styles={selectStyles}
              menuPlacement="top"
              options={options}
              defaultValue={options[0]}
            />
          </div>
        </div>
        <div className="sidebar-content d-center flex-columnn">
          <div className="header-section d-block">
            <div className="navbar bg-transparent">
              <ul className="navbar-nav d-xl-flex gap-2 gap-md-5 py-4 py-lg-0 px-4 px-lg-0 align-self-center">
                <li className="dropdown show-dropdown">
                  <button
                    type="button"
                    aria-label="Navbar Dropdown Button"
                    className="dropdown-toggle dropdown-nav fs-three heading"
                    onClick={() =>
                      setDropdown((prev) => (prev == 1 ? null : 1))
                    }>
                    Home
                  </button>
                  <ul className={`dropdown-menu ${dropdown == 1 && "d-block"}`}>
                    <li>
                      <Link className="dropdown-item fs-three heading" href="/">
                        Home One
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item fs-three heading"
                        href="/index-2">
                        Home Two
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item fs-three heading"
                        href="/index-3">
                        Home Three
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown show-dropdown">
                  <button
                    type="button"
                    aria-label="Navbar Dropdown Button"
                    className="dropdown-toggle dropdown-nav fs-three heading"
                    onClick={() =>
                      setDropdown((prev) => (prev == 2 ? null : 2))
                    }>
                    games
                  </button>
                  <ul className={`dropdown-menu ${dropdown == 2 && "d-block"}`}>
                    <li>
                      <Link
                        className="dropdown-item fs-three heading"
                        href="/game">
                        games
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item fs-three heading"
                        href="/game-details">
                        games Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown show-dropdown">
                  <button
                    type="button"
                    aria-label="Navbar Dropdown Button"
                    className="dropdown-toggle dropdown-nav fs-three heading"
                    onClick={() =>
                      setDropdown((prev) => (prev == 3 ? null : 3))
                    }>
                    Services
                  </button>
                  <ul className={`dropdown-menu ${dropdown == 3 && "d-block"}`}>
                    <li>
                      <Link
                        className="dropdown-item fs-three heading"
                        href="/our-services-1">
                        services one
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item fs-three heading"
                        href="/our-services-2">
                        services two
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item fs-three heading"
                        href="/our-services-3">
                        services three
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item fs-three heading"
                        href="/our-services-details">
                        services Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item fs-three heading"
                        href="/our-services-details-2">
                        services Details two
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    className="dropdown-nav fs-three heading"
                    href="/about-us">
                    About
                  </Link>
                </li>
                <li className="dropdown show-dropdown">
                  <button
                    type="button"
                    aria-label="Navbar Dropdown Button"
                    className="dropdown-toggle dropdown-nav fs-three heading"
                    onClick={() =>
                      setDropdown((prev) => (prev == 4 ? null : 4))
                    }>
                    Pages
                  </button>
                  <ul className={`dropdown-menu ${dropdown == 4 && "d-block"}`}>
                    <li>
                      <Link
                        className="dropdown-item fs-three heading"
                        href="/pricing-plan">
                        pricing plan
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item fs-three heading"
                        href="/store">
                        Store
                      </Link>
                    </li>
                    <li className="sub-dropdown">
                      <button
                        type="button"
                        aria-label="Navbar Dropdown Button"
                        className="dropdown-item fs-three heading dropdown-toggle"
                        onClick={() =>
                          setSubmenu((prev) => (prev == 1 ? null : 1))
                        }>
                        shop details
                      </button>
                      <ul
                        className={`sub sub-menu dropend ${
                          subMenu == 1 && "d-block"
                        }`}>
                        <li>
                          <Link
                            className="dropdown-item fs-three heading"
                            href="/shop-details-1">
                            shop details one
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item fs-three heading"
                            href="/shop-details-2">
                            shop details two
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item fs-three heading"
                        href="/cart">
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item fs-three heading"
                        href="/checkout">
                        checkout
                      </Link>
                    </li>
                    <li className="sub-dropdown">
                      <button
                        type="button"
                        aria-label="Navbar Dropdown Button"
                        className="dropdown-item fs-three heading dropdown-toggle"
                        onClick={() =>
                          setSubmenu((prev) => (prev == 2 ? null : 2))
                        }>
                        career
                      </button>
                      <ul
                        className={`sub sub-menu dropend ${
                          subMenu == 2 && "d-block"
                        }`}>
                        <li>
                          <Link
                            className="dropdown-item fs-three heading"
                            href="/career">
                            career
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item fs-three heading"
                            href="/career-details">
                            career details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item fs-three heading"
                        href="/privacy-policy">
                        privacy policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item fs-three heading"
                        href="/terms-conditions">
                        terms conditions
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown show-dropdown">
                  <button
                    type="button"
                    aria-label="Navbar Dropdown Button"
                    className="dropdown-toggle dropdown-nav fs-three heading"
                    onClick={() =>
                      setDropdown((prev) => (prev == 5 ? null : 5))
                    }>
                    blog
                  </button>
                  <ul className={`dropdown-menu ${dropdown == 5 && "d-block"}`}>
                    <li>
                      <Link
                        className="dropdown-item fs-three heading"
                        href="/blog">
                        blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item fs-three heading"
                        href="/blog-single">
                        blog Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    className="dropdown-item fs-three heading"
                    href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-items w-100 bottom-0">
            <div className="row">
              <div className="col-xl-3 col-lg-6">
                <div className="single-item p-5 py-xxl-10 px-xxl-8">
                  <h4 className="mb-6">Office</h4>
                  <div className="d-flex gap-3 align-items-center">
                    <div className="icon-box d-center">
                      <i className="material-symbols-outlined mat-icon fs-fure">
                        {" "}
                        location_on{" "}
                      </i>
                    </div>
                    <div className="right-item w-75">
                      <h5>London</h5>
                      <span>Al. Brucknera Aleksandra 63, Wrocław 51-410</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="single-item p-5 py-xxl-10 px-xxl-8">
                  <h4 className="mb-6">Email address</h4>
                  <div className="d-flex gap-3 align-items-center">
                    <div className="icon-box d-center">
                      <i className="material-symbols-outlined mat-icon fs-fure">
                        {" "}
                        mail{" "}
                      </i>
                    </div>
                    <div className="right-item d-grid">
                      <span>Example@gmail.com</span>
                      <span>Example@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="single-item p-5 py-xxl-10 px-xxl-8">
                  <h4 className="mb-6">Phone Number</h4>
                  <div className="d-flex gap-3 align-items-center">
                    <div className="icon-box d-center">
                      <i className="material-symbols-outlined mat-icon fs-fure">
                        {" "}
                        call{" "}
                      </i>
                    </div>
                    <div className="right-item d-grid">
                      <span>(302) 555-0107</span>
                      <span>(302) 555-0107</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="single-item p-5 py-xxl-10 px-xxl-8">
                  <h4 className="mb-6">Working Hours</h4>
                  <div className="d-flex gap-3 align-items-center">
                    <div className="icon-box d-center">
                      <i className="material-symbols-outlined mat-icon fs-fure">
                        {" "}
                        schedule{" "}
                      </i>
                    </div>
                    <div className="right-item w-50">
                      <span>Mon-Fri: 09: 00-18: 00 Sat-Sun: Weekend</span>
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

export default Sidebar;
