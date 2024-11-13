import bubble from "@/public/images/abs-items/bubble.png";
import ellipse7 from "@/public/images/abs-items/ellipse-7.png";
import Image from "next/image";

interface BannerProps {
	title: string;
	description: string;
}

const Banner = ({ title, description }: BannerProps) => {
	return (
		<section className="banner-section inner-banner position-relative about services-details">
			<div className="shape-area">
				<Image src={bubble} className="shape-1" alt="icon" />
				<Image src={ellipse7} className="shape-2" alt="icon" />
			</div>
			<div className="container position-relative">
				<div className="banner-content row justify-content-between">
					<div className="col-lg-6 col-md-10">
						<div className="main-content">
							<h2 className="visible-slowly-bottom display-four mb-6">
								{title}
							</h2>
							<p className="fs-four">{description}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
