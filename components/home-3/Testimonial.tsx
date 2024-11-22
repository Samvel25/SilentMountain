import Image from "next/image";
import Link from "next/link";
import Slider, { Settings } from "react-slick";
import { services } from "@/public/data/servicesData";

// Import slick carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Extract all testimonials from all services
const testimonials = services.flatMap(
	(service) => service.details.testimonials || []
);

const Testimonial = () => {
	// Check if testimonials are available
	if (testimonials.length === 0) {
		console.warn("No testimonials found.");
		return null; // Return null if no testimonials are available
	}

	const settings: Settings = {
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		fade: false,
		infinite: true,
		pauseOnFocus: true,
		pauseOnHover: true,
		arrows: false,
		dots: false,
		dotsClass: "section-dots",
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
		<section className="testimonial-area">
			<div className="container pt-120 pb-120">
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<Slider {...settings} className="testimonial-sec-carousel">
							{testimonials.map((testimonial, index) => (
								<div className="slide-area" key={index}>
									<div className="single-slider text-center">
										<div className="img-box">
											<Image
												src={testimonial.image}
												width={80}
												height={80}
												className="rounded-circle"
												alt="Image"
											/>
										</div>
										<div className="star-area pt-3 pt-md-6 pb-4 pb-md-8">
											{[...Array(5)].map((_, i) => (
												<Link href="#" key={i}>
													<i className="fas fa-star"></i>
												</Link>
											))}
										</div>
										<p className="fs-four">{testimonial.text}</p>
										<div className="profile-info pt-8">
											<h5 className="mb-2">{testimonial.name}</h5>
											<p>{testimonial.position}</p>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
