import gallery10 from "@/public/images/gallery-img-10.png";
import gallery11 from "@/public/images/gallery-img-11.png";
import gallery12 from "@/public/images/gallery-img-12.png";
import gallery13 from "@/public/images/gallery-img-13.png";
import Image from "next/image";
import Slider from "react-slick";
import { Next, Prev } from "../SliderBtns";

const Gallery = () => {
	const settings = {
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		fade: false,
		infinite: true,
		pauseOnFocus: true,
		pauseOnHover: true,
		arrows: true,
		prevArrow: <Prev position="bottom-right" />,
		nextArrow: <Next position="bottom-right" />,
		dots: true,
		dotsClass: "section-dots",
		customPaging: function (i: number) {
			return (
				<>
					<span className="dot" role="button" title={`${i + 1} of 5`}>
						<span className="string">{`${i + 1} / 5 `}</span>
					</span>
				</>
			);
		},
		responsive: [
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
					centerMode: true,
				},
			},
		],
	};
	return (
		<section className="gaming-character ongoing-values bg-transparent gallery pt-120">
			<div className="container">
				<div className="row section-text justify-content-center">
					<div className="col-lg-7 text-center">
						<span className="fs-two heading">Gallery</span>
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<div className="row justify-content-end">
					<div className="col-lg-12">
						<Slider {...settings} className="gallery-carousel">
							<div className="slide-area">
								<div className="single-slider">
									<Image src={gallery10} alt="gallery" />
								</div>
							</div>
							<div className="slide-area">
								<div className="single-slider">
									<Image src={gallery11} alt="gallery" />
								</div>
							</div>
							<div className="slide-area">
								<div className="single-slider">
									<Image src={gallery12} alt="gallery" />
								</div>
							</div>
							<div className="slide-area">
								<div className="single-slider">
									<Image src={gallery13} alt="gallery" />
								</div>
							</div>
							<div className="slide-area">
								<div className="single-slider">
									<Image src={gallery12} alt="gallery" />
								</div>
							</div>
						</Slider>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
