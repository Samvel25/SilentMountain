import bubble from "@/public/images/abs-items/bubble.png";
import ellipse7 from "@/public/images/abs-items/ellipse-7.png";
import Image from "next/image";
import Link from "next/link";
const Banner = () => {
	return (
		<section className="banner-section inner-banner position-relative store">
			<div className="shape-area">
				<Image src={bubble} className="shape-1" alt="icon" />
				<Image src={ellipse7} className="shape-2" alt="icon" />
			</div>
			<div className="container position-relative">
				<div className="banner-content row justify-content-between">
					<div className="col-lg-6 col-md-10">
						<div className="main-content">
							<h2 className="visible-slowly-bottom display-four mb-4">
								<span>Get in touch with our friendly team</span>
							</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
