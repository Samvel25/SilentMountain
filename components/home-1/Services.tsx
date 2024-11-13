import Link from "next/link";
import Slider from "react-slick";
import { Next, Prev } from "../SliderBtns";
import { useState } from "react";
import { services } from "../../public/data/servicesData";

const Services = () => {
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
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		fade: false,
		infinite: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: true,
		prevArrow: <Prev position="top-right" />,
		nextArrow: <Next position="top-right" />,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					arrows: false,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false,
				},
			},
		],
	};

	return (
		<section className="our-services pt-120">
			<div className="container overflow-hidden">
				<div className="row align-items-center section-text">
					<div className="col-lg-4">
						{/* <h4 className="sub-title">
							Our Team <span>Provide</span>
						</h4> */}
						<span className="fs-two heading">
							Our Team <span>Provides</span>
						</span>
					</div>
					<div className="col-lg-6">
						{/* <p>
							Gamestorm Studios provides end-to-end services for clients wishing
							to employ game development businesses skilled in Unity3D, Unreal,
							PlayCanvas, blockchain, game design, VR, NFT, metaverse, and more.
						</p> */}
					</div>
				</div>
				<Slider {...settings} className="services-carousel">
					{services.map((service) => (
						<div className="slide-area" key={service.id}>
							<div
								className="single-slider box-style box-first p-5 px-xl-9 py-xl-10"
								onMouseMove={handleMouseMove}
								style={style}
							>
								<div className="icon-box d-center">
									<i className="material-symbols-outlined fs-two">
										sports_esports
									</i>
								</div>
								<div className="title-area">
									<h3 className="mt-6 mb-3">{service.title}</h3>
									<p>{service.description}</p>
									<div className="link-area mt-8">
										<Link
											href={`/our-services-details/${service.id}`}
											className="d-flex align-items-center"
										>
											Learn More
											<i className="material-symbols-outlined mat-icon">
												arrow_right_alt
											</i>
										</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
};

export default Services;
