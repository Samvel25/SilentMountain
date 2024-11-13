import faqIllus from "@/public/images/faq-illus.png";
import Image from "next/image";

interface KeyplatformProps {
	platforms: Array<{
		name: string;
		description: string;
	}>;
}

const Keyplatform = ({ platforms }: KeyplatformProps) => {
	return (
		<section className="faqs-section key-platforms">
			<div className="overlay pt-120 pb-120">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5 order-1 order-lg-0">
							<div className="sec-img">
								<Image src={faqIllus} alt="Image" />
							</div>
						</div>
						<div className="col-lg-6">
							<div className="section-header">
								<span className="fs-two heading mb-6">
									We develop games for these key platforms
								</span>
							</div>
							<div className="accordion" id="accordionKeys">
								{platforms.map((platform, index) => (
									<div key={index} className="accordion-item">
										<h5 className="accordion-header" id={`headingKey${index}`}>
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target={`#collapseKey${index}`}
												aria-expanded="false"
												aria-controls={`collapseKey${index}`}
											>
												{platform.name}
											</button>
										</h5>
										<div
											id={`collapseKey${index}`}
											className="accordion-collapse collapse"
											aria-labelledby={`headingKey${index}`}
											data-bs-parent="#accordionKeys"
										>
											<div className="accordion-body">
												<p>{platform.description}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Keyplatform;
