import award1 from "@/public/images/aword-1.png";
import award2 from "@/public/images/aword-2.png";
import award3 from "@/public/images/aword-3.png";
import googleplay from "@/public/images/googleplay.png";
import getteam from "@/public/images/getteam.png";
import appstore from "@/public/images/appstore.png";
import amazonstore from "@/public/images/amazonstore.png";
import Image from "next/image";
import Link from "next/link";

const TopFeatures = () => {
	return (
		<section className="our-games bg-transparent top-features pt-120 pb-120">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-xl-6 col-lg-6">
						<div className="d-grid gap-15">
							<div className="single-content">
								<h2 className="visible-slowly-bottom display-four mb-5">
									Ready to Become a Dragon Master?
								</h2>
								<p className="mb-3">
									Take on the hottest dragon game and collect tons of adorable
									fire-breathing dragons! Train them to your will, grow your
									collection, and prove your might to claim the title of top
									Dragon Master in the world!
								</p>
								<p>
									Play on all devices and take your baby dragons wherever you
									go! Available on Windows, iOS, and Android.Play through
									thousands of relaxing levels, team up with your friends in
									Clubs, and win prizes in daily events.
								</p>
							</div>
							<div className="single-content">
								<h3 className="visible-slowly-bottom mb-3">Top Features:</h3>
								<ul className="ms-10 d-grid gap-4">
									<li>Thousands of levels across multiple worlds</li>
									<li>Challenging gameplay to train your brain</li>
									<li>
										Club Tournaments and other exciting ways to play with
										friends
									</li>
									<li>Daily events to help you win more prizes</li>
									<li>Free rewards every day</li>
								</ul>
							</div>
							<div className="single-content">
								<h3 className="visible-slowly-bottom mb-3">Gaming Awards:</h3>
								<div className="d-flex gap-3">
									<div className="single-icon">
										<Image src={award1} alt="icon" />
									</div>
									<div className="single-icon">
										<Image src={award2} alt="icon" />
									</div>
									<div className="single-icon">
										<Image src={award3} alt="icon" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-5 col-lg-6 col-md-10 mt-8 mt-lg-0">
						<div className="single-box tab-content position-relative text-center p-3 p-md-15">
							<div className="main-content py-4">
								<span className="feature-tag d-none d-sm-flex d-center position-absolute">
									Feature
								</span>
								<h3 className="visible-slowly-bottom mb-4">Download Now</h3>
								<ul className="d-flex flex-wrap mb-6 fs-seven align-items-center gap-5 gap-md-10">
									<li>Horror Adventure</li>
									<li>Mobile</li>
									<li>Action RPG</li>
									<li>PC</li>
								</ul>
								<div className="review-box mt-5 mt-md-8 mb-6 mb-md-10 w-100 p-2 p-sm-4 d-center gap-3 justify-content-evenly">
									<div className="single-area">
										<div className="d-flex gap-1 align-items-center mb-1">
											<i className="material-symbols-outlined mat-icon">star</i>
											<h4 className="fs-four">4.5</h4>
										</div>
										<p className="fs-seven">5.2M Reviews</p>
									</div>
									<div className="single-area">
										<h4 className="fs-four mb-1">500M+</h4>
										<p className="fs-seven">Downloads</p>
									</div>
								</div>
								<div className="app-download pb-4 pb-sm-8 mb-4 mb-sm-8 d-grid gap-3 gap-sm-5 align-items-center">
									<div className="d-flex gap-3 gap-sm-5">
										<Link
											href="https://www.apple.com/app-store/"
											className="w-100"
										>
											<Image src={appstore} className="w-100" alt="Image" />
										</Link>
										<Link href="https://play.google.com/" className="w-100">
											<Image src={googleplay} className="w-100" alt="Image" />
										</Link>
									</div>
									<div className="d-flex gap-3 gap-sm-5">
										<Link href="https://www.amazon.com/" className="w-100">
											<Image src={amazonstore} className="w-100" alt="Image" />
										</Link>
										<Link href="https://www.getteam.com/" className="w-100">
											<Image src={getteam} className="w-100" alt="Image" />
										</Link>
									</div>
								</div>
								<p>Game includes optional in-app purchases</p>
							</div>
						</div>
						<div className="social-items text-center">
							<h5 className="mb-4">Follow our Dragons on</h5>
							<ul className="d-flex justify-content-center gap-4 social-area">
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
				</div>
			</div>
		</section>
	);
};

export default TopFeatures;
