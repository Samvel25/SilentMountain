// import { useRouter } from "next/router";
// import { services } from "@/public/data/servicesData";
// import ourfocusbg from "@/public/images/our-focus-bg.png";
// import blogImg from "@/public/images/blog-img-1.png";
// import Image from "next/image";
// import Slider from "react-slick";
// import Link from "next/link";
// import { useState } from "react";

// const ServiceDetails = () => {
// 	const router = useRouter();
// 	const { id } = router.query;
// 	const service = services.find((service) => service.id === id);

// 	const [x, setX] = useState(0);
// 	const [y, setY] = useState(0);
// 	const handleMouseMove = (e: any) => {
// 		setX(e.nativeEvent.offsetX);
// 		setY(e.nativeEvent.offsetY);
// 	};
// 	const style = {
// 		"--x": `${x}px`,
// 		"--y": `${y}px`,
// 	} as React.CSSProperties;

// 	const settings = {
// 		slidesToShow: 2,
// 		slidesToScroll: 1,
// 		autoplay: true,
// 		autoplaySpeed: 3000,
// 		fade: false,
// 		infinite: true,
// 		pauseOnFocus: true,
// 		pauseOnHover: true,
// 		arrows: false,
// 		dots: false,
// 		responsive: [
// 			{
// 				breakpoint: 1200,
// 				settings: {
// 					slidesToShow: 1,
// 				},
// 			},
// 			{
// 				breakpoint: 992,
// 				settings: {
// 					slidesToShow: 2,
// 				},
// 			},
// 			{
// 				breakpoint: 768,
// 				settings: {
// 					slidesToShow: 1,
// 				},
// 			},
// 		],
// 	};

// 	if (!service) {
// 		return <p>Loading...</p>;
// 	}

// 	return (
// 		<section className="service-details pt-120">
// 			<div className="container">
// 				<div className="main-content pb-120">
// 					<div className="row justify-content-between">
// 						<div className="col-xl-7 col-lg-7">
// 							<div className="content-wrapper">
// 								<div className="single-content mb-8">
// 									<h2 className="visible-slowly-bottom display-four mb-2">
// 										{service.title}
// 									</h2>
// 									<p>{service.details.intro}</p>
// 									<div className="img-area mt-6">
// 										<Image src={ourfocusbg} alt="Image" />
// 									</div>
// 								</div>
// 								<div className="single-content row mb-8">
// 									<div className="col-xl-7">
// 										<h3 className="visible-slowly-bottom mb-6">
// 											We Provide Best {service.title} Services
// 										</h3>
// 										<p className="mb-6">{service.description}</p>
// 										<p>{service.description}</p>
// 									</div>
// 									<div className="col-xl-5 mt-4 mt-xl-0">
// 										<ul className="ms-10 mb-8 d-grid gap-3 list">
// 											{service.details.areas.map((area, index) => (
// 												<li key={index} className="d-flex align-items-center">
// 													{area}
// 												</li>
// 											))}
// 										</ul>
// 										<div className="img-area">
// 											<Image src={blogImg} alt="Image" />
// 										</div>
// 									</div>
// 								</div>
// 								<div className="faqs-section mb-15 bg-transparent key-platforms">
// 									<div className="section-header">
// 										<h3 className="visible-slowly-bottom mb-4">
// 											We develop games for these key platforms
// 										</h3>
// 										<p>
// 											Embracing game development on most popular platforms and
// 											reaching the attention of players with a wide variety of
// 											preferences is one of our main features.
// 										</p>
// 									</div>
// 									<div className="accordion" id="accordionKeys">
// 										{service.details.platforms.map((platform, index) => (
// 											<div className="accordion-item" key={index}>
// 												<h5
// 													className="accordion-header"
// 													id={`headingKey${index}`}
// 												>
// 													<button
// 														className="accordion-button collapsed"
// 														type="button"
// 														data-bs-toggle="collapse"
// 														data-bs-target={`#collapseKey${index}`}
// 														aria-expanded="false"
// 														aria-controls={`collapseKey${index}`}
// 													>
// 														{platform.name}
// 													</button>
// 												</h5>
// 												<div
// 													id={`collapseKey${index}`}
// 													className="accordion-collapse collapse"
// 													aria-labelledby={`headingKey${index}`}
// 													data-bs-parent="#accordionKeys"
// 												>
// 													<div className="accordion-body">
// 														<p>{platform.description}</p>
// 													</div>
// 												</div>
// 											</div>
// 										))}
// 									</div>
// 								</div>
// 								<div className="single-content mt-10">
// 									<div className="faqs-section bg-transparent position-relative">
// 										<h3 className="visible-slowly-bottom mb-10">
// 											Frequently Asked Questions
// 										</h3>
// 										<div className="accordion" id="accordionFaqs">
// 											{service.details.faqs.map((faq, index) => (
// 												<div className="accordion-item" key={index}>
// 													<h5
// 														className="accordion-header"
// 														id={`heading${index}`}
// 													>
// 														<button
// 															className="accordion-button collapsed"
// 															type="button"
// 															data-bs-toggle="collapse"
// 															data-bs-target={`#collapse${index}`}
// 															aria-expanded="false"
// 															aria-controls={`collapse${index}`}
// 														>
// 															{faq.question}
// 														</button>
// 													</h5>
// 													<div
// 														id={`collapse${index}`}
// 														className="accordion-collapse collapse"
// 														aria-labelledby={`heading${index}`}
// 														data-bs-parent="#accordionFaqs"
// 													>
// 														<div className="accordion-body">
// 															<p>{faq.answer}</p>
// 														</div>
// 													</div>
// 												</div>
// 											))}
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="col-xl-4 col-lg-5 mt-6 mt-lg-0">
// 							<div className="d-grid gap-5 cus-overflow cus-scrollbar side-wrapper">
// 								<div className="d-flex flex-column gap-6">
// 									<div className="sidebar-area p-5">
// 										<h3 className="visible-slowly-bottom mb-4">
// 											Service Category
// 										</h3>
// 										<ul className="underwriters d-grid gap-3">
// 											<li>
// 												<Link
// 													href="#"
// 													className="d-center justify-content-between"
// 												>
// 													<span>Game Development</span>
// 													<div className="icon-wrap">
// 														<i className="material-symbols-outlined mat-icon fs-five">
// 															double_arrow
// 														</i>
// 													</div>
// 												</Link>
// 											</li>
// 											<li>
// 												<Link
// 													href="#"
// 													className="d-center justify-content-between"
// 												>
// 													<span>Game Art</span>
// 													<div className="icon-wrap">
// 														<i className="material-symbols-outlined mat-icon fs-five">
// 															double_arrow
// 														</i>
// 													</div>
// 												</Link>
// 											</li>
// 											<li>
// 												<Link
// 													href="#"
// 													className="d-center justify-content-between"
// 												>
// 													<span>Game Animation</span>
// 													<div className="icon-wrap">
// 														<i className="material-symbols-outlined mat-icon fs-five">
// 															double_arrow
// 														</i>
// 													</div>
// 												</Link>
// 											</li>
// 											<li>
// 												<Link
// 													href="#"
// 													className="d-center justify-content-between"
// 												>
// 													<span>Game QA Testing</span>
// 													<div className="icon-wrap">
// 														<i className="material-symbols-outlined mat-icon fs-five">
// 															double_arrow
// 														</i>
// 													</div>
// 												</Link>
// 											</li>
// 											<li>
// 												<Link
// 													href="#"
// 													className="d-center justify-content-between"
// 												>
// 													<span>Game UI/UX</span>
// 													<div className="icon-wrap">
// 														<i className="material-symbols-outlined mat-icon fs-five">
// 															double_arrow
// 														</i>
// 													</div>
// 												</Link>
// 											</li>
// 											<li>
// 												<Link
// 													href="#"
// 													className="d-center justify-content-between"
// 												>
// 													<span>Out Staffing</span>
// 													<div className="icon-wrap">
// 														<i className="material-symbols-outlined mat-icon fs-five">
// 															double_arrow
// 														</i>
// 													</div>
// 												</Link>
// 											</li>
// 										</ul>
// 									</div>
// 									<div className="sidebar-area py-8 py-sm-15 text-center p-5">
// 										<h5 className="mb-4">
// 											<span>Let’s Work Together</span>
// 										</h5>
// 										<h3 className="visible-slowly-bottom mb-8">
// 											Game Studio Services Agency
// 										</h3>
// 										<div className="btn-area alt-bg">
// 											<Link
// 												onMouseMove={handleMouseMove}
// 												style={style}
// 												href="contact"
// 												className="box-style btn-box"
// 											>
// 												Contact us
// 												<i className="material-symbols-outlined mat-icon fs-five">
// 													chevron_right
// 												</i>
// 											</Link>
// 										</div>
// 										<Link href="#" className="d-center mt-8 call-number gap-2">
// 											<i className="material-symbols-outlined mat-icon fs-six">
// 												call
// 											</i>
// 											+000 (123) 456 88
// 										</Link>
// 									</div>
// 									<div className="sidebar-area p-5">
// 										<h3 className="visible-slowly-bottom mb-4">Download</h3>
// 										<ul className="underwriters d-grid gap-3">
// 											<li>
// 												<Link
// 													href="#"
// 													className="d-center justify-content-between"
// 												>
// 													<span>Download PDF</span>
// 													<div className="icon-wrap">
// 														<i className="material-symbols-outlined mat-icon fs-five">
// 															download
// 														</i>
// 													</div>
// 												</Link>
// 											</li>
// 											<li>
// 												<Link
// 													href="#"
// 													className="d-center justify-content-between"
// 												>
// 													<span>Download Doc</span>
// 													<div className="icon-wrap">
// 														<i className="material-symbols-outlined mat-icon fs-five">
// 															download
// 														</i>
// 													</div>
// 												</Link>
// 											</li>
// 										</ul>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default ServiceDetails;
