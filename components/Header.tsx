"use client";
import Link from "next/link";
import fav from "@/public/images/fav.png";
import logo from "@/public/images/logo-text.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import CartSidebar from "./CartSidebar";
import Sidebar from "./Sidebar";
import LoginModal from "./LoginModal";

const Header = () => {
	const [sidebar, setSidebar] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [headerFixed, setHeaderFixed] = useState(false);
	const [searchBox, setSearchBox] = useState(false);
	const [cart, setCart] = useState(false);

	const cartItems = useAppSelector((state) => state.cart);
	const totolProducts = cartItems.products.reduce(
		(acc, product) => acc + product.quantity!,
		0
	);

	useEffect(() => {
		document.addEventListener("scroll", function () {
			if (window.scrollY > 600) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
			if (window.scrollY > 50) {
				setHeaderFixed(true);
			} else {
				setHeaderFixed(false);
				0;
			}
		});
	}, [scrolled]);
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	const path = usePathname();
	const homepage = path === "/" || path === "/index-2" || path === "/index-3";
	const ourServices =
		path === "/our-services" ||
		path === "/our-services-details" ||
		path === "/our-services-details-2";
	const pages =
		path == "/pricing-plan" ||
		path == "/store" ||
		path == "/shop-details-1" ||
		path == "/shop-details-2" ||
		path == "/cart" ||
		path == "/checkout" ||
		path == "/career" ||
		path == "/career-details" ||
		path == "/privacy-policy" ||
		path == "/terms-condition";
	return (
		<>
			{/* <div className="preloader align-items-center justify-content-center">
        <span className="loader"></span>
      </div> */}
			{/* <!-- end preloader --> */}

			{/* <!-- Scroll To Top Start--> */}
			<button
				onClick={scrollToTop}
				className={`scrollToTop d-none d-md-flex d-center ${
					scrolled && "active"
				}`}
				aria-label="scroll Bar Button"
			>
				Back To Top
			</button>
			{/* <!-- Scroll To Top End --> */}

			{/* <!-- Start Custom Cursor --> */}
			<div className="mouse-follower">
				<span className="cursor-outline"></span>
				<span className="cursor-dot"></span>
			</div>
			{/* <!-- End Custom Cursor --> */}

			{/* <!-- header-section start --> */}
			<header
				className={`header-section header-menu ${
					headerFixed && "animated fadeInDown header-fixed"
				}`}
			>
				<nav className="navbar w-100 flex-nowrap px-2 py-6 ps-2 ps-xl-12 ps-xxl-12 navbar-expand-xl">
					<div
						onClick={() => setSidebar(!sidebar)}
						className="sidebar-close mobile-menu"
					>
						<button className="d-center d-grid d-xl-none">
							<i className="material-symbols-outlined mat-icon fs-four">
								{" "}
								menu_open{" "}
							</i>
							<span className="fs-six">MENU</span>
						</button>
					</div>
					<Link
						href="/"
						className="navbar-brand ms-6 ms-xxl-15 d-flex align-items-center gap-2"
					>
						<Image src={fav} className="logo" alt="logo" />
						<Image
							src={logo}
							className="logo-text d-xxl-block d-none"
							alt="logo-text"
						/>
					</Link>
					<div
						className="collapse navbar-collapse d-flex gap-10 w-100 justify-content-end px-8 pe-2"
						id="navbar-content"
					>
						{/* <div className="contact-info ms-xl-0 ms-xxl-5 d-none d-sm-flex align-items-center gap-2">
							<i className="material-symbols-outlined mat-icon"> smartphone </i>
							<span>(302) 555-0107</span>
						</div> */}
						{/* <ul className="navbar-nav d-xl-flex d-none gap-3 py-4 py-lg-0 m-auto pe-20 align-self-center">
							<li className="dropdown show-dropdown">
								<button
									type="button"
									aria-label="Navbar Dropdown Button"
									data-bs-toggle="dropdown"
									data-bs-auto-close="outside"
									onClick={() => console.log("first")}
									className={`dropdown-toggle dropdown-nav ${
										homepage ? "active" : ""
									}`}
								>
									<Link className="dropdown-item" href="/">
										Home
									</Link>
								</button>
								<ul className={`dropdown-menu`}>
									<li>
										<Link className="dropdown-item" href="/">
											Home One
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" href="/index-2">
											Home Two
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" href="/index-3">
											Home Three
										</Link>
									</li>
								</ul>
							</li>
							<li className="dropdown show-dropdown">
								<button
									type="button"
									aria-label="Navbar Dropdown Button"
									className={`dropdown-toggle dropdown-nav ${
										(path == "/game" || path == "/game-details") && "active"
									}`}
								>
									games
								</button>
								<ul className="dropdown-menu">
									<li>
										<Link className="dropdown-item" href="/game">
											games
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" href="/game-details">
											games Details
										</Link>
									</li>
								</ul>
							</li>
							<li className="dropdown show-dropdown">
								<button
									type="button"
									aria-label="Navbar Dropdown Button"
									className={`dropdown-toggle dropdown-nav ${
										ourServices && "active"
									}`}
								>
									Services
								</button>
								<ul className="dropdown-menu">
									<li>
										<Link className="dropdown-item" href="/our-services-1">
											services one
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" href="/our-services-2">
											services two
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" href="/our-services-3">
											services three
										</Link>
									</li>
									<li>
										<Link
											className="dropdown-item"
											href="/our-services-details"
										>
											services Details
										</Link>
									</li>
									<li>
										<Link
											className="dropdown-item"
											href="/our-services-details-2"
										>
											services Details Two
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link
									className={`dropdown-nav ${path == "/about-us" && "active"}`}
									href="/about-us"
								>
									About
								</Link>
							</li>
							<li className={`dropdown show-dropdown`}>
								<button
									type="button"
									aria-label="Navbar Dropdown Button"
									className={`dropdown-toggle dropdown-nav ${
										pages && "active"
									}`}
								>
									Pages
								</button>
								<ul className="dropdown-menu">
									<li>
										<Link className="dropdown-item" href="/pricing-plan">
											pricing plan
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" href="/store">
											Store
										</Link>
									</li>
									<li className="sub-dropdown">
										<button
											type="button"
											aria-label="Navbar Dropdown Button"
											className="dropdown-item dropdown-toggle"
										>
											shop details
										</button>
										<ul className="sub sub-menu dropend">
											<li>
												<Link className="dropdown-item" href="/shop-details-1">
													shop details one
												</Link>
											</li>
											<li>
												<Link className="dropdown-item" href="/shop-details-2">
													shop details two
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<Link className="dropdown-item" href="/cart">
											Cart
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" href="/checkout">
											checkout
										</Link>
									</li>
									<li className="sub-dropdown">
										<button
											type="button"
											aria-label="Navbar Dropdown Button"
											className="dropdown-item dropdown-toggle"
										>
											career
										</button>
										<ul className="sub sub-menu dropend">
											<li>
												<Link className="dropdown-item" href="/career">
													career
												</Link>
											</li>
											<li>
												<Link className="dropdown-item" href="/career-details">
													career details
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<Link className="dropdown-item" href="/privacy-policy">
											privacy policy
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" href="/terms-conditions">
											terms conditions
										</Link>
									</li>
								</ul>
							</li>
							<li className="dropdown show-dropdown">
								<button
									type="button"
									aria-label="Navbar Dropdown Button"
									className={`dropdown-toggle dropdown-nav ${
										(path == "/blog" || path == "/blog-single") && "active"
									}`}
								>
									blog
								</button>
								<ul className="dropdown-menu">
									<li>
										<Link className="dropdown-item" href="/blog">
											blog
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" href="/blog-single">
											blog Details
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link
									className={`dropdown-item ${path == "/contact" && "active"}`}
									href="/contact"
								>
									Contact
								</Link>
							</li>
						</ul> */}
						<ul className="navbar-nav d-xl-flex d-none gap-6 py-4 py-lg-0 m-auto pe-20 align-self-center">
							<li>
								<Link
									className={`dropdown-nav ${homepage ? "active" : ""}`}
									href="/"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									className={`dropdown-nav ${
										(path == "/portfolio" || path == "/portfolio-details") &&
										"active"
									}`}
									href="/portfolio"
								>
									Portfolio
								</Link>
							</li>
							<li>
								<Link
									className={`dropdown-nav ${ourServices && "active"}`}
									href="/our-services"
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									className={`dropdown-nav ${
										path == "/privacy-policy" && "active"
									}`}
									href="/privacy-policy"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									className={`dropdown-nav ${
										path == "/terms-conditions" && "active"
									}`}
									href="/terms-conditions"
								>
									Terms & Conditions
								</Link>
							</li>
							<li>
								<Link
									className={`dropdown-nav ${path == "/blog" && "active"}`}
									href="/blog"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									className={`dropdown-nav ${path == "/contact" && "active"}`}
									href="/contact"
								>
									Contact
								</Link>
							</li>
						</ul>
						<div className="right-area position-relative d-flex gap-3 gap-xxl-6 align-items-center">
							<div className={`single-item ${searchBox && "active"}`}>
								{/* <div className="cmn-head">
									<div
										className="icon-area d-center position-relative"
										onClick={() => setSearchBox(!searchBox)}
									>
										<i className="material-symbols-outlined mat-icon fs-five">
											search
										</i>
									</div>
								</div> */}
								<div className="main-area p-5">
									<h5 className="mb-2">Search</h5>
									<form action="#">
										<div className="input-area mt-6 p-4 d-flex align-items-center">
											<input type="text" placeholder="Enter Your Email" />
											<div className="btn-area">
												<button className="box-style btn-box border-re py-1 p-2">
													Search
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="single-item">
								<div className="cmn-head">
									{/* <div className="icon-area d-center position-relative">
										<i className="material-symbols-outlined mat-icon fs-five">
											favorite
										</i>
									</div> */}
								</div>
							</div>
							{/* <div className="single-item">
								<div className="cmn-head">
									<button
										type="button"
										className="icon-area d-center position-relative"
										data-bs-toggle="modal"
										data-bs-target="#loginMod"
									>
										<i className="material-symbols-outlined mat-icon fs-five">
											person
										</i>
									</button>
								</div>
							</div> */}
							<div className={`single-item cart-area ${cart && "active"}`}>
								{/* <div className="cmn-head">
									<button
										type="button"
										aria-label="Shopping Button"
										onClick={() => setCart(!cart)}
										className="icon-area d-center position-relative"
									>
										<i className="material-symbols-outlined mat-icon fs-five">
											shopping_bag
										</i>
										<span className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-primary">
											{totolProducts}
											<span className="visually-hidden">unread messages</span>
										</span>
									</button>
								</div> */}
								<CartSidebar setCart={setCart} />
							</div>
						</div>
					</div>
				</nav>
			</header>
			{/* <!-- header-section end --> */}

			{/* <!-- Login Registration start --> */}
			<LoginModal />
			{/* <!-- Login Registration end --> */}

			{/* <!-- Sidebar Menu start --> */}
			<Sidebar sidebar={sidebar} setSidebar={setSidebar} />
		</>
	);
};

export default Header;
