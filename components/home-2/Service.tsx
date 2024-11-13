import star from "@/public/images/abs-items/star.png";
import servicesthumb from "@/public/images/services-thumb.png";
import Image from "next/image";
import Link from "next/link";
import { services } from "../../public/data/servicesData";

const Service = () => {
	return (
		<section className="our-services index-two pt-120 pb-120">
			<div className="container position-relative">
				<div className="shape-area d-none d-lg-block position-absolute">
					<Image src={star} alt="Icon" />
				</div>
				<div className="row justify-content-between">
					<div className="col-lg-5">
						<div className="section-header">
							<h4 className="sub-title">
								Bringing Your <span>Gaming Vision</span> to Life
							</h4>
							<span className="fs-two heading mb-6">
								Global <span>Excellence In</span>
								Game Solutions
							</span>
							<p>
								Our company stands out for providing high-quality solutions that
								enhance the gaming experience, leveraging advanced technology
								and employing imaginative strategies to captivate players on
								every platform.
							</p>
						</div>
						<div className="services-thumb d-inline-block position-relative">
							{/* <div className="thumb">
								<Image src={servicesthumb} alt="Image" />
							</div> */}
							{/* <div className="link-item">
								<Link
									href="#"
									className="py-4 px-7 text-decoration-underline position-absolute bottom-0 end-0"
								>
									See All Services
								</Link>
							</div> */}
						</div>
					</div>
					<div className="col-lg-6 mt-10 mt-lg-0">
						<div className="cus-mar">
							{services.map((service) => (
								<div
									key={service.id}
									className="single-box box-style box-second py-5 py-sm-8 d-flex gap-4 gap-md-6 justify-content-between align-items-center"
								>
									<div className="content-box">
										<Link href={`/our-services-details/${service.id}`}>
											<h3 className="visible-slowly-bottom mb-3">
												{service.title}
											</h3>
										</Link>
										<p>{service.description}</p>
									</div>
									<Link
										href={`/our-services-details/${service.id}`}
										className="end-area d-center"
									>
										<i className="material-symbols-outlined"> call_made </i>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Service;
