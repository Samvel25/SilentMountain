import Image from "next/image";
import recentImg1 from "@/public/images/recently-completed-img-1.png";
import recentImg2 from "@/public/images/recently-completed-img-2.png";
import recentImg3 from "@/public/images/recently-completed-img-3.png";
import Slider, { Settings } from "react-slick";
import Link from "next/link";
import { useState } from "react";

const Recent = () => {
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
	const settings: Settings = {
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		fade: true,
		infinite: true,
		pauseOnFocus: true,
		pauseOnHover: true,
		arrows: false,
		dots: true,
		dotsClass: "slick-double-dots",
		customPaging: function (i: number) {
			return (
				<>
					<div className="dots" title={`${i + 1} of 3`}></div>
					<span
						className="progressBar fs-five"
						role="button"
						title={`${i + 1} of 3`}
					>
						<span className="string"> {i + 1}</span>
						<span className="totalString">3</span>
					</span>
				</>
			);
		},
		responsive: [
			{
				breakpoint: 575,
				settings: {
					arrows: false,
				},
			},
		],
	};
	return (
		<section className="recently-completed">
			<div className="container pt-120 pb-120">
				<div className="row section-header justify-content-between align-items-center">
					<div className="col-lg-8">
						<h4 className="sub-title">
							Recently <span>Completed</span>
						</h4>
						<span className="fs-two heading mb-6">
							Game Development and Art, <span>Elevated to a New Level</span>
						</span>
					</div>
					<div className="col-lg-3 btn-movement">
						<Link
							onMouseMove={handleMouseMove}
							style={style}
							href="#"
							className="box-style d-center px-3 gap-3 m-auto"
						>
							View All Project
							<i className="material-symbols-outlined"> call_made </i>
						</Link>
					</div>
				</div>
				<div className="row justify-content-end">
					<div className="col-lg-12">
						<Slider {...settings} className="recently-completed-carousel">
							<div className="slide-area">
								<div className="single-slider position-relative d-grid align-items-center">
									<div className="img-box">
										<Image src={recentImg1} alt="Image" />
									</div>
									<div className="position-absolute cus-position start-0">
										<div className="content-box p-3 p-sm-8">
											<Link href="game">
												<h3 className="visible-slowly-bottom mb-3">
													Game Development
												</h3>
											</Link>
											<p>
												Game design, programming, art, animation, audio,
												testing, marketing, publishing, monetization,
												maintenance, player support, analytics.
											</p>
											<Link href="game" className="end-area mt-8 d-center">
												<i className="material-symbols-outlined"> call_made </i>
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="slide-area">
								<div className="single-slider position-relative d-grid align-items-center">
									<div className="img-box">
										<Image src={recentImg2} alt="Image" />
									</div>
									<div className="position-absolute cus-position start-0">
										<div className="content-box p-3 p-sm-8">
											<Link href="game">
												<h3 className="visible-slowly-bottom mb-3">
													Game Development
												</h3>
											</Link>
											<p>
												Game design, programming, art, animation, audio,
												testing, marketing, publishing, monetization,
												maintenance, player support, analytics.
											</p>
											<Link href="game" className="end-area mt-8 d-center">
												<i className="material-symbols-outlined"> call_made </i>
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="slide-area">
								<div className="single-slider position-relative d-grid align-items-center">
									<div className="img-box">
										<Image src={recentImg3} alt="Image" />
									</div>
									<div className="position-absolute cus-position start-0">
										<div className="content-box p-3 p-sm-8">
											<Link href="game">
												<h3 className="visible-slowly-bottom mb-3">
													Game Development
												</h3>
											</Link>
											<p>
												Game design, programming, art, animation, audio,
												testing, marketing, publishing, monetization,
												maintenance, player support, analytics.
											</p>
											<Link href="game" className="end-area mt-8 d-center">
												<i className="material-symbols-outlined"> call_made </i>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</Slider>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Recent;
