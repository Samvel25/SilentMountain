"use client";
import Image from "next/image";
import Link from "next/link";
import Slider, { Settings } from "react-slick";

const InstagramPost = () => {
	const settings: Settings = {
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		centerMode: true,
		fade: false,
		infinite: true,
		pauseOnFocus: true,
		pauseOnHover: true,
		arrows: false,
		dots: false,
		dotsClass: "section-dots",
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};
	return (
		<section className="instagram-post">
			<div className="container-fluid">
				<div className="row justify-content-center">
					<Slider {...settings} className="instagram-post-carousel">
						<div className="slide-area">
							<div className="img-box d-inline-flex d-center text-center position-relative">
								<Image
									width={289}
									height={312}
									src="/images/instagram-post-1.png"
									alt="Image"
								/>
								<Link
									href="index-3"
									className="abs-area position-absolute d-center gap-2 p-4"
								>
									<i className="fab fa-instagram"></i>
									<span>Instagram</span>
								</Link>
							</div>
						</div>
						<div className="slide-area">
							<div className="img-box d-inline-flex d-center text-center position-relative">
								<Image
									width={289}
									height={312}
									src="/images/instagram-post-2.png"
									alt="Image"
								/>
								<Link
									href="index-3"
									className="abs-area position-absolute d-center gap-2 p-4"
								>
									<i className="fab fa-instagram"></i>
									<span>Instagram</span>
								</Link>
							</div>
						</div>
						<div className="slide-area">
							<div className="img-box d-inline-flex d-center text-center position-relative">
								<Image
									width={289}
									height={312}
									src="/images/instagram-post-3.png"
									alt="Image"
								/>
								<Link
									href="index-3"
									className="abs-area position-absolute d-center gap-2 p-4"
								>
									<i className="fab fa-instagram"></i>
									<span>Instagram</span>
								</Link>
							</div>
						</div>
						<div className="slide-area">
							<div className="img-box d-inline-flex d-center text-center position-relative">
								<Image
									width={289}
									height={312}
									src="/images/instagram-post-4.png"
									alt="Image"
								/>
								<Link
									href="index-3"
									className="abs-area position-absolute d-center gap-2 p-4"
								>
									<i className="fab fa-instagram"></i>
									<span>Instagram</span>
								</Link>
							</div>
						</div>
						<div className="slide-area">
							<div className="img-box d-inline-flex d-center text-center position-relative">
								<Image
									width={289}
									height={312}
									src="/images/instagram-post-5.png"
									alt="Image"
								/>
								<Link
									href="index-3"
									className="abs-area position-absolute d-center gap-2 p-4"
								>
									<i className="fab fa-instagram"></i>
									<span>Instagram</span>
								</Link>
							</div>
						</div>
						<div className="slide-area">
							<div className="img-box d-inline-flex d-center text-center position-relative">
								<Image
									width={289}
									height={312}
									src="/images/instagram-post-6.png"
									alt="Image"
								/>
								<Link
									href="index-3"
									className="abs-area position-absolute d-center gap-2 p-4"
								>
									<i className="fab fa-instagram"></i>
									<span>Instagram</span>
								</Link>
							</div>
						</div>
						<div className="slide-area">
							<div className="img-box d-inline-flex d-center text-center position-relative">
								<Image
									width={289}
									height={312}
									src="/images/instagram-post-7.png"
									alt="Image"
								/>
								<Link
									href="index-3"
									className="abs-area position-absolute d-center gap-2 p-4"
								>
									<i className="fab fa-instagram"></i>
									<span>Instagram</span>
								</Link>
							</div>
						</div>
					</Slider>
				</div>
			</div>
		</section>
	);
};

export default InstagramPost;
