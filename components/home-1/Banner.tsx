"use client";
import Link from "next/link";
import planet from "@/public/images/abs-items/planet.png";
import Image from "next/image";
import console1Image from "@/public/images/abs-items/console-1.png";
import console2Image from "@/public/images/abs-items/console-2.png";
import ellipse6Image from "@/public/images/abs-items/ellipse-6.png";
import ellipse4Image from "@/public/images/abs-items/ellipse-4.png";
import ellipse5Image from "@/public/images/abs-items/ellipse-5.png";
import ellipse3Image from "@/public/images/abs-items/ellipse-3.png";
import ellipse1Image from "@/public/images/abs-items/ellipse-1.png";
import ellipse2Image from "@/public/images/abs-items/ellipse-2.png";
import topBottomIcon from "@/public/images/icon/top-bottom.png";
import bannerSliderImage1 from "@/public/images/banner-slider-img-1.png";
import appStoreImage from "@/public/images/appstore.png";
import googlePlayImage from "@/public/images/googleplay.png";
import Slider from "react-slick";
import { TypeAnimation } from "react-type-animation";
import PrimaryBtn from "../PrimaryBtn";
import { Next, Prev } from "../SliderBtns";

const Banner = () => {
	const settings = {
		infinite: true,
		autoplay: true,
		centerMode: false,
		centerPadding: "0px 50px",
		focusOnSelect: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: <Prev />,
		nextArrow: <Next />,
		dots: false,
	};
	return (
		<section className="banner-section index-one overflow-hidden ">
			<div className="shape-area">
				<Image src={planet} className="shape-1" alt="icon" />
				<Image src={console1Image} className="shape-2" alt="icon" />
				<Image src={console2Image} className="shape-3" alt="icon" />
			</div>
			<div className="ellipse-area ellipse-one position-absolute">
				<Image src={ellipse6Image} className="ellipse-1" alt="icon" />
				<Image src={ellipse4Image} className="ellipse-2" alt="icon" />
				<Image src={ellipse5Image} className="ellipse-3" alt="icon" />
			</div>
			<div className="ellipse-area ellipse-two position-absolute">
				<Image src={ellipse6Image} className="ellipse-1" alt="icon" />
				<Image src={ellipse3Image} className="ellipse-3" alt="icon" />
				<Image src={ellipse4Image} className="ellipse-4" alt="icon" />
				<Image src={ellipse1Image} className="ellipse-2" alt="icon" />
				<Image src={ellipse5Image} className="ellipse-5" alt="icon" />
			</div>
			<div className="ellipse-area ellipse-three position-absolute">
				<Image src={ellipse6Image} className="ellipse-1" alt="icon" />
			</div>
			<div className="ellipse-area ellipse-four position-absolute">
				<Image src={ellipse6Image} className="ellipse-1" alt="icon" />
				<Image src={ellipse3Image} className="ellipse-2" alt="icon" />
				<Image src={ellipse2Image} className="ellipse-3" alt="icon" />
			</div>
			<div className="overlay overflow-hidden vh-100">
				<div className="banner-content position-relative">
					<div className="container">
						<div className="row justify-content-between justify-content-center align-items-center">
							<div className="col-xl-7 col-lg-7">
								<div className="main-content">
									<div className="mb-8">
										<h3 className="visible-slowly-bottom sub-title">
											<span>Building Gaming Worlds</span>
										</h3>
										<span className="display-one">
											We Craft Games
											<br />
											<TypeAnimation
												sequence={["Entertainment", "Joy", "Games"]}
												wrapper="span"
												className="typed d-inline-block"
												repeat={Infinity}
												speed={2}
												deletionSpeed={50}
											/>
										</span>
										<p className="fs-four">
											We are a technical agency that builds digital products for
											businesses worldwide
										</p>
									</div>
									<PrimaryBtn text="Explore Our Portfolio" href="portfolio" />
								</div>
							</div>
							{/* <div className="col-xl-4 col-lg-5 col-md-7 col-sm-9 mt-10 mt-lg-0 col-10">
								<Slider {...settings} className="game-carousel pb-20">
									<div className="slide-area">
										<div className="top-area d-flex justify-content-end gap-4 mb-5 align-items-end">
											<Image src={topBottomIcon} alt="Image" />
											<h4 className="mb-1">Featured Games</h4>
										</div>
										<div className="single-slider p-3 p-sm-5">
											<div className="thumb-wrapper">
												<div className="thumb">
													<Image src={bannerSliderImage1} alt="Image" />
												</div>
												<div className="app-download-title pt-5 pb-3 text-center">
													<h3>Crazy Wild</h3>
												</div>
												<div className="app-download d-flex gap-5 align-items-center">
													<Link href="https://www.apple.com/app-store/">
														<Image src={appStoreImage} alt="Image" />
													</Link>
													<Link href="https://play.google.com/">
														<Image src={googlePlayImage} alt="Image" />
													</Link>
												</div>
											</div>
										</div>
									</div>
									<div className="slide-area">
										<div className="top-area d-flex justify-content-end gap-4 mb-5 align-items-end">
											<Image src={topBottomIcon} alt="Image" />
											<h4 className="mb-1">Featured Games</h4>
										</div>
										<div className="single-slider p-3 p-sm-5">
											<div className="thumb-wrapper">
												<div className="thumb">
													<Image src={bannerSliderImage1} alt="Image" />
												</div>
												<div className="app-download-title pt-5 pb-3 text-center">
													<h3>Crazy Wild</h3>
												</div>
												<div className="app-download d-flex gap-5 align-items-center">
													<Link href="https://www.apple.com/app-store/">
														<Image src={appStoreImage} alt="Image" />
													</Link>
													<Link href="https://play.google.com/">
														<Image src={googlePlayImage} alt="Image" />
													</Link>
												</div>
											</div>
										</div>
									</div>
								</Slider>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
