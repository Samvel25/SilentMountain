import communityIllus from "@/public/images/community-illus.png";
import Image from "next/image";
import Link from "next/link";

const Community = () => {
	return (
		<section className="join-our-community pt-120">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div className="main-content p-10 p-sm-15">
							<div className="row align-items-center justify-content-between">
								<div className="col-lg-6">
									<div className="mb-5 mb-sm-10">
										<h2 className="visible-slowly-bottom mb-4">
											Join other King of Jungle!
										</h2>
										<p>
											We are a community of millions of King og Jungle. If
											you&apos;re up for a challenge, join us and become #1 in
											the world!
										</p>
									</div>
									<div className="social-items">
										<h5 className="mb-4">Follow our Dragons on</h5>
										<ul className="d-flex gap-4 social-area">
											<li>
												<Link
													href="https://www.facebook.com/babycheese.studio"
													aria-label="Facebook"
													className="d-center"
												>
													<i className="fab fa-facebook-f"></i>
												</Link>
											</li>
											{/* <li>
												<Link
													href="https://www.instagram.com"
													aria-label="Instagram"
													className="d-center"
												>
													<i className="fab fa-instagram"></i>
												</Link>
											</li> */}
											<li>
												<Link
													href="https://www.linkedin.com/company/babycheese"
													aria-label="Linkedin"
													className="d-center"
												>
													<i className="fab fa-linkedin-in"></i>
												</Link>
											</li>
											<li>
												<Link
													href="https://assetstore.unity.com/"
													aria-label="Unity"
													className="d-center"
												>
													<i className="fab fa-unity"></i>
												</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-lg-5">
									<div className="sec-img">
										<Image src={communityIllus} alt="illus" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Community;
