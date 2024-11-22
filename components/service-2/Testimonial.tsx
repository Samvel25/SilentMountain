import { services } from "@/public/data/servicesData";
import Image from "next/image";
import Slider from "react-slick";
const Testimonial = () => {
	const settings = {
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		fade: false,
		infinite: true,
		pauseOnFocus: true,
		pauseOnHover: true,
		arrows: false,
		dots: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};
	const testimonials = services.flatMap(
		(service) => service.details.testimonials
	);
	return (
		<section className="testimonial-customers pb-120">
			<div className="container pt-120">
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div className="section-header text-center">
							{/* <h4 className="sub-title">
								Our <span>Testimonial</span>
							</h4> */}
							<h4 className="fs-two heading mb-6">
								Our <span>Testimonial</span>
							</h4>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<Slider {...settings} className="customers-carousel">
						{testimonials.map((testimonial, index) => (
							<div className="slide-area" key={index}>
								<div className="single-slider p-8">
									<div className="icon-area mb-2">
										<i className="material-symbols-outlined mat-icon fs-one">
											{" "}
											format_quote{" "}
										</i>
									</div>
									<p className="fs-four">{testimonial.text}</p>
									<div className="d-flex mt-8 gap-6 align-items-center">
										<div className="img-box">
											<Image
												src={testimonial.image}
												width={60}
												height={60}
												className="rounded-circle"
												alt={testimonial.name}
											/>
										</div>
										<div className="profile-info">
											<h5 className="mb-2">{testimonial.name}</h5>
											<p>{testimonial.location}</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
