"use client";

import logoText from "@/public/images/logo-text-alt.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const handleMouseMove = (e: any) => {
		setX(e.nativeEvent.offsetX);
		setY(e.nativeEvent.offsetY);
	};
	const style = {
		"--x": `${x}px`,
		"--y": `${y}px`,
	} as React.CSSProperties;
	return (
		<footer className="footer-section index-two">
			<div className="container pt-15">
				<div className="row footer-wrapper gap-8 px-4 px-sm-6 pt-70 pb-70">
					<div className="col-xl-4 col-md-5">
						<div className="single-box visible-from-bottom">
							<Link href="/">
								{/* <Image src={logoText} className="logo" alt="logo" /> */}
								<h5>BabyCheese Studio</h5>
							</Link>
							<p className="mt-4 mb-6">
								We are a technical agency that builds digital products for
								businesses worldwide
							</p>
							<ul className="d-flex gap-4 social-area">
								<li>
									<Link
										target="_blank"
										href="https://www.facebook.com/babycheese.studio"
										aria-label="Facebook"
										className="d-center"
									>
										<i className="fab fa-facebook-f"></i>
									</Link>
								</li>
								<li>
									<Link
										target="_blank"
										href="https://www.instagram.com"
										aria-label="Instagram"
										className="d-center"
									>
										<i className="fab fa-instagram"></i>
									</Link>
								</li>
								<li>
									<Link
										target="_blank"
										href="https://www.linkedin.com/company/babycheese"
										aria-label="Linkedin"
										className="d-center"
									>
										<i className="fab fa-linkedin-in"></i>
									</Link>
								</li>
								<li>
									<Link
										target="_blank"
										href="https://assetstore.unity.com/"
										aria-label="Unity"
										className="d-center"
									>
										<i className="fab fa-unity"></i>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					{/* <div className="col-xl-2 col-md-2 col-sm-3"> */}
					<div className="col-auto">
						<div className="single-box links visible-from-bottom">
							<h4 className="mb-4">Links</h4>
							<ul className="items d-grid flex-wrap gap-8 ms-4 d-md-flex">
								<li>
									<Link href="/" className="d-flex align-items-center">
										Home
									</Link>
								</li>
								<li>
									<Link href="/portfolio" className="d-flex align-items-center">
										Portfolio
									</Link>
								</li>
								<li>
									<Link
										href="/our-services"
										className="d-flex align-items-center"
									>
										Services
									</Link>
								</li>

								{/* <li>
									<Link href="/blog" className="d-flex align-items-center">
										Blog
									</Link>
								</li> */}
								<li>
									<Link href="/contact" className="d-flex align-items-center">
										Contact
									</Link>
								</li>
								<li>
									<Link
										href="/privacy-policy"
										className="d-flex align-items-center"
									>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link
										href="/terms-conditions"
										className="d-flex align-items-center"
									>
										Terms & Conditions
									</Link>
								</li>
							</ul>
						</div>
					</div>
					{/* <div className="col-xl-3 col-md-5 col-sm-8">
						<div className="single-box visible-from-bottom">
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
								<div className="single-area d-flex gap-6">
									<div className="icon-area d-center">
										<i className="material-symbols-outlined"> location_on </i>
									</div>
									<div className="text-area">
										<h5 className="mb-2">New York</h5>
										<span>7012 Green Lake Ave., Poughkeepsie, NY 12601</span>
									</div>
								</div>
							</div>
						</div>
					</div> */}
					{/* <div className="col-xl-3 col-md-7">
						<div className="single-box visible-from-bottom">
							<h4 className="mb-4">Stay Updated</h4>
							<form action="#">
								<input type="text" placeholder="Placeholder" />
								<div className="btn-area mt-4">
									<button
										onMouseMove={handleMouseMove}
										style={style}
										className="box-style w-100 justify-content-center btn-box"
									>
										Subscribe
									</button>
								</div>
							</form>
						</div>
					</div> */}
				</div>
				<div className="footer-bottom bg-transparent pt-6 pb-8">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-md-6 text-center">
								<div className="copyright">
									<p>
										Copyright © {new Date().getFullYear()}{" "}
										<Link href="/">Babyheese Studio</Link> - All Right Reserved
									</p>
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
