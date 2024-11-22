import Image from "next/image";
import storyIllus from "@/public/images/our-story-illus.png";
import Slider from "react-slick";
import { Next, Prev } from "../SliderBtns";

const Story = () => {
	const settings = {
		slidesToShow: 1,
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
	};
	return (
		<section
			id="story"
			className="gaming-character our-story bg-transparent pb-120"
		>
			<div className="container">
				<div className="row align-items-center justify-content-between">
					<div className="col-lg-6">
						<div className="section-text">
							<h4 className="sub-title">Our story</h4>
							<p>
								We have a beautiful story, worth telling. Let us walk you
								through our biggest milestones.
							</p>
						</div>
						<Slider {...settings} className="our-story-carousel">
							<div className="slide-area">
								<div className="single-slider">
									<div className="single-area d-flex gap-3 gap-sm-5 p-5 py-sm-10 px-sm-8">
										<div className="year-box alt-bg d-center">
											<h3>2008</h3>
										</div>
										<div className="text-box">
											<h3 className="pb-2">Company founded</h3>
											<p>
												Company founded. Initial team of 5 employees including 2
												programmers, 1 designer, 1 artist, and 1 project
												manager.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="slide-area">
								<div className="single-slider">
									<div className="single-area d-flex gap-3 gap-sm-5 p-5 py-sm-10 px-sm-8">
										<div className="year-box alt-bg d-center">
											<h3>2008</h3>
										</div>
										<div className="text-box">
											<h3 className="pb-2">Company founded</h3>
											<p>
												Company founded. Initial team of 5 employees including 2
												programmers, 1 designer, 1 artist, and 1 project
												manager.
											</p>
										</div>
									</div>
								</div>
							</div>
						</Slider>
					</div>
					<div className="col-lg-5">
						<div className="sec-img">
							<Image src={storyIllus} alt="sec-img" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Story;
