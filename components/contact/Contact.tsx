"use client";

import Link from "next/link";
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
	return (
		<section className="contact-us bg-transparen pt-120 pb-120">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div className="section-header text-center">
							<span className="fs-two heading mb-6">
								We’d Love To Hear <span>From You</span>
							</span>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-7">
						<ContactForm />
					</div>
					{/* <div className="col-lg-5 mt-7 mt-lg-0">
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
										className="d-center"
									>
										<i className="fab fa-facebook-f"></i>
									</Link>
								</li>
								<li>
									<Link
										href="https://www.instagram.com"
										aria-label="Instagram"
										className="d-center"
									>
										<i className="fab fa-instagram"></i>
									</Link>
								</li>
								<li>
									<Link
										href="https://www.linkedin.com"
										aria-label="Linkedin"
										className="d-center"
									>
										<i className="fab fa-linkedin-in"></i>
									</Link>
								</li>
								<li>
									<Link
										href="https://assetstore.unity.com/"
										aria-label="Unity"
										className="d-center"
									>
										<i className="fab fa-unity"></i>
									</Link>
								</li>
							</ul>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default Contact;
