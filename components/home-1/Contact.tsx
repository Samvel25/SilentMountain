import React from "react";
import PrimaryBtn from "../PrimaryBtn";
import ContactForm from "../contact/ContactForm";

const Contact = () => {
	return (
		<section className="contact-us pb-120">
			<div className="container">
				<div className="row justify-content-between align-items-center">
					<div className="col-lg-5">
						<div className="section-text">
							<h4 className="sub-title">
								Get In <span>Touch</span>
							</h4>
							<span className="fs-two heading mb-6">
								Drum Up <span>Your Idea</span>
							</span>
							<p>
								Leave all the coding to a trusted technology partner, and keep
								sharp focus on the business.
							</p>
						</div>
						{/* <div className="contact-area">
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
						</div> */}
					</div>
					<div className="col-lg-5 me-20 mt-7 mt-lg-0">
						<ContactForm padding="p-2" showHeading={false} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
