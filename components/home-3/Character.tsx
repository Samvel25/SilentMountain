import character1 from "@/public/images/gaming-chracter-design-1.png";
import character2 from "@/public/images/gaming-chracter-design-2.png";
import character3 from "@/public/images/gaming-chracter-design-3.png";
import character4 from "@/public/images/gaming-chracter-design-4.png";
import Image from "next/image";
import Slider from "react-slick";
import { Next, Prev } from "../SliderBtns";

const Character = () => {
	const settings = {
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
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
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	};
	return (
		<section className="gaming-character">
			<div className="container pt-120 pb-120">
				<div className="row section-header justify-content-center">
					<div className="col-lg-6 text-center">
						<h4 className="sub-title">
							Crafting Imaginative <span>Game Art and Design</span>
						</h4>
						<span className="fs-two heading mb-6">
							Mastering Game Art for <span>Immersive Experiences</span>
						</span>
						<p>
							We provide expert game art and design services to gaming studios.
							Let us help bring your digital worlds to life.{" "}
						</p>
					</div>
				</div>
				<div className="row justify-content-end">
					<div className="col-lg-12">
						<Slider {...settings} className="gaming-character-carousel">
							<div className="slide-area">
								<div className="single-slider">
									<div className="img-box">
										<Image src={character1} alt="Image" />
									</div>
								</div>
							</div>
							<div className="slide-area">
								<div className="single-slider">
									<div className="img-box">
										<Image src={character2} alt="Image" />
									</div>
								</div>
							</div>
							<div className="slide-area">
								<div className="single-slider">
									<div className="img-box">
										<Image src={character3} alt="Image" />
									</div>
								</div>
							</div>
							<div className="slide-area">
								<div className="single-slider">
									<div className="img-box">
										<Image src={character4} alt="Image" />
									</div>
								</div>
							</div>
							<div className="slide-area">
								<div className="single-slider">
									<div className="img-box">
										<Image src={character4} alt="Image" />
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

export default Character;
