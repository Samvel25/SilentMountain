import ourfocusbg from "@/public/images/our-focus-bg.png";
import blogImg from "@/public/images/blog-img-1.png";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import { useState } from "react";

const ServiceDetails = () => {
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

	const settings = {
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		fade: false,
		infinite: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		dots: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};
	return (
		<section className="service-details pt-120">
			<div className="container">
				<div className="main-content pb-120">
					<div className="row justify-content-between">
						<div className="col-xl-7 col-lg-7">
							<div className="content-wrapper">
								<div className="single-content mb-8">
									<h2 className="visible-slowly-bottom display-four mb-2">
										We Specialize in Such Areas
									</h2>
									<p>
										Our game development agency is equally professionally
										focused on full cycle game development from scratch,
										co-development of gaming solutions with highly productive
										teamwork and fast and efficient game porting. Entrust your
										project to a game development team that can light real stars
										in the sky of the gaming industry.
									</p>
									<div className="img-area mt-6">
										<Image src={ourfocusbg} alt="Image" />
									</div>
								</div>
								<div className="single-content row mb-8">
									<div className="col-xl-7">
										<h3 className="visible-slowly-bottom mb-6">
											We Provide Best Game development Services{" "}
										</h3>
										<p className="mb-6">
											Our game development agency is equally professionally
											focused on full cycle game development from scratch,
											co-development of gaming solutions with highly productive
											teamwork and fast and efficient game porting. Entrust your
											project to a game development team that can light real
											stars in the sky of the gaming industry.
										</p>
										<p>
											Our game development agency is equally professionally
											focused on full cycle game development from scratch,
											co-development of gaming solutions with highly productive
											teamwork and fast and efficient game porting. Entrust your
											project to a game development team that can light real
											stars in the sky of the gaming industry.
										</p>
									</div>
									<div className="col-xl-5 mt-4 mt-xl-0">
										<ul className="ms-10 mb-8 d-grid gap-3 list">
											<li className="d-flex align-items-center">
												Full Cycle Game Dev
											</li>
											<li className="d-flex align-items-center">
												Game Co- Development
											</li>
											<li className="d-flex align-items-center">
												Game Porting
											</li>
										</ul>
										<div className="img-area">
											<Image src={blogImg} alt="Image" />
										</div>
									</div>
								</div>
								<div className="faqs-section mb-15 bg-transparent key-platforms">
									<div className="section-header">
										<h3 className="visible-slowly-bottom mb-4">
											We develop games for these key platforms
										</h3>
										<p>
											Embracing game development on most popular platforms and
											reaching the attention of players with a wide variety of
											preferences is one of our main features.
										</p>
									</div>
									<div className="accordion" id="accordionKeys">
										<div className="accordion-item">
											<h5 className="accordion-header" id="headingKeyOne">
												<button
													className="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseKeyOne"
													aria-expanded="false"
													aria-controls="collapseKeyOne"
												>
													PC
												</button>
											</h5>
											<div
												id="collapseKeyOne"
												className="accordion-collapse collapse"
												aria-labelledby="headingKeyOne"
												data-bs-parent="#accordionKeys"
											>
												<div className="accordion-body">
													<p>
														Game development on all major console platforms:
														Xbox, Nintendo, PS4.
													</p>
												</div>
											</div>
										</div>
										<div className="accordion-item">
											<h5 className="accordion-header" id="headingKeyTwo">
												<button
													className="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseKeyTwo"
													aria-expanded="false"
													aria-controls="collapseKeyTwo"
												>
													Console
												</button>
											</h5>
											<div
												id="collapseKeyTwo"
												className="accordion-collapse collapse"
												aria-labelledby="headingKeyTwo"
												data-bs-parent="#accordionKeys"
											>
												<div className="accordion-body">
													<p>
														Game development on all major console platforms:
														Xbox, Nintendo, PS4.
													</p>
												</div>
											</div>
										</div>
										<div className="accordion-item">
											<h5 className="accordion-header" id="headingKeyThree">
												<button
													className="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseKeyThree"
													aria-expanded="false"
													aria-controls="collapseKeyThree"
												>
													Mobile
												</button>
											</h5>
											<div
												id="collapseKeyThree"
												className="accordion-collapse collapse"
												aria-labelledby="headingKeyThree"
												data-bs-parent="#accordionKeys"
											>
												<div className="accordion-body">
													<p>
														Game development on all major console platforms:
														Xbox, Nintendo, PS4.
													</p>
												</div>
											</div>
										</div>
										<div className="accordion-item">
											<h5 className="accordion-header" id="headingKeyFour">
												<button
													className="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseKeyFour"
													aria-expanded="false"
													aria-controls="collapseKeyFour"
												>
													AR/VR
												</button>
											</h5>
											<div
												id="collapseKeyFour"
												className="accordion-collapse collapse"
												aria-labelledby="headingKeyFour"
												data-bs-parent="#accordionKeys"
											>
												<div className="accordion-body">
													<p>
														Game development on all major console platforms:
														Xbox, Nintendo, PS4.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="single-content">
									<h3 className="visible-slowly-bottom mb-10">
										Our Fundamental Benefits
									</h3>
									<Slider
										{...settings}
										className="our-game-features fundamental-benefits fundamental-carousel"
									>
										<div className="single-slide">
											<div
												onMouseMove={handleMouseMove}
												style={style}
												className="single-box service-single flex-wrap box-style box-first py-5 py-sm-10 px-4 px-sm-8 d-center justify-content-between"
											>
												<div className="content-box d-grid gap-4 gap-md-6">
													<div className="icon-box d-inline-flex d-center">
														<i className="material-symbols-outlined fs-one">
															{" "}
															discover_tune
														</i>
													</div>
													<div className="info-box">
														<h4 className="mb-4">
															Customized Game Development
														</h4>
														<p>
															We make customized games to fit your
															budget,requirements, with a skilled team that
															tailors the development process to your goals.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="single-slide">
											<div
												onMouseMove={handleMouseMove}
												style={style}
												className="single-box service-single flex-wrap box-style box-first py-5 py-sm-10 px-4 px-sm-8 d-center justify-content-between"
											>
												<div className="content-box d-grid gap-4 gap-md-6">
													<div className="icon-box d-inline-flex d-center">
														<i className="material-symbols-outlined fs-one">
															{" "}
															code_off{" "}
														</i>
													</div>
													<div className="info-box">
														<h4 className="mb-4">
															Experienced Game Developers
														</h4>
														<p>
															We have a dedicated team of developers specialized
															in Game creation to help you design and implement
															your idea to stand out.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="single-slide">
											<div
												onMouseMove={handleMouseMove}
												style={style}
												className="single-box service-single flex-wrap box-style box-first py-5 py-sm-10 px-4 px-sm-8 d-center justify-content-between"
											>
												<div className="content-box d-grid gap-4 gap-md-6">
													<div className="icon-box d-inline-flex d-center">
														<i className="material-symbols-outlined fs-one">
															{" "}
															shield{" "}
														</i>
													</div>
													<div className="info-box">
														<h4 className="mb-4">
															Top level Security Practices
														</h4>
														<p>
															We ensure the security of servers and player data
															in game development, providing full updating
															systems with the latest innovations.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="single-slide">
											<div
												onMouseMove={handleMouseMove}
												style={style}
												className="single-box service-single flex-wrap box-style box-first py-5 py-sm-10 px-4 px-sm-8 d-center justify-content-between"
											>
												<div className="content-box d-grid gap-4 gap-md-6">
													<div className="icon-box d-inline-flex d-center">
														<i className="material-symbols-outlined fs-one">
															{" "}
															signpost{" "}
														</i>
													</div>
													<div className="info-box">
														<h4 className="mb-4">
															Flexible Scaling Capabilities
														</h4>
														<p>
															We expand our team to meet deadlines &amp; have
															10,000+ specialized developers for successful
															project implementation.
														</p>
													</div>
												</div>
											</div>
										</div>
									</Slider>
								</div>
								<div className="single-content mt-10">
									<div className="faqs-section bg-transparent position-relative">
										<h3 className="visible-slowly-bottom mb-10">
											Frequently Asked Questions
										</h3>
										<div className="accordion" id="accordionFaqs">
											<div className="accordion-item">
												<h5 className="accordion-header" id="headingOne">
													<button
														className="accordion-button collapsed"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target="#collapseOne"
														aria-expanded="false"
														aria-controls="collapseOne"
													>
														What services does GameStorm offer for game
														development?
													</button>
												</h5>
												<div
													id="collapseOne"
													className="accordion-collapse collapse"
													aria-labelledby="headingOne"
													data-bs-parent="#accordionFaqs"
												>
													<div className="accordion-body">
														<p>
															GameStorm offers a full range of services for game
															development, including game art, design,
															programming, and project management.
														</p>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h5 className="accordion-header" id="headingTwo">
													<button
														className="accordion-button collapsed"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target="#collapseTwo"
														aria-expanded="false"
														aria-controls="collapseTwo"
													>
														How does GameStorm handle project management during
														game development?
													</button>
												</h5>
												<div
													id="collapseTwo"
													className="accordion-collapse collapse"
													aria-labelledby="headingTwo"
													data-bs-parent="#accordionFaqs"
												>
													<div className="accordion-body">
														<p>
															GameStorm offers a full range of services for game
															development, including game art, design,
															programming, and project management.
														</p>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h5 className="accordion-header" id="headingThree">
													<button
														className="accordion-button collapsed"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target="#collapseThree"
														aria-expanded="false"
														aria-controls="collapseThree"
													>
														How does GameStorm ensure the game art matches the
														overall vision and design of the game?
													</button>
												</h5>
												<div
													id="collapseThree"
													className="accordion-collapse collapse"
													aria-labelledby="headingThree"
													data-bs-parent="#accordionFaqs"
												>
													<div className="accordion-body">
														<p>
															GameStorm offers a full range of services for game
															development, including game art, design,
															programming, and project management.
														</p>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h5 className="accordion-header" id="headingFour">
													<button
														className="accordion-button collapsed"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target="#collapseFour"
														aria-expanded="false"
														aria-controls="collapseFour"
													>
														What is GameStorm&apos;s approach to testing and
														quality assurance during game development?
													</button>
												</h5>
												<div
													id="collapseFour"
													className="accordion-collapse collapse"
													aria-labelledby="headingFour"
													data-bs-parent="#accordionFaqs"
												>
													<div className="accordion-body">
														<p>
															GameStorm offers a full range of services for game
															development, including game art, design,
															programming, and project management.
														</p>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h5 className="accordion-header" id="headingFive">
													<button
														className="accordion-button collapsed"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target="#collapseFive"
														aria-expanded="false"
														aria-controls="collapseFive"
													>
														How does GameStorm handle player feedback and make
														changes to the game during development?
													</button>
												</h5>
												<div
													id="collapseFive"
													className="accordion-collapse collapse"
													aria-labelledby="headingFive"
													data-bs-parent="#accordionFaqs"
												>
													<div className="accordion-body">
														<p>
															GameStorm offers a full range of services for game
															development, including game art, design,
															programming, and project management.
														</p>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h5 className="accordion-header" id="headingsix">
													<button
														className="accordion-button collapsed"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target="#collapsesix"
														aria-expanded="false"
														aria-controls="collapsesix"
													>
														How does GameStorm ensure the games it develops are
														optimized for performance and stability?
													</button>
												</h5>
												<div
													id="collapsesix"
													className="accordion-collapse collapse"
													aria-labelledby="headingsix"
													data-bs-parent="#accordionFaqs"
												>
													<div className="accordion-body">
														<p>
															GameStorm offers a full range of services for game
															development, including game art, design,
															programming, and project management.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-5 mt-6 mt-lg-0">
							<div className="d-grid gap-5 cus-overflow cus-scrollbar side-wrapper">
								<div className="d-flex flex-column gap-6">
									<div className="sidebar-area p-5">
										<h3 className="visible-slowly-bottom mb-4">
											Service Category
										</h3>
										<ul className="underwriters d-grid gap-3">
											<li>
												<Link
													href="#"
													className="d-center justify-content-between"
												>
													<span>Game Development</span>
													<div className="icon-wrap">
														<i className="material-symbols-outlined mat-icon fs-five">
															double_arrow
														</i>
													</div>
												</Link>
											</li>
											<li>
												<Link
													href="#"
													className="d-center justify-content-between"
												>
													<span>Game Art</span>
													<div className="icon-wrap">
														<i className="material-symbols-outlined mat-icon fs-five">
															double_arrow
														</i>
													</div>
												</Link>
											</li>
											<li>
												<Link
													href="#"
													className="d-center justify-content-between"
												>
													<span>Game Animation</span>
													<div className="icon-wrap">
														<i className="material-symbols-outlined mat-icon fs-five">
															double_arrow
														</i>
													</div>
												</Link>
											</li>
											<li>
												<Link
													href="#"
													className="d-center justify-content-between"
												>
													<span>Game QA Testing</span>
													<div className="icon-wrap">
														<i className="material-symbols-outlined mat-icon fs-five">
															double_arrow
														</i>
													</div>
												</Link>
											</li>
											<li>
												<Link
													href="#"
													className="d-center justify-content-between"
												>
													<span>Game UI/UX</span>
													<div className="icon-wrap">
														<i className="material-symbols-outlined mat-icon fs-five">
															double_arrow
														</i>
													</div>
												</Link>
											</li>
											<li>
												<Link
													href="#"
													className="d-center justify-content-between"
												>
													<span>Out Staffing</span>
													<div className="icon-wrap">
														<i className="material-symbols-outlined mat-icon fs-five">
															double_arrow
														</i>
													</div>
												</Link>
											</li>
										</ul>
									</div>
									<div className="sidebar-area py-8 py-sm-15 text-center p-5">
										<h5 className="mb-4">
											<span>Let’s Work Together</span>
										</h5>
										<h3 className="visible-slowly-bottom mb-8">
											Game Studio Services Agency
										</h3>
										<div className="btn-area alt-bg">
											<Link
												onMouseMove={handleMouseMove}
												style={style}
												href="contact"
												className="box-style btn-box"
											>
												Contact us
												<i className="material-symbols-outlined mat-icon fs-five">
													chevron_right
												</i>
											</Link>
										</div>
										<Link href="#" className="d-center mt-8 call-number gap-2">
											<i className="material-symbols-outlined mat-icon fs-six">
												call
											</i>
											+000 (123) 456 88
										</Link>
									</div>
									<div className="sidebar-area p-5">
										<h3 className="visible-slowly-bottom mb-4">Download</h3>
										<ul className="underwriters d-grid gap-3">
											<li>
												<Link
													href="#"
													className="d-center justify-content-between"
												>
													<span>Download PDF</span>
													<div className="icon-wrap">
														<i className="material-symbols-outlined mat-icon fs-five">
															download
														</i>
													</div>
												</Link>
											</li>
											<li>
												<Link
													href="#"
													className="d-center justify-content-between"
												>
													<span>Download Doc</span>
													<div className="icon-wrap">
														<i className="material-symbols-outlined mat-icon fs-five">
															download
														</i>
													</div>
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceDetails;
