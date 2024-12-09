"use client";
import shopImg1 from "@/public/images/shop-img-1.png";
import shopImg2 from "@/public/images/shop-img-2.png";
import shopImg3 from "@/public/images/shop-img-3.png";
import shopImg4 from "@/public/images/shop-img-4.png";
import Image from "next/image";
import { useState } from "react";
import review1 from "@/public/images/review-image-1.png";
import review2 from "@/public/images/review-image-2.png";
import Slider, { Settings } from "react-slick";
import Link from "next/link";
import { Next, Prev } from "../SliderBtns";

const ShopDetails = () => {
	const [nav1, setNav1] = useState<Slider | null>();
	const [nav2, setNav2] = useState<Slider | null>();
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [qty, setQty] = useState(1);
	const handleMinus = () => {
		qty > 1 ? setQty(qty - 1) : "";
	};
	const handleMouseMove = (e: any) => {
		setX(e.nativeEvent.offsetX);
		setY(e.nativeEvent.offsetY);
	};
	const style = {
		"--x": `${x}px`,
		"--y": `${y}px`,
	} as React.CSSProperties;
	const settings1: Settings = {
		infinite: false,
		autoplay: true,
		centerMode: false,
		centerPadding: "0px 50px",
		focusOnSelect: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		swipeToSlide: true,
		asNavFor: nav2 as undefined,
		dots: false,
	};
	const settings2: Settings = {
		slidesToShow: 2,
		slidesToScroll: 1,
		asNavFor: nav1 as undefined,
		dots: false,
		arrows: true,
		prevArrow: <Prev />,
		nextArrow: <Next />,
		centerMode: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					arrows: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					arrows: false,
				},
			},
		],
	};

	return (
		<div className="shop-details">
			<div className="container pt-120 border-0">
				<div className="shop-details-content">
					<div className="row justify-content-center">
						<div className="col-xl-6 col-md-8">
							<Slider
								ref={(slider1) => setNav1(slider1)}
								{...settings1}
								className="slider-for"
							>
								<div className="single-slide">
									<Image src={shopImg1} alt="avatar" />
								</div>
								<div className="single-slide">
									<Image src={shopImg2} alt="avatar" />
								</div>
								<div className="single-slide">
									<Image src={shopImg3} alt="avatar" />
								</div>
								<div className="single-slide">
									<Image src={shopImg4} alt="avatar" />
								</div>
							</Slider>
							<Slider
								ref={(slider2) => setNav2(slider2)}
								{...settings2}
								className="slider-nav mt-4 px-8 px-sm-15"
							>
								<div className="single-slide">
									<div className="slide">
										<Image src={shopImg1} alt="avatar" />
									</div>
								</div>
								<div className="single-slide">
									<div className="slide">
										<Image src={shopImg2} alt="avatar" />
									</div>
								</div>
								<div className="single-slide">
									<div className="slide">
										<Image src={shopImg3} alt="avatar" />
									</div>
								</div>
								<div className="single-slide">
									<div className="slide">
										<Image src={shopImg4} alt="avatar" />
									</div>
								</div>
							</Slider>
						</div>
						<div className="col-xl-6 col-md-8 mt-7 mt-xl-0">
							<form action="cart">
								<h2 className="visible-slowly-bottom mb-4">Stickers</h2>
								<p>Product Id: 04.02.039.68</p>
								<div className="star-item my-4 d-flex gap-4 align-items-center">
									<div className="star-area">
										<Link href="#">
											<i className="fas fa-star"></i>
										</Link>
										<Link href="#">
											<i className="fas fa-star"></i>
										</Link>
										<Link href="#">
											<i className="fas fa-star"></i>
										</Link>
										<Link href="#">
											<i className="fas fa-star"></i>
										</Link>
										<Link href="#">
											<i className="fas fa-star"></i>
										</Link>
									</div>
									<p className="fs-seven">2 write a review</p>
								</div>
								<p>Availability: 29</p>
								<div className="price-area py-3 d-flex my-5 gap-3 align-items-center">
									<span className="fs-four cur-price">$200.00</span>
									<span className="fs-five">
										<del>$300.00</del>
									</span>
								</div>
								<p className="description my-6">
									Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis
									des mauris commodo venenatis ligula commodo leez sed blandit
									convallis dignissim onec vel pellentesque neque.
								</p>
								<div className="d-flex align-items-center gap-3">
									<p>Quantity:</p>
									<div className="qtySelector px-4 px-3 d-inline-flex align-items-center text-center">
										<i
											onClick={handleMinus}
											className="fas fa-minus d-center decreaseQty"
										></i>
										<span className="qtyValue text-center m-0 xxltxt">
											{qty}
										</span>
										<i
											onClick={() => setQty(qty + 1)}
											className="fas fa-plus d-center increaseQty"
										></i>
									</div>
								</div>
								<div className="btn-area d-flex gap-3 my-7 alt-bg">
									<button
										onMouseMove={handleMouseMove}
										style={style}
										className="box-style btn-box second-btn d-center"
									>
										Add to Cart
									</button>
									<Link
										onMouseMove={handleMouseMove}
										style={style}
										href="cart"
										className="box-style btn-box d-center gap-2"
									>
										Buy it Now
									</Link>
								</div>
								<div className="share-link d-flex gap-3 align-items-center">
									<p>Share: </p>
									<ul className="d-flex gap-4 social-area">
										<li>
											<Link
												href="https://www.facebook.com/babycheese.studio"
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
							</form>
						</div>
					</div>
				</div>
				<div className="product-about mt-60">
					<div className="row">
						<div className="col-lg-12">
							<div className="shop-section d-center justify-content-start my-8">
								<ul
									className="nav btn-area flex-nowrap gap-5 alt-bg"
									role="tablist"
								>
									<li className="nav-item" role="presentation">
										<Link
											onMouseMove={handleMouseMove}
											style={style}
											href="shop-details-1"
											className="box-style btn-box d-center second-btn"
										>
											Description
										</Link>
									</li>
									<li className="nav-item" role="presentation">
										<Link
											onMouseMove={handleMouseMove}
											style={style}
											href="shop-details-2"
											className="box-style btn-box d-center active"
										>
											Review
										</Link>
									</li>
								</ul>
							</div>
							<div className="row">
								<div className="col-xl-7 col-lg-10">
									<div className="tab-content">
										<div className="customer-reviews">
											<h4 className="mb-4">Review</h4>
											<div className="single-box p-3 p-sm-6">
												<div className="profile-area d-flex gap-3 gap-sm-6">
													<div className="img-area">
														<Image
															src={review1}
															className="max-un"
															alt="image"
														/>
													</div>
													<div className="info-area">
														<div className="star-item fs-seven d-flex gap-1 align-items-center">
															<Link href="#">
																<i className="fas fa-star"></i>
															</Link>
															<Link href="#">
																<i className="fas fa-star"></i>
															</Link>
															<Link href="#">
																<i className="fas fa-star"></i>
															</Link>
															<Link href="#">
																<i className="fas fa-star"></i>
															</Link>
															<Link href="#">
																<i className="fas fa-star"></i>
															</Link>
														</div>
														<div className="date mt-1 mb-4 d-flex flex-wrap align-items-center gap-3">
															<Link href="#">
																<h5>Cameron Williamson</h5>
															</Link>
															<span className="fs-6">
																10 Jan, 2023 . 4:00 Pm
															</span>
														</div>
														<p>
															All the Lorem Ipsum generators on the Internet
															tend to repeat predefined chunks as necessary,
															making this the first true generator on the
															Internet. It uses a dictionary of over 200 Latin
															words, combined with a handful of model sentence
															structures, to generate Lorem Ipsum which looks
															reasonable.
														</p>
													</div>
												</div>
											</div>
											<div className="single-box p-3 p-sm-6">
												<div className="profile-area d-flex gap-3 gap-sm-6">
													<div className="img-area">
														<Image
															src={review2}
															className="max-un"
															alt="image"
														/>
													</div>
													<div className="info-area">
														<div className="star-item fs-seven d-flex gap-1 align-items-center">
															<Link href="#">
																<i className="fas fa-star"></i>
															</Link>
															<Link href="#">
																<i className="fas fa-star"></i>
															</Link>
															<Link href="#">
																<i className="fas fa-star"></i>
															</Link>
															<Link href="#">
																<i className="fas fa-star"></i>
															</Link>
															<Link href="#">
																<i className="fas fa-star"></i>
															</Link>
														</div>
														<div className="date mt-1 mb-4 d-flex flex-wrap align-items-center gap-3">
															<Link href="#">
																<h5>Theresa Webb</h5>
															</Link>
															<span className="fs-6">
																10 Jan, 2023 . 4:00 Pm
															</span>
														</div>
														<p>
															All the Lorem Ipsum generators on the Internet
															tend to repeat predefined chunks as necessary,
															making this the first true generator on the
															Internet. It uses a dictionary of over 200 Latin
															words, combined with a handful of model sentence
															structures, to generate Lorem Ipsum which looks
															reasonable.
														</p>
													</div>
												</div>
											</div>
											<div className="review-box mt-10 mt-sm-15">
												<div className="add-review p-4 p-sm-10">
													<h3>Add Your Comments</h3>
													<div className="d-grid align-items-center my-8 mb-60">
														<p>Your Rating:</p>
														<div className="star-head fs-seven d-flex flex-wrap gap-3 gap-sm-0 mt-3 flex-wrap align-items-center">
															<div className="star-area">
																<Link href="#">
																	<i className="fas fa-star"></i>
																</Link>
															</div>
															<div className="star-area d-flex gap-3">
																<Link href="#">
																	<i className="fas fa-star"></i>
																</Link>
																<Link href="#">
																	<i className="fas fa-star"></i>
																</Link>
															</div>
															<div className="star-area d-flex gap-3">
																<Link href="#">
																	<i className="fas fa-star"></i>
																</Link>
																<Link href="#">
																	<i className="fas fa-star"></i>
																</Link>
																<Link href="#">
																	<i className="fas fa-star"></i>
																</Link>
															</div>
															<div className="star-area d-flex gap-3">
																<Link href="#">
																	<i className="fas fa-star"></i>
																</Link>
																<Link href="#">
																	<i className="fas fa-star"></i>
																</Link>
																<Link href="#">
																	<i className="fas fa-star"></i>
																</Link>
																<Link href="#">
																	<i className="fas fa-star"></i>
																</Link>
															</div>
															<div className="star-area d-flex gap-3">
																<Link href="#">
																	<i className="fas fa-star"></i>
																</Link>
																<Link href="#">
																	<i className="fas fa-star"></i>
																</Link>
																<Link href="#">
																	<i className="fas fa-star"></i>
																</Link>
																<Link href="#">
																	<i className="fas fa-star"></i>
																</Link>
																<Link href="#">
																	<i className="fas fa-star"></i>
																</Link>
															</div>
														</div>
													</div>
													<form action="#" className="comments-form p-5 p-sm-8">
														<div className="row">
															<div className="col-sm-12">
																<div className="single-input">
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
															<div className="col-sm-12">
																<div className="single-input">
																	<label htmlFor="message">
																		Leave us a message
																	</label>
																	<textarea
																		id="message"
																		cols={30}
																		rows={5}
																		placeholder="Please type your Message here..."
																	></textarea>
																</div>
															</div>
														</div>
														<div className="btn-area">
															<div className="btn-area mt-3 mt-sm-4">
																<button
																	onMouseMove={handleMouseMove}
																	style={style}
																	className="box-style text-nowrap btn-box"
																>
																	Send Message
																</button>
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

export default ShopDetails;
