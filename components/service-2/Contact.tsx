import Link from "next/link";
import PrimaryBtn from "../PrimaryBtn";

const Contact = () => {
	return (
		<section className="contact-us our-services-2 pt-120 pb-120">
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
				<div className="row justify-content-between align-items-center">
					<div className="col-xl-7 col-lg-6">
						<form action="#" className="p-4">
							<h3 className="visible-slowly-bottom mb-4">Write A Message</h3>
							<div className="form-inside p-4">
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
												placeholder="Please type your Message here..."
											></textarea>
										</div>
									</div>
									<div className="col-sm-12 mt-4">
										<PrimaryBtn text="Send Message" />
									</div>
								</div>
							</div>
						</form>
					</div>
					<div className="col-xl-5 col-lg-6 mt-7 mt-lg-0">
						<div className="contact-info py-7 py-sm-15 px-4 px-sm-7">
							<h3 className="visible-slowly-bottom mb-8 mb-sm-10">
								Get in Touch
							</h3>
							<div className="single-info mb-5 mb-sm-10 pb-5 pb-sm-10">
								<div className="d-flex align-items-center gap-3 mb-3">
									<div className="icon-area">
										<i className="material-symbols-outlined mat-icon fs-five">
											{" "}
											call{" "}
										</i>
									</div>
									<h4>Have any Questions</h4>
								</div>
								<div className="d-flex">
									<span className="me-5 pe-5">(302) 555-0107</span>
									<span>(704) 555-0127</span>
								</div>
							</div>
							<div className="single-info mb-5 mb-sm-10 pb-5 pb-sm-10">
								<div className="d-flex align-items-center gap-3 mb-3">
									<div className="icon-area">
										<i className="material-symbols-outlined mat-icon fs-five">
											{" "}
											call{" "}
										</i>
									</div>
									<h4>Contact Address</h4>
								</div>
								<div className="d-flex gap-10">
									<span>Al. Brucknera Aleksandra 63, Wrocław 51-410</span>
								</div>
							</div>
							<div className="single-info mb-5 mb-sm-10 pb-5 pb-sm-10">
								<div className="d-flex align-items-center gap-3 mb-3">
									<div className="icon-area">
										<i className="material-symbols-outlined mat-icon fs-five">
											{" "}
											call{" "}
										</i>
									</div>
									<h4>Opening Hours</h4>
								</div>
								<div className="d-flex gap-10">
									<span>Mon-Fri: 09: 00-18: 00 Sat-Sun: Weekend</span>
								</div>
							</div>
							<ul className="p-6 p-sm-8 d-flex justify-content-center gap-4 social-area">
								<li>
									<Link
										href="https://www.facebook.com/babycheese.studio"
										aria-label="Facebook"
										className="d-center"
									>
										<i className="fab fa-facebook-f"></i>
									</Link>
								</li>
								{/* <li>
									<Link
										href="https://www.instagram.com"
										aria-label="Instagram"
										className="d-center"
									>
										<i className="fab fa-instagram"></i>
									</Link>
								</li> */}
								<li>
									<Link
										href="https://www.linkedin.com/company/babycheese"
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
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
